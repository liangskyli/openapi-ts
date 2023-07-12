import type { OpenapiDefinition } from '../utils';
import { methodList } from '../utils';
import { GenInterfaceApi } from './file/gen-interface-api';
import { GenRequest } from './file/gen-request';
import { GenRequestApi } from './file/gen-request-api';
import type { IGenTsDataOpts } from './index';

export type IGenInterfaceRequestFile = {
  genTsAbsolutePath: string;
  schemaData: OpenapiDefinition;
} & Pick<
  IGenTsDataOpts,
  'prettierOptions' | 'requestFile' | 'requestQueryOmit' | 'requestBodyOmit'
>;

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
  const havePath =
    !!itemValue![method]?.properties?.parameters?.properties?.path?.properties;

  let responseMediaType: string | undefined;
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
    havePath,
    haveBody,
    bodyMediaTypes,
    responseMediaType,
    methodObjRequired,
    responseCode,
    method,
  };
};

export type IReturnTypeProcessMethodMediaData = ReturnType<
  typeof processMethodMediaData
>;

const genInterfaceRequestFile = async (opts: IGenInterfaceRequestFile) => {
  const {
    genTsAbsolutePath,
    prettierOptions,
    requestFile,
    requestQueryOmit = [],
    requestBodyOmit = [],
    schemaData,
  } = opts;
  let { requestParamsType = '' } = requestFile ?? {};
  const requestFilePath = requestFile?.path;

  if (!requestFilePath) {
    requestParamsType = 'AxiosRequestConfig';
    const genRequest = new GenRequest({ genTsAbsolutePath, prettierOptions });
    await genRequest.writeFile();
  }

  const genInterfaceAPIType = new GenInterfaceApi({
    genTsAbsolutePath,
    prettierOptions,
  });

  const genRequestAPI = new GenRequestApi({
    genTsAbsolutePath,
    prettierOptions,
    requestParamsType,
    path: requestFilePath,
  });

  const schemaPathData = schemaData.properties;
  if (schemaPathData) {
    Object.entries(schemaPathData).forEach(([url, urlValue]) => {
      const itemValue = urlValue.properties;
      const method = getMethod(itemValue);
      if (method) {
        const methodMediaData = processMethodMediaData(itemValue, method);
        genInterfaceAPIType.body({
          ...methodMediaData,
          requestQueryOmit,
          requestBodyOmit,
          url,
        });
        genRequestAPI.body({
          ...methodMediaData,
          requestParamsType,
          url,
        });
      }
    });
  }

  await genInterfaceAPIType.writeFile();
  await genRequestAPI.writeFile();
};

export { genInterfaceRequestFile };
