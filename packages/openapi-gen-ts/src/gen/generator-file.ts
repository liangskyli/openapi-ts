import type { OpenapiDefinition } from '../utils';
import { GenSchema } from './file/gen-schema';
import { GenTsSchema } from './file/gen-ts-schema';
import { genInterfaceRequestFile } from './gen-interface-request-file';
import type { IGenTsDataOpts } from './index';

type IGeneratorFile = Omit<IGenTsDataOpts, 'genTsDir' | 'openapiPath'> & {
  genTsAbsolutePath: string;
  schema: IGenTsDataOpts['openapiPath'];
};

const generatorFile = async (opts: IGeneratorFile) => {
  const {
    prettierOptions,
    requestFile,
    requestQueryOmit,
    requestBodyOmit,
    openAPITSOptions = {},
    typescriptJsonSchemaOptions,
    genTsAbsolutePath,
    schema,
  } = opts;

  // openapi生成TS类型文件
  const genTsSchema = new GenTsSchema(schema, {
    genTsAbsolutePath,
    openAPITSOptions,
    prettierOptions,
  });
  await genTsSchema.generator();
  const tsSchemaPath = genTsSchema.writeFile();

  // 生成schema file
  const genSchema = new GenSchema({
    tsSchemaPath,
    genTsAbsolutePath,
    prettierOptions,
    typescriptJsonSchemaOptions,
  });
  genSchema.writeFile();
  const schemaDefinition = genSchema.schemaDefinition;

  // 生成接口（请求，类型）文件
  genInterfaceRequestFile({
    genTsAbsolutePath,
    prettierOptions,
    requestFile,
    requestQueryOmit,
    requestBodyOmit,
    schemaData: schemaDefinition as unknown as OpenapiDefinition,
  });

  return Promise.resolve({
    schemaDefinition,
    genTsAbsolutePath,
  });
};

export { generatorFile };
