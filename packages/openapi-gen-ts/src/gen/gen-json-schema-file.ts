import type { IPrettierOptions } from '@liangskyli/utils';
import { colors, prettierData } from '@liangskyli/utils';
import fs from 'fs-extra';
import path from 'path';
import * as TJS from 'typescript-json-schema';

type IOpts = {
  tsSchemaPath: string;
  genSchemaAPIAbsolutePath: string;
  compilerOptions?: TJS.CompilerOptions;
  prettierOptions?: IPrettierOptions;
};

const genSchemaDataFile = async (opts: IOpts) => {
  const {
    tsSchemaPath,
    genSchemaAPIAbsolutePath,
    compilerOptions = { strictNullChecks: true },
  } = opts;
  let { prettierOptions } = opts;
  const program = TJS.getProgramFromFiles([tsSchemaPath], compilerOptions);
  const schemaDefinition = TJS.generateSchema(program, 'paths', {
    required: true,
    ignoreErrors: true,
  });
  if (prettierOptions === undefined) {
    prettierOptions = { parser: 'json' };
  }
  prettierOptions = Object.assign(prettierOptions, { parser: 'json' });

  const schemaPath = path.join(genSchemaAPIAbsolutePath, 'schema.json');
  const schemaString = JSON.stringify(schemaDefinition, null, 2);
  fs.writeFileSync(
    schemaPath,
    await prettierData(schemaString, prettierOptions),
  );
  console.info(colors.green('Generate schema-api/schema.json success'));
  return Promise.resolve(schemaDefinition);
};

export { genSchemaDataFile };
