import {
  colors,
  fs,
  getAbsolutePath,
  removeFilesSync,
} from '@liangskyli/utils';
import path from 'node:path';
import type { IGeneratorFile } from './generator-file';
import { generatorFile } from './generator-file';

type IGenBaseOpts = {
  genTsDir?: string;
} & Omit<IGeneratorFile, 'genTsAbsolutePath' | 'schema'>;

export type IGenTsDataOpts = {
  /** string type only support JSON / YAML format, file path not support string type */
  openapiPath: IGeneratorFile['schema'];
} & IGenBaseOpts;

export type IGenTsDataOptsCLI = IGenTsDataOpts | IGenTsDataOpts[];

const genTsData = async (opts: IGenTsDataOpts) => {
  const { genTsDir = './', ...otherGenTsDataOpts } = opts;
  const schema = opts.openapiPath;

  const genTsPath = path.join(genTsDir, 'schema-api');
  const genTsAbsolutePath = getAbsolutePath(genTsPath);
  if (!fs.existsSync(getAbsolutePath(genTsDir))) {
    console.error(colors.red(`genTsDir not exits: ${genTsDir}`));
    throw new Error('genTsDir not exits!');
  }

  if (!schema) {
    console.error(colors.red('openapiPath not exits'));
    throw new Error('openapiPath not exits!');
  }

  removeFilesSync(genTsAbsolutePath);
  console.info(colors.green(`Clean schema-api dir: ${genTsPath}`));

  fs.ensureDirSync(genTsAbsolutePath);

  return await generatorFile({
    ...otherGenTsDataOpts,
    schema,
    genTsPath,
  });
};

export default genTsData;
