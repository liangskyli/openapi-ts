import { getAbsolutePath, winPath } from '@liangskyli/utils';
import fs from 'fs-extra';
import { expect, test, vi } from 'vitest';
import { GenTsSchema } from '../../../../src/gen/file/gen-ts-schema';

test('Generate schema-api/ts-schema.ts file', async () => {
  const schema = getAbsolutePath('./test/openapi/openapiv3-example.json');

  const genTsSchema = new GenTsSchema(schema, {
    genTsAbsolutePath: '/',
    openAPITSOptions: {},
  });
  await genTsSchema.generator();
  genTsSchema.writeFile();
  const args = vi.mocked(fs.writeFileSync).mock.calls[0];
  expect((global as any).writePrettierFileArgs.prettierOptions).toBeUndefined();
  expect(winPath(args[0] as string)).toBe('/ts-schema.ts');
  expect((global as any).writePrettierFileArgs.successTip).toBe(
    'Generate schema-api/ts-schema.ts success',
  );
  await expect(args[1]).toMatchFileSnapshot(
    './__test__snapshots__/ts-schema.ts',
  );
});
