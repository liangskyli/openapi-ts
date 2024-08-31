import { defineConfig } from '../../lib/index.js';

export default defineConfig([
  {
    genTsDir: './test/all-gen-dirs/gen-ts-dir-cli1',
    openapiPath: new URL(
      '../../test/example/openapi/openapiv3-example.json',
      import.meta.url,
    ),
  },
  {
    genTsDir: './test/all-gen-dirs/gen-ts-dir-cli2',
    openapiPath: new URL(
      '../../test/example/openapi/openapi-v3.yaml',
      import.meta.url,
    ),
  },
]);
