import { fs } from '@liangskyli/utils';
import path from 'node:path';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import genTsData from '../../src/gen';

describe('genTsData', () => {
  beforeEach(() => {
    vi.unmock('@liangskyli/utils');
  });
  test('genTsData openapiPath1', async () => {
    const data = await genTsData({
      genTsDir: './test/all-gen-dirs/gen-ts-dir',
      openapiPath: new URL(
        '../example/openapi/openapiv3-example.json',
        import.meta.url,
      ),
      requestFile: {
        path: '../../../example/request',
        requestParamsType: 'AxiosRequestConfig',
      },
      typescriptJsonSchemaOptions: { strictNullChecks: true },
    });
    expect(data.genTsAbsolutePath).toBe(
      path.join(process.cwd(), './test/all-gen-dirs/gen-ts-dir/schema-api'),
    );
    expect(
      fs.existsSync(
        path.join(
          process.cwd(),
          './test/all-gen-dirs/gen-ts-dir/schema-api/request.ts',
        ),
      ),
    ).toBeFalsy();
    expect(data.schemaDefinition).toHaveProperty('properties');
  });

  test('genTsData openapiPath2', async () => {
    const data = await genTsData({
      genTsDir: './test/all-gen-dirs/gen-ts-dir2',
      //openapiPath: new URL('https://petstore3.swagger.io/api/v3/openapi.yaml'),
      openapiPath: new URL('../example/openapi/openapi.yaml', import.meta.url),
    });
    expect(data.genTsAbsolutePath).toBe(
      path.join(process.cwd(), './test/all-gen-dirs/gen-ts-dir2/schema-api'),
    );
    expect(
      fs.existsSync(
        path.join(
          process.cwd(),
          './test/all-gen-dirs/gen-ts-dir2/schema-api/request.ts',
        ),
      ),
    ).toBeTruthy();
    expect(data.schemaDefinition).toHaveProperty('properties');
  });

  test('genTsData genTsDir not exist', async () => {
    await expect(
      genTsData({
        genTsDir: './test/all-gen-dirs/gen-ts-dir-not-exist',
        openapiPath: new URL(
          '../example/openapi/openapiv3-example.json',
          import.meta.url,
        ),
      }),
    ).rejects.toThrow('genTsDir not exits!');
  });
  test('genTsData openapiPath not exist', async () => {
    await expect(
      genTsData({
        genTsDir: './test/all-gen-dirs/gen-ts-dir',
        openapiPath: '',
      }),
    ).rejects.toThrow('openapiPath not exits!');
  });
});
