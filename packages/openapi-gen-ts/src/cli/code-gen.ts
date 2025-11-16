import {
  colors,
  fs,
  getAbsolutePath,
  lodash,
  tsImport,
} from '@liangskyli/utils';
import { program } from 'commander';
import type { IGenTsDataOpts, IGenTsDataOptsCLI } from '../gen';
import genTsData from '../gen';

const commandCodeGenCli = async (version: string) => {
  program
    .version(version)
    .option('-c, --configFile [configFile]', 'config file')
    .parse(process.argv);

  let { configFile } = program.opts();

  if (!configFile) {
    configFile = './request.config.ts';
  }
  const configFilePath = getAbsolutePath(configFile);
  if (fs.existsSync(configFilePath)) {
    console.info(colors.green(`use configFile path: ${configFile}`));
  } else {
    console.error(colors.red(`-c, --configFile path not exits: ${configFile}`));
    process.exit(1);
  }

  let opts: IGenTsDataOptsCLI = (
    await tsImport(configFilePath, import.meta.url)
  ).default;

  const runningScript = async () => {
    try {
      if (!lodash.isArray(opts)) {
        opts = [opts] as IGenTsDataOpts[];
      }
      for (let i = 0; i < opts.length; i++) {
        const singleOpts = opts[i];
        await genTsData(singleOpts);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  runningScript();
};

export { commandCodeGenCli };
