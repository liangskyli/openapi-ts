import { beforeEach, vi } from 'vitest';

vi.mock('fs-extra', async (importOriginal) => {
  const mod = await importOriginal<any>();
  return {
    ...mod,
    default: {
      ...mod.default,
      writeFileSync: vi.fn(),
    },
  };
});

vi.mock('./src/utils.ts', async (importOriginal) => {
  const mod = await importOriginal<any>();
  return {
    ...mod,
    writePrettierFile: async (opts: any) => {
      vi.stubGlobal('writePrettierFileArgs', opts);
      await mod.writePrettierFile(opts);
    },
  };
});

beforeEach(() => {
  vi.unstubAllGlobals();
  vi.clearAllMocks();
});
