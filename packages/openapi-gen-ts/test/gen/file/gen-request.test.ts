import { winPath } from '@liangskyli/utils';
import fs from 'fs-extra';
import { expect, test, vi } from 'vitest';
import { GenRequest } from '../../../src/gen/file/gen-request';

test('Generate schema-api/request.ts file', async () => {
  let genRequest = new GenRequest({ genTsAbsolutePath: '/my-test' });
  await genRequest.writeFile();
  const args = vi.mocked(fs.writeFileSync).mock.calls[0];
  expect((global as any).writePrettierFileArgs.prettierOptions).toBeUndefined();
  expect(winPath(args[0] as string)).toBe('/my-test/request.ts');
  expect((global as any).writePrettierFileArgs.successTip).toBe(
    'Generate schema-api/request.ts file success',
  );
  await expect(args[1]).toMatchFileSnapshot('./__test__snapshots__/request.ts');

  vi.clearAllMocks();
  genRequest = new GenRequest({
    genTsAbsolutePath: '/my-test',
    prettierOptions: { singleQuote: true },
  });
  await genRequest.writeFile();
  expect((global as any).writePrettierFileArgs.prettierOptions).toEqual({
    singleQuote: true,
  });
});
