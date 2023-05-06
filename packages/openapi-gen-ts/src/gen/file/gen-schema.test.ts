import { getAbsolutePath, winPath } from '@liangskyli/utils';
import fs from 'fs-extra';
import { expect, test, vi } from 'vitest';
import { GenSchema } from './gen-schema';

test('Generate schema-api/schema.json file', async () => {
  const tsSchemaPath = getAbsolutePath(
    './src/gen/file/__test__snapshots__/example/ts-schema.ts',
  );
  const genSchema = new GenSchema({
    tsSchemaPath,
    genTsAbsolutePath: '/',
  });
  genSchema.writeFile();
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
