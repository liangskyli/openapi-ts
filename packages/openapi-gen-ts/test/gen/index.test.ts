import fs from 'fs-extra';
import path from 'path';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import genTsData from '../../src/gen';

describe('genTsData', () => {
  beforeEach(() => {
    vi.unmock('fs-extra');
    vi.unmock('./src/utils.ts');
  });
  test('genTsData 1', async () => {
    const data = await genTsData({
      genTsDir: './test/all-gen-dirs/gen-ts-dir',
      openapiPath: './test/example/openapi/openapiv3-example.json',
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

  test('genTsData 2', async () => {
    const data = await genTsData({
      genTsDir: './test/all-gen-dirs/gen-ts-dir2',
      openapiPath: new URL('https://petstore3.swagger.io/api/v3/openapi.yaml'),
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
        openapiPath: './test/example/openapi/openapiv3-example.json',
      }),
    ).rejects.toThrow('genTsDir not exits!');
  });
  test('genTsData openapiPath not exist', async () => {
    await expect(
      genTsData({
        genTsDir: './test/all-gen-dirs/gen-ts-dir',
        openapiPath: './test/example/openapi/not-exist.json',
      }),
    ).rejects.toThrow('openapiPath not exits!');
  });
});
