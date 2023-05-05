import fs from 'fs-extra';
import { expect, test, vi } from 'vitest';
import { GenRequest } from './gen-request';

test('Generate schema-api/request.ts file', async () => {
  let genRequest = new GenRequest({ genTsAbsolutePath: '/my-test' });
  genRequest.writeFile();
  let args = vi.mocked(fs.writeFileSync).mock.calls[0];
  expect((global as any).writePrettierFileArgs.prettierOptions).toBeUndefined();
  expect((args[0] as string).replace(/\\/gi, '/')).toBe('/my-test/request.ts');
  expect((global as any).writePrettierFileArgs.successTip).toBe(
    'Generate schema-api/request.ts file success',
  );
  await expect(args[1]).toMatchFileSnapshot('./__test__snapshots__/request.ts');

  vi.clearAllMocks();
  genRequest = new GenRequest({
    genTsAbsolutePath: '/my-test',
    prettierOptions: { singleQuote: true },
  });
  genRequest.writeFile();
  expect((global as any).writePrettierFileArgs.prettierOptions).toEqual({
    singleQuote: true,
  });
});
