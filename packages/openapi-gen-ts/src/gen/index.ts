import { colors, getAbsolutePath, removeFilesSync } from '@liangskyli/utils';
import fs from 'fs-extra';
import path from 'path';
import type { IGeneratorFile } from './generator-file';
import { generatorFile } from './generator-file';
import { swagger2ToOpenapi } from './swagger2-to-openapi';

type IGenBaseOpts = {
  genTsDir?: string;
} & Omit<IGeneratorFile, 'genTsAbsolutePath' | 'schema'>;

export type IGenTsDataOpts = (
  | {
      isSwagger2?: false;
      openapiPath: IGeneratorFile['schema'];
    }
  | {
      isSwagger2: true;
      swaggerPath: string | URL;
    }
) &
  IGenBaseOpts;

export type IGenTsDataOptsCLI = IGenTsDataOpts | IGenTsDataOpts[];

const genTsData = async (opts: IGenTsDataOpts) => {
  const { isSwagger2, genTsDir = './', ...otherGenTsDataOpts } = opts;
  let schema = opts.isSwagger2 ? opts.swaggerPath : opts.openapiPath;
  const pathKey = opts.isSwagger2 ? 'swaggerPath' : 'openapiPath';
  const pathValue = opts.isSwagger2 ? opts.swaggerPath : opts.openapiPath;

  const genTsPath = path.join(genTsDir, 'schema-api');
  const genTsAbsolutePath = getAbsolutePath(genTsPath);
  if (!fs.existsSync(getAbsolutePath(genTsDir))) {
    console.error(colors.red(`genTsDir not exits: ${genTsDir}`));
    throw new Error('genTsDir not exits!');
  }
  if (typeof pathValue === 'string') {
    schema = getAbsolutePath(pathValue);
    if (!fs.existsSync(schema)) {
      console.error(colors.red(`${pathKey} not exits: ${pathValue}`));
      throw new Error(`${pathKey} not exits!`);
    }
  }

  removeFilesSync(genTsAbsolutePath);
  console.info(colors.green(`Clean schema-api dir: ${genTsPath}`));

  fs.ensureDirSync(genTsAbsolutePath);

  if (isSwagger2) {
    // swagger2 to openapi3
    schema = await swagger2ToOpenapi(schema as string | URL);
  }

  return await generatorFile({
    ...otherGenTsDataOpts,
    schema,
    genTsAbsolutePath,
  });
};

export default genTsData;
