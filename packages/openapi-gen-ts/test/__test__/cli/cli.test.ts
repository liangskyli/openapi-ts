import { execa } from 'execa';
import { URL } from 'node:url';
import { describe, expect, test } from 'vitest';

const cwd = new URL('../../../', import.meta.url);
const cmd = 'node ./bin/index.js';
describe('CLI', () => {
  test('CLI test', async () => {
    const { stdout } = await execa(
      cmd,
      ['-c', './test/cli/request.config.ts'],
      {
        cwd,
      },
    );
    await expect(stdout).toMatchSnapshot();
  });
});
