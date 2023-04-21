import type { IGenTsDataOptsCLI } from '../../lib';

const config: IGenTsDataOptsCLI = [
  {
    genTsDir: './test/gen-ts-dir',
    openapiPath: './test/openapi/openapiv3-example.json',
  },
  {
    genTsDir: './test/gen-ts-dir2',
    openapiPath: new URL(
      //'https://petstore3.swagger.io/api/v3/openapi.yaml',
      'https://raw.githubusercontent.com/liangskyli/openapi-ts/master/packages/openapi-gen-ts/test/openapi/openapiv3-example.json',
    ),
  },
];
export default config;
