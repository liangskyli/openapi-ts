import { winPath } from '@liangskyli/utils';
import { execa } from 'execa';
import { URL } from 'node:url';
import { describe, expect, test } from 'vitest';

const cwd = new URL('../../', import.meta.url);
const cmd = 'node';
describe('CLI', () => {
  test('CLI test', async () => {
    const { stdout } = await execa(
      cmd,
      ['./bin/index.js', '-c', './test/cli/request.config.ts'],
      {
        cwd,
      },
    );
    await expect(winPath(stdout)).toMatchSnapshot();
  });
});
