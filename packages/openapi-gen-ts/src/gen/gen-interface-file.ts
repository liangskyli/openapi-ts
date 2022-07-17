import { colors, prettierData } from '@liangskyli/utils';
import fs from 'fs-extra';
import path from 'path';
import { fileTip, packageName } from '../utils';
import type { IGenTsDataOpts } from './index';

type IOpts = {
  genSchemaAPIAbsolutePath: string;
} & Pick<
  IGenTsDataOpts,
  | 'prettierOptions'
  | 'requestFilePath'
  | 'requestParamsType'
  | 'requestQueryOmit'
  | 'requestBodyOmit'
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
  const schemaData = await import(
    path.join(genSchemaAPIAbsolutePath, 'schema.json')
  );
  const schemaPathData = schemaData.properties;
  Object.keys(schemaPathData).forEach((item) => {
    const itemValue = schemaPathData[item].properties;
    // method 只支持 get post
    let method = '';
    let haveQuery = false;
    let haveBody = false;
    let bodyMediaType = 'application/json';
    let responseMediaType = 'application/json';
    if (itemValue.get) {
      method = 'GET';
      if (
        itemValue.get?.properties?.responses?.properties?.['200']?.properties
          ?.content?.properties?.['text/plain']
      ) {
        responseMediaType = 'text/plain';
      }
      haveQuery =
        !!itemValue.get?.properties?.parameters?.properties?.query?.properties;
    }
    if (itemValue.post) {
      method = 'POST';
      if (
        itemValue.post?.properties?.responses?.properties?.['200']?.properties
          ?.content?.properties?.['text/plain']
      ) {
        responseMediaType = 'text/plain';
      }
      haveQuery =
        !!itemValue.post?.properties?.parameters?.properties?.query?.properties;
      haveBody =
        !!itemValue.post?.properties?.requestBody?.properties?.content
          ?.properties?.['text/plain'];
      if (haveBody) {
        bodyMediaType = 'text/plain';
      } else {
        haveBody =
          !!itemValue.post?.properties?.requestBody?.properties?.content
            ?.properties?.['application/json'];
      }
    }
    if (method) {
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

      interfaceAPIType.push(`'${item}': {`);
      requestAPI.push(`'${item}': <T extends Record<any, any> = {}>(
        config: IConfig<
          ${IConfigT.length > 0 ? IConfigT.join('') : 'T,'}
          {
      `);
      if (haveQuery) {
        if (requestQueryOmit.length === 0) {
          interfaceAPIType.push(
            `Query: paths['${item}']['${method.toLowerCase()}']['parameters']['query'];`,
          );
        } else {
          const omitKeys = requestQueryOmit
            .map((omitItem) => `'${omitItem}'`)
            .join(' | ');
          interfaceAPIType.push(
            `Query: Omit<paths['${item}']['${method.toLowerCase()}']['parameters']['query'], ${omitKeys}>;`,
          );
        }
        requestAPI.push(`params: IApi['${item}']['Query'];`);
      }
      if (haveBody) {
        if (requestBodyOmit.length === 0) {
          interfaceAPIType.push(
            `Body: paths['${item}']['${method.toLowerCase()}']['requestBody']['content']['${bodyMediaType}'];`,
          );
        } else {
          const omitKeys = requestBodyOmit
            .map((omitItem) => `'${omitItem}'`)
            .join(' | ');
          interfaceAPIType.push(
            `Body: Omit<paths['${item}']['${method.toLowerCase()}']['requestBody']['content']['${bodyMediaType}'], ${omitKeys}>;`,
          );
        }
        requestAPI.push(`data: IApi['${item}']['Body'];`);
      }
      interfaceAPIType.push(
        `Response: paths['${item}']['${method.toLowerCase()}']['responses']['200']['content']['${responseMediaType}'];`,
      );
      interfaceAPIType.push('};');
      requestAPI.push(`}
        >,
      ): Promise<IApi['${item}']['Response']> => {  
      const { ${haveQuery ? 'params,' : ''} ${
        haveBody ? 'data,' : ''
      } ...otherConfig } = config;

      return request({
        method: '${method}',
        url: '${item}',
        ${haveQuery ? 'params: params,' : ''}
        ${haveBody ? 'data: data,' : ''}
        ...otherConfig,
      });
    },
      `);
    }
  });

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
