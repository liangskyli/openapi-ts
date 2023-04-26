import { colors, prettierData } from '@liangskyli/utils';
import fs from 'fs-extra';
import path from 'path';
import type { OpenapiDefinition } from '../utils';
import { fileTip, methodList, packageName } from '../utils';
import type { IGenTsDataOpts } from './index';

type IOpts = {
  genSchemaAPIAbsolutePath: string;
} & Pick<
  IGenTsDataOpts,
  'prettierOptions' | 'requestFile' | 'requestQueryOmit' | 'requestBodyOmit'
>;

const generateRequestFile = async (opts: IOpts) => {
  const { genSchemaAPIAbsolutePath, prettierOptions } = opts;
  const requestData: string[] = [];
  requestData.push(`${fileTip}
    import type { AxiosRequestConfig } from 'axios';
    import axios from 'axios';
    import type { IAPIRequest } from '${packageName}';
    
    const request: IAPIRequest = (config) => {
      return axios(config).then((res) => res.data);
    };
    
    export default request;
    export { AxiosRequestConfig };
  `);
  const requestDataAbsolutePath = path.join(
    genSchemaAPIAbsolutePath,
    'request.ts',
  );
  fs.writeFileSync(
    requestDataAbsolutePath,
    await prettierData(requestData.join(''), prettierOptions),
  );
  console.info(colors.green('Generate schema-api/request.ts file success'));
};

const getMethod = (itemValue?: OpenapiDefinition) => {
  let method = '';
  if (itemValue) {
    // url properties only use first key for method
    method = Object.keys(itemValue)[0];
    if (method && !methodList.find((item) => item === method)) {
      method = '';
    }
  }
  return method;
};

const processMethodMediaData = (
  itemValue: OpenapiDefinition['properties'],
  method: string,
) => {
  const haveQuery =
    !!itemValue![method]?.properties?.parameters?.properties?.query?.properties;

  let responseMediaType = '';
  const methodObjRequired = itemValue![method]?.required ?? [];
  const responsesProperties =
    itemValue![method]?.properties?.responses?.properties;
  let responseCode: '200' | 'default' = '200';
  if (!responsesProperties?.['200']) {
    responseCode = 'default';
  }
  // first use responses 200, then use responses default
  const responsesContentProperties =
    responsesProperties?.[responseCode]?.properties?.content?.properties;
  if (responsesContentProperties) {
    // responses content properties only use first key
    responseMediaType = Object.keys(responsesContentProperties)[0];
  }

  let haveBody = false;
  let bodyMediaTypes = [''];
  const bodyContentProperties =
    itemValue![method]?.properties?.requestBody?.properties?.content
      ?.properties;
  if (bodyContentProperties) {
    bodyMediaTypes = Object.keys(bodyContentProperties);
    haveBody = true;
  }
  return {
    haveQuery,
    haveBody,
    bodyMediaTypes,
    responseMediaType,
    methodObjRequired,
    responsesContentProperties,
    responseCode,
    method,
  };
};

type IReturnTypeProcessMethodMediaData = ReturnType<
  typeof processMethodMediaData
>;
type IGenInterfaceAPITypeBodyOpts = IReturnTypeProcessMethodMediaData &
  Pick<Required<IOpts>, 'requestQueryOmit' | 'requestBodyOmit'> & {
    url: string;
  };

const genInterfaceAPIType = {
  head: (interfaceAPIType: string[]) => {
    interfaceAPIType.push(`${fileTip}
  import type { paths } from './ts-schema';
  `);
    interfaceAPIType.push('\n export interface IApi {');
  },
  body: (interfaceAPIType: string[], opts: IGenInterfaceAPITypeBodyOpts) => {
    const {
      haveQuery,
      haveBody,
      bodyMediaTypes,
      responseMediaType,
      methodObjRequired,
      responsesContentProperties,
      responseCode,
      method,
      requestQueryOmit,
      requestBodyOmit,
      url,
    } = opts;
    interfaceAPIType.push(`'${url}': {`);
    if (haveQuery) {
      const omitKeys = requestQueryOmit
        .map((omitItem) => `'${omitItem}'`)
        .join(' | ');
      const queryInterface = `paths['${url}']['${method}']['parameters']['query']`;
      interfaceAPIType.push(
        omitKeys
          ? `Query: Omit<${queryInterface}, ${omitKeys}>;`
          : `Query: ${queryInterface};`,
      );
    }
    if (haveBody) {
      const omitKeys = requestBodyOmit
        .map((omitItem) => `'${omitItem}'`)
        .join(' | ');
      const requestBodyRequired =
        methodObjRequired.find((item) => item === 'requestBody') !== undefined;
      const bodyInterfaces = bodyMediaTypes.map((bodyMediaType) => {
        let bodyInterface = `paths['${url}']['${method}']['requestBody']['content']['${bodyMediaType}']`;
        if (!requestBodyRequired) {
          bodyInterface = `(paths['${url}']['${method}']['requestBody'] & Record<string, never>)['content']['${bodyMediaType}']`;
        }
        return omitKeys ? `Omit<${bodyInterface}, ${omitKeys}>` : bodyInterface;
      });
      interfaceAPIType.push(
        `Body${requestBodyRequired ? '' : '?'}: ${bodyInterfaces.join(' & ')};`,
      );
    }
    if (responsesContentProperties) {
      interfaceAPIType.push(
        `Response: paths['${url}']['${method}']['responses']['${responseCode}']['content']['${responseMediaType}'];`,
      );
    } else {
      interfaceAPIType.push('Response: any');
    }
    interfaceAPIType.push('};');
  },
  footer: (interfaceAPIType: string[]) => {
    interfaceAPIType.push('}');
  },
};

type IGenRequestAPIHeadOpts = Partial<
  Pick<Required<IOpts>['requestFile'], 'requestParamsType' | 'path'>
>;
type IGenRequestAPIBodyOpts = IReturnTypeProcessMethodMediaData &
  Pick<Required<IOpts>['requestFile'], 'requestParamsType'> & {
    url: string;
  };

const genRequestAPI = {
  head: (requestAPI: string[], opts: IGenRequestAPIHeadOpts) => {
    const { requestParamsType, path: requestFilePath } = opts;
    requestAPI.push(`${fileTip}
  ${
    requestParamsType !== ''
      ? `import type {${requestParamsType} } from '${
          requestFilePath ? requestFilePath : './request'
        }';`
      : ''
  } 
   import request from '${requestFilePath ? requestFilePath : './request'}';
   import type { IApi } from './interface-api';
  `);
    requestAPI.push('\n');
    requestAPI.push(`
    type IConfig<T extends Record<any, any>, U extends Record<any, any>> = T & U;
   `);
    requestAPI.push('\n export const requestApi = {');
  },
  body: (requestAPI: string[], opts: IGenRequestAPIBodyOpts) => {
    const {
      haveQuery,
      haveBody,
      methodObjRequired,
      method,
      requestParamsType,
      url,
    } = opts;
    const IConfigT: string[] = [];
    if (haveQuery || haveBody) {
      IConfigT.push('Omit<T');
      if (requestParamsType !== '') {
        IConfigT.push(` & ${requestParamsType}, 'method' | 'url'`);
      } else {
        IConfigT.push(', ');
      }
      if (haveQuery) {
        if (requestParamsType !== '') {
          IConfigT.push('| "params"');
        } else {
          IConfigT.push('"params"');
        }
      }
      if (haveBody) {
        if (requestParamsType !== '') {
          IConfigT.push('| "data"');
        } else {
          if (haveQuery) {
            IConfigT.push(' | ');
          }
          IConfigT.push('"data"');
        }
      }
      IConfigT.push('>,');
    } else {
      if (requestParamsType !== '') {
        IConfigT.push(`Omit<T & ${requestParamsType}, 'method' | 'url'>,`);
      } else {
        IConfigT.push('T,');
      }
    }

    requestAPI.push(`'${url}': <T extends Record<any, any> = Record<string, never>>(
        config: IConfig<
          ${IConfigT.length > 0 ? IConfigT.join('') : 'T,'}
      `);
    requestAPI.push(!haveQuery && !haveBody ? 'Record<string, never>' : '{');
    if (haveQuery) {
      requestAPI.push(`params: IApi['${url}']['Query'];`);
    }
    if (haveBody) {
      const requestBodyRequired =
        methodObjRequired.find((item) => item === 'requestBody') !== undefined;
      requestAPI.push(
        `data${requestBodyRequired ? '' : '?'}: IApi['${url}']['Body'];`,
      );
    }
    if (haveQuery || haveBody) {
      requestAPI.push('}');
    }
    requestAPI.push(`>,
      ): Promise<IApi['${url}']['Response']> => {  
      const { ${haveQuery ? 'params,' : ''} ${
      haveBody ? 'data,' : ''
    } ...otherConfig } = config;

      return request({
        method: '${method}',
        url: '${url}',
        ${haveQuery ? 'params: params,' : ''}
        ${haveBody ? 'data: data,' : ''}
        ...otherConfig,
      });
    },
      `);
  },
  footer: (requestAPI: string[]) => {
    requestAPI.push('}');
  },
};

const genInterfaceFile = async (opts: IOpts) => {
  const {
    genSchemaAPIAbsolutePath,
    prettierOptions,
    requestFile,
    requestQueryOmit = [],
    requestBodyOmit = [],
  } = opts;
  let { requestParamsType = '' } = requestFile ?? {};
  const requestFilePath = requestFile?.path;

  if (!requestFilePath) {
    requestParamsType = 'AxiosRequestConfig';
    await generateRequestFile(opts);
  }

  const interfaceAPIType: string[] = [];
  genInterfaceAPIType.head(interfaceAPIType);

  const requestAPI: string[] = [];
  genRequestAPI.head(requestAPI, { requestParamsType, path: requestFilePath });

  const schemaData = fs.readJSONSync(
    path.join(genSchemaAPIAbsolutePath, 'schema.json'),
  ) as OpenapiDefinition;
  const schemaPathData = schemaData.properties;
  if (schemaPathData) {
    Object.entries(schemaPathData).forEach(([url, urlValue]) => {
      const itemValue = urlValue.properties;
      const method = getMethod(itemValue);
      if (method) {
        const methodMediaData = processMethodMediaData(itemValue, method);
        genInterfaceAPIType.body(interfaceAPIType, {
          ...methodMediaData,
          requestQueryOmit,
          requestBodyOmit,
          url,
        });
        genRequestAPI.body(requestAPI, {
          ...methodMediaData,
          requestParamsType,
          url,
        });
      }
    });
  }
  genInterfaceAPIType.footer(interfaceAPIType);
  genRequestAPI.footer(requestAPI);

  const interfaceAPITypeAbsolutePath = path.join(
    genSchemaAPIAbsolutePath,
    'interface-api.ts',
  );
  fs.writeFileSync(
    interfaceAPITypeAbsolutePath,
    await prettierData(interfaceAPIType.join(''), prettierOptions),
  );

  console.info(
    colors.green('Generate schema-api/interface-api.ts file success'),
  );

  const requestAPIAbsolutePath = path.join(
    genSchemaAPIAbsolutePath,
    'request-api.ts',
  );
  fs.writeFileSync(
    requestAPIAbsolutePath,
    await prettierData(requestAPI.join(''), prettierOptions),
  );

  console.info(colors.green('Generate schema-api/request-api.ts file success'));
};

export { genInterfaceFile };
