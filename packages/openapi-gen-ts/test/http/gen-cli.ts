import * as spawn from 'cross-spawn';

const result = spawn.sync(
  'node',
  'bin/index.js -c ./test/http/config.cli.ts'.split(' '),
  {
    stdio: 'inherit',
  },
);

process.exit(result.status ?? undefined);
