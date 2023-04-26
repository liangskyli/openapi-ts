#!/usr/bin/env node
const { commandCodeGenCli } = require('../lib/index.cjs');
const { version } = require('../package.json');

commandCodeGenCli(version);
