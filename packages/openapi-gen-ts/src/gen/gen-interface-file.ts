import { colors, prettierData } from '@liangskyli/utils';
import fs from 'fs-extra';
import path from 'path';
import type { OpenapiDefinition } from '../utils';
import { fileTip, methodList, packageName } from '../utils';
import type { IGenTsDataOpts } from './index';

type IOpts = {
  genSchemaAPIAbsolutePath: string;
} & Partial<
  Pick<
    IGenTsDataOpts,
    | 'prettierOptions'
    | 'requestFilePath'
    | 'requestParamsType'
    | 'requestQueryOmit'
    | 'requestBodyOmit'
  >
>;

const genInterfaceFile = async (opts: IOpts) => {
  const {
    genSchemaAPIAbsolutePath,
    prettierOptions,
    requestFilePath,
    requestQueryOmit = [],
    requestBodyOmit = [],
  } = opts;
  let { requestParamsType = '' } = opts;

  if (!requestFilePath) {
    requestParamsType = 'AxiosRequestConfig';
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
  }

  const interfaceAPIType: string[] = [];
  interfaceAPIType.push(`${fileTip}
  import type { paths } from './ts-schema';
  `);
  interfaceAPIType.push('\n export interface IApi {');

  const requestAPI: string[] = [];
  requestAPI.push(`${fileTip}
  /* eslint-disable @typescript-eslint/ban-types */
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
  const schemaData = fs.readJSONSync(
    path.join(genSchemaAPIAbsolutePath, 'schema.json'),
  ) as OpenapiDefinition;
  const schemaPathData = schemaData.properties;
  if (schemaPathData) {
    Object.entries(schemaPathData).forEach(([url, urlValue]) => {
      const itemValue = urlValue.properties;
      let method = '';
      let haveQuery = false;
      let haveBody = false;
      let bodyMediaTypes = [''];
      let responseMediaType = '';
      if (itemValue) {
        // url properties only use first key for method
        method = Object.keys(itemValue)[0];
        if (method && !methodList.find((item) => item === method)) {
          method = '';
        }
      }
      if (method) {
        const methodObjRequired = itemValue![method]?.required ?? [];
        const responsesContentProperties =
          itemValue![method]?.properties?.responses?.properties?.['200']
            ?.properties?.content?.properties;
        if (responsesContentProperties) {
          // responses 200 content properties only use first key
          responseMediaType = Object.keys(responsesContentProperties)[0];
        }
        haveQuery =
          !!itemValue![method]?.properties?.parameters?.properties?.query
            ?.properties;
        const bodyContentProperties =
          itemValue![method]?.properties?.requestBody?.properties?.content
            ?.properties;
        if (bodyContentProperties) {
          bodyMediaTypes = Object.keys(bodyContentProperties);
          haveBody = true;
        }

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

        interfaceAPIType.push(`'${url}': {`);
        requestAPI.push(`'${url}': <T extends Record<any, any> = {}>(
        config: IConfig<
          ${IConfigT.length > 0 ? IConfigT.join('') : 'T,'}
          {
      `);
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
          requestAPI.push(`params: IApi['${url}']['Query'];`);
        }
        if (haveBody) {
          const omitKeys = requestBodyOmit
            .map((omitItem) => `'${omitItem}'`)
            .join(' | ');
          const requestBodyRequired =
            methodObjRequired.find((item) => item === 'requestBody') !==
            undefined;
          const bodyInterfaces = bodyMediaTypes.map((bodyMediaType) => {
            let bodyInterface = `paths['${url}']['${method}']['requestBody']['content']['${bodyMediaType}']`;
            if (!requestBodyRequired) {
              bodyInterface = `(paths['${url}']['${method}']['requestBody'] & {})['content']['${bodyMediaType}']`;
            }
            return omitKeys
              ? `Omit<${bodyInterface}, ${omitKeys}>`
              : bodyInterface;
          });
          interfaceAPIType.push(
            `Body${requestBodyRequired ? '' : '?'}: ${bodyInterfaces.join(
              ' & ',
            )};`,
          );
          requestAPI.push(
            `data${requestBodyRequired ? '' : '?'}: IApi['${url}']['Body'];`,
          );
        }
        interfaceAPIType.push(
          `Response: paths['${url}']['${method}']['responses']['200']['content']['${responseMediaType}'];`,
        );
        interfaceAPIType.push('};');
        requestAPI.push(`}
        >,
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
      }
    });
  }
  interfaceAPIType.push('}');
  requestAPI.push('}');

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
