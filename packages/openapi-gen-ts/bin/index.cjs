#!/usr/bin/env node
if(process.features.require_module) {
    const { commandCodeGenCli } = require('../lib/index.js');
    const { version } = require('../package.json');

    commandCodeGenCli(version);
} else {
    const { commandCodeGenCli } = require('../lib/index.cjs');
    const { version } = require('../package.json');

    commandCodeGenCli(version);
}
