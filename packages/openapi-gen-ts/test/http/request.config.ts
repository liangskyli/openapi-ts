import type { IGenTsDataOptsCLI } from '../../lib';

const config: IGenTsDataOptsCLI = [
  {
    genTsDir: './test/gen-ts-dir',
    openapiPath: './test/openapi/openapiv3-example.json',
  },
  {
    genTsDir: './test/gen-ts-dir2',
    openapiPath: './test/openapi/openapiv3-example.json',
  },
];
export default config;
