import type { IGenTsDataOptsCLI } from '../../lib';

const config: IGenTsDataOptsCLI = [
  {
    genTsDir: './test/all-gen-dirs/gen-ts-dir-cli1',
    openapiPath: './test/example/openapi/openapiv3-example.json',
  },
  {
    genTsDir: './test/all-gen-dirs/gen-ts-dir-cli2',
    openapiPath: './test/example/openapi/openapi-v3.yaml',
  },
];
export default config;
