#!/usr/bin/env node
const path = require('path');
const spawn = require('cross-spawn');

const args = process.argv.slice(2);

const result = spawn.sync(
  'node',
  [
    '-r',
    'ts-node/register',
    '--trace-warnings',
    require.resolve(path.join('../cjs/script', 'code-gen')),
  ].concat(args),
  { stdio: 'inherit' },
);
process.exit(result.status);
