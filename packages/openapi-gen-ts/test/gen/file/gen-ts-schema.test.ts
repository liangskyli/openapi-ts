import { winPath } from '@liangskyli/utils';
import fs from 'fs-extra';
import { describe, expect, test, vi } from 'vitest';
import { GenTsSchema } from '../../../src/gen/file/gen-ts-schema';

describe('Generate schema-api/ts-schema.ts file', () => {
  test('json file', async () => {
    const schema = new URL(
      '../../example/openapi/openapiv3-example.json',
      import.meta.url,
    );

    const genTsSchema = new GenTsSchema(schema, {
      genTsAbsolutePath: '/',
      openAPITSOptions: {},
    });
    await genTsSchema.generator();
    await genTsSchema.writeFile();
    const args = vi.mocked(fs.writeFileSync).mock.calls[0];
    expect(
      (global as any).writePrettierFileArgs.prettierOptions,
    ).toBeUndefined();
    expect(winPath(args[0] as string)).toBe('/ts-schema.ts');
    expect((global as any).writePrettierFileArgs.successTip).toBe(
      'Generate schema-api/ts-schema.ts success',
    );
    await expect(args[1]).toMatchFileSnapshot(
      './__test__snapshots__/ts-schema-json.ts',
    );
  });
  test('yaml file', async () => {
    const schema = new URL(
      '../../example/openapi/openapi-v3.yaml',
      import.meta.url,
    );

    const genTsSchema = new GenTsSchema(schema, {
      genTsAbsolutePath: '/',
      openAPITSOptions: {},
    });
    await genTsSchema.generator();
    await genTsSchema.writeFile();
    const args = vi.mocked(fs.writeFileSync).mock.calls[0];
    expect(
      (global as any).writePrettierFileArgs.prettierOptions,
    ).toBeUndefined();
    expect(winPath(args[0] as string)).toBe('/ts-schema.ts');
    expect((global as any).writePrettierFileArgs.successTip).toBe(
      'Generate schema-api/ts-schema.ts success',
    );
    await expect(args[1]).toMatchFileSnapshot(
      './__test__snapshots__/ts-schema-yaml.ts',
    );
  });
});
