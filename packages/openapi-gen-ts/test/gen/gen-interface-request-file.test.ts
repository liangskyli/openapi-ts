import { getAbsolutePath, winPath } from '@liangskyli/utils';
import fs from 'fs-extra';
import { describe, expect, test, vi } from 'vitest';
import { genInterfaceRequestFile } from '../../src/gen/gen-interface-request-file';

describe('genInterfaceRequestFile', () => {
  test('gen-interface-request-file.ts method err, no methodObjRequired', async () => {
    const schemaData: any = fs.readJSONSync(
      getAbsolutePath('./test/example/schema.json'),
    );

    await genInterfaceRequestFile({
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
  test('gen-interface-request-file.ts method no requestFile, responseCode default', async () => {
    const schemaData: any = fs.readJSONSync(
      getAbsolutePath('./test/example/schema2.json'),
    );

    await genInterfaceRequestFile({
      genTsAbsolutePath: '/',
      schemaData,
    });
    let args = vi.mocked(fs.writeFileSync).mock.calls[0];
    expect(winPath(args[0] as string)).toBe('/request.ts');
    args = vi.mocked(fs.writeFileSync).mock.calls[1];
    expect(winPath(args[0] as string)).toBe('/interface-api.ts');
    await expect(args[1]).toMatchFileSnapshot(
      './__test__snapshots__/interface-api-2.ts',
    );
    args = vi.mocked(fs.writeFileSync).mock.calls[2];
    expect(winPath(args[0] as string)).toBe('/request-api.ts');
    await expect(args[1]).toMatchFileSnapshot(
      './__test__snapshots__/request-api-2.ts',
    );
  });
});
