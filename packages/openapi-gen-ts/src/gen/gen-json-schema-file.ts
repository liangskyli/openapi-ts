import * as TJS from 'typescript-json-schema';
import fs from 'fs-extra';
import path from 'path';
import type prettier from 'prettier';
import { prettierData } from '@liangskyli/utils';

type IOpts = {
  schemaTsPath: string;
  genSchemaAPIAbsolutePath: string;
  compilerOptions?: TJS.CompilerOptions;
  prettierOptions?: prettier.Options;
};

const genSchemaDataFile = async (opts: IOpts) => {
  const {
    schemaTsPath,
    genSchemaAPIAbsolutePath,
    compilerOptions = { strictNullChecks: true },
  } = opts;
  let { prettierOptions } = opts;
  const program = TJS.getProgramFromFiles([schemaTsPath], compilerOptions);
  const schema = TJS.generateSchema(program, 'paths', { required: true });
  if (prettierOptions === undefined) {
    prettierOptions = { parser: 'json' };
  }
  prettierOptions = Object.assign(prettierOptions, { parser: 'json' });

  const schemaPath = path.join(genSchemaAPIAbsolutePath, 'schema.json');
  const schemaString = JSON.stringify(schema, null, 2);
  fs.writeFileSync(schemaPath, await prettierData(schemaString, prettierOptions));
  console.info('Generate schema-api/schema.json success');
};

export { genSchemaDataFile };
