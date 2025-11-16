import type { IPrettierOptions } from '@liangskyli/utils';
import { GenPackageJson, getAbsolutePath } from '@liangskyli/utils';
import type { OpenAPI3, OpenAPITSOptions } from 'openapi-typescript';
import type { OpenapiDefinition } from '../utils';
import type { IGenSchemaOpts } from './file/gen-schema';
import { GenSchema } from './file/gen-schema';
import { GenTsSchema } from './file/gen-ts-schema';
import { genInterfaceRequestFile } from './gen-interface-request-file';

export type IGeneratorFile = {
  genTsPath: string;
  schema: string | URL | OpenAPI3;
} & {
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
  openAPITSOptions?: OpenAPITSOptions;
  typescriptJsonSchemaOptions?: IGenSchemaOpts['typescriptJsonSchemaOptions'];
};

const generatorFile = async (opts: IGeneratorFile) => {
  const {
    prettierOptions,
    requestFile,
    requestQueryOmit,
    requestBodyOmit,
    openAPITSOptions = {},
    typescriptJsonSchemaOptions,
    genTsPath,
    schema,
  } = opts;
  const genTsAbsolutePath = getAbsolutePath(genTsPath);

  // openapi生成TS类型文件
  const genTsSchema = new GenTsSchema(schema, {
    genTsAbsolutePath,
    openAPITSOptions,
    prettierOptions,
  });
  await genTsSchema.generator();
  const tsSchemaPath = await genTsSchema.writeFile();

  // 生成schema file
  const genSchema = new GenSchema({
    tsSchemaPath,
    genTsAbsolutePath,
    prettierOptions,
    typescriptJsonSchemaOptions,
  });
  await genSchema.writeFile();
  const schemaDefinition = genSchema.schemaDefinition;

  // 生成接口（请求，类型）文件
  await genInterfaceRequestFile({
    genTsAbsolutePath,
    prettierOptions,
    requestFile,
    requestQueryOmit,
    requestBodyOmit,
    schemaData: schemaDefinition as unknown as OpenapiDefinition,
  });

  // 生成package.json
  await new GenPackageJson({
    genFilePath: genTsPath,
    prettierOptions,
  }).generator();

  return Promise.resolve({
    schemaDefinition,
    genTsAbsolutePath,
  });
};

export { generatorFile };
