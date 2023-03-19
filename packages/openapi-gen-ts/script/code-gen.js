const { program } = require('commander');
const fs = require('fs-extra');
const { colors, getAbsolutePath, getConfig } = require('@liangskyli/utils');
const genTsData = require('../lib/index.cjs');

const packageJson = require('../package.json');

program
  .version(packageJson.version)
  .option('-c, --configFile [configFile]', 'config file')
  .parse(process.argv);

const { configFile } = program.opts();

if (!configFile) {
  console.error(colors.red('-c, --configFile [configFile] field need'));
  process.exit(1);
}
const configFilePath = getAbsolutePath(configFile);
if (!fs.existsSync(configFilePath)) {
  console.error(colors.red(`-c, --configFile path not exits: ${configFile}`));
  process.exit(1);
}

const data = getConfig(configFilePath);
if (!data.openapiPath) {
  console.error(
    colors.red(`config file need openapiPath field: ${configFile}`),
  );
}

const runningScript = () => {
  try {
    genTsData(data).then();
  } catch (err) {
    console.error(err);
  }
};

runningScript();
