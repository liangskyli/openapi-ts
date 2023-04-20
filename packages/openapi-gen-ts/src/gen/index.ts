import type { IPrettierOptions } from '@liangskyli/utils';
import {
  colors,
  copyOptions,
  getAbsolutePath,
  prettierData,
  removeFilesSync,
} from '@liangskyli/utils';
import fs from 'fs-extra';
import path from 'path';
import openapiTS from '../esm-to-commjs/openapi-typescript';
import { fileTip } from '../utils';
import { genInterfaceFile } from './gen-interface-file';
import { genSchemaDataFile } from './gen-json-schema-file';

export type IGenTsDataOpts = {
  openapiPath: string;
  genTsDir?: string;
  prettierOptions?: IPrettierOptions;
  /**
   * 自定义请求库文件配置
   */
  requestFile?: {
    /**
     * 请求库文件路径，例如 "../../utils/request"
     * 需要注意的是此文件必须是使用 export default 默认导出
     */
    path: string;
    /**
     * 请求库文件里导出的请求库方法入参类型定义名称（非默认导出）
     */
    requestParamsType?: string;
  };
  requestQueryOmit?: string[];
  requestBodyOmit?: string[];
};

export type IGenTsDataOptsCLI = IGenTsDataOpts | IGenTsDataOpts[];

const genTsData = async (opts: IGenTsDataOpts) => {
  const {
    genTsDir = './',
    openapiPath,
    prettierOptions,
    requestFile,
    requestQueryOmit,
    requestBodyOmit,
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
  const schemaString = await openapiTS(openapiAbsolutePath, {
    commentHeader: `${fileTip}`,
    postTransform: (type: string) => {
      return type.replace(/\\\\"/gi, '\\"');
    },
  });
  const tsSchemaPath = path.join(genTsAbsolutePath, 'ts-schema.ts');
  fs.writeFileSync(
    tsSchemaPath,
    await prettierData(schemaString, copyOptions(prettierOptions)),
  );
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
    requestFile,
    requestQueryOmit,
    requestBodyOmit,
  });

  return Promise.resolve({ schemaDefinition, genTsAbsolutePath });
};

export default genTsData;
