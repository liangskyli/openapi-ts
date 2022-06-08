import {
  colors,
  copyOptions,
  getAbsolutePath,
  prettierData,
  removeFilesSync,
} from '@liangskyli/utils';
import fs from 'fs-extra';
import path from 'path';
import type prettier from 'prettier';
import openapiTS from '../esm-to-commjs/openapi-typescript';
import { fileTip } from '../utils';
import { genInterfaceFile } from './gen-interface-file';
import { genSchemaDataFile } from './gen-json-schema-file';

export type IGenTsDataOpts = {
  openapiPath: string;
  genTsDir?: string;
  prettierOptions?: prettier.Options;
  /**
   * 请求库文件路径，例如 "../../utils/request"
   * 需要注意的是此文件必须是使用 export default 默认导出
   */
  requestFilePath?: string;
  requestQueryOmit?: string[];
  requestBodyOmit?: string[];
};

const genTsData = async (opts: IGenTsDataOpts) => {
  const {
    genTsDir = './',
    openapiPath,
    prettierOptions,
    requestFilePath,
    requestQueryOmit = [],
    requestBodyOmit = [],
  } = opts;

  const genTsPath = path.join(genTsDir, 'schema-api');
  const genTsAbsolutePath = getAbsolutePath(genTsPath);
  const openapiAbsolutePath = getAbsolutePath(openapiPath);
  if (!fs.existsSync(getAbsolutePath(genTsDir))) {
    console.error(colors.red(`genTsDir not exits: ${genTsDir}`));
    process.exit(1);
  }
  if (!fs.existsSync(openapiAbsolutePath)) {
    console.error(colors.red(`openapiPath not exits: ${openapiPath}`));
    process.exit(1);
  }

  removeFilesSync(genTsAbsolutePath);
  console.info(colors.green(`Clean schema-api dir: ${genTsPath}`));

  fs.ensureDirSync(genTsAbsolutePath);

  // openapi生成TS类型文件
  const schemaString = await openapiTS(openapiAbsolutePath, { commentHeader: `${fileTip}\n` });
  const tsSchemaPath = path.join(genTsAbsolutePath, 'ts-schema.ts');
  fs.writeFileSync(tsSchemaPath, await prettierData(schemaString, copyOptions(prettierOptions)));
  console.info(colors.green('Generate schema-api/ts-schema.ts success'));
  // 生成schema file
  const schemaDefinition = await genSchemaDataFile({
    tsSchemaPath,
    genSchemaAPIAbsolutePath: genTsAbsolutePath,
    prettierOptions: copyOptions(prettierOptions),
  });

  // 生成接口文件
  await genInterfaceFile({
    genSchemaAPIAbsolutePath: genTsAbsolutePath,
    prettierOptions: copyOptions(prettierOptions),
    requestFilePath,
    requestQueryOmit,
    requestBodyOmit,
  });

  return Promise.resolve({ schemaDefinition, genTsAbsolutePath });
};

export default genTsData;
