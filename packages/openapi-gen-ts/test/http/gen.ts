import genTsData from '../../src/index';
//import * as path from 'path';

genTsData({
  genTsDir: './test/gen-ts-dir',
  openapiPath: './test/openapi/openapiv3-example.json',
  requestFile: {
    path: '../../http/request',
    //path: path.join(__dirname, './request'),
    requestParamsType: 'AxiosRequestConfig',
  },
  //requestQueryOmit: ['activityId','b'],
  //requestBodyOmit: ['a','b'],
}).then();

genTsData({
  genTsDir: './test/gen-ts-dir2',
  openapiPath: new URL(
    'https://petstore3.swagger.io/api/v3/openapi.yaml',
    //'https://raw.githubusercontent.com/liangskyli/openapi-ts/master/packages/openapi-gen-ts/test/openapi/openapiv3-example.json',
  ),
}).then();
