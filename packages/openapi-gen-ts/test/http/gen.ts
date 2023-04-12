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
