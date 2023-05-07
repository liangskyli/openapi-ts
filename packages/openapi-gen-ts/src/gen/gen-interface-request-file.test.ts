import { winPath } from '@liangskyli/utils';
import fs from 'fs-extra';
import path from 'path';
import { expect, test, vi } from 'vitest';
import { genInterfaceRequestFile } from './gen-interface-request-file';

test('gen-interface-request-file.ts method err,no methodObjRequired', async () => {
  const schemaData: any = fs.readJSONSync(
    path.join(__dirname, './__test__snapshots__/example/schema.json'),
  );

  genInterfaceRequestFile({
    genTsAbsolutePath: '/',
    requestFile: {
      path: 'path',
    },
    schemaData,
  });
  let args = vi.mocked(fs.writeFileSync).mock.calls[0];
  expect(winPath(args[0] as string)).toBe('/interface-api.ts');
  await expect(args[1]).toMatchFileSnapshot(
    './__test__snapshots__/interface-api.ts',
  );
  args = vi.mocked(fs.writeFileSync).mock.calls[1];
  expect(winPath(args[0] as string)).toBe('/request-api.ts');
  await expect(args[1]).toMatchFileSnapshot(
    './__test__snapshots__/request-api.ts',
  );
});
