import { beforeEach, vi } from 'vitest';

const mockWriteFileSync = vi.fn();
const mockEnsureDirSync = vi.fn();

vi.mock('@liangskyli/utils', async (importOriginal) => {
  const mod = await importOriginal<any>();
  return {
    ...mod,
    fs: {
      ...mod.fs,
      writeFileSync: mockWriteFileSync,
      ensureDirSync: mockEnsureDirSync,
    },
    writePrettierFile: vi.fn(async (opts: any) => {
      vi.stubGlobal('writePrettierFileArgs', opts);
      // Format the data using the real prettierData function, then call mocked writeFileSync
      const formattedData = await mod.prettierData(
        opts.data,
        mod.copyOptions(opts.prettierOptions),
      );
      mockWriteFileSync(opts.absolutePath, formattedData);
    }),
  };
});

beforeEach(() => {
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});
