const { commandCodeGenCli } = require('../lib/index.cjs');
const { version } = require('../package.json');

commandCodeGenCli(version);
