import { fs, getAbsolutePath, winPath } from '@liangskyli/utils';
import { describe, expect, test, vi } from 'vitest';
import { GenSchema } from '../../../src/gen/file/gen-schema';

describe('Generate schema-api/schema.json file', () => {
  test('Generate success', async () => {
    const tsSchemaPath = getAbsolutePath('./test/example/ts-schema.ts');
    const genSchema = new GenSchema({
      tsSchemaPath,
      genTsAbsolutePath: '/',
    });
    await genSchema.writeFile();
    const args = vi.mocked(fs.writeFileSync).mock.calls[0];
    expect((global as any).writePrettierFileArgs.prettierOptions).toEqual({
      parser: 'json',
    });
    expect(winPath(args[0] as string)).toBe('/schema.json');
    expect((global as any).writePrettierFileArgs.successTip).toBe(
      'Generate schema-api/schema.json success',
    );
    await expect(args[1]).toMatchFileSnapshot(
      './__test__snapshots__/schema.json',
    );
  });

  test('Generate fail', async () => {
    const tsSchemaPath = getAbsolutePath('./test/example/ts-schema-error.ts');
    expect(
      () =>
        new GenSchema({
          tsSchemaPath,
          genTsAbsolutePath: '/',
          typescriptJsonSchemaOptions: {
            ignoreErrors: false,
          },
        }),
    ).toThrow('Generate schema-api/schema.json fail');
  });
});
