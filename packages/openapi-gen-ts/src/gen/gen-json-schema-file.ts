import type { IPrettierOptions } from '@liangskyli/utils';
import { colors, prettierData } from '@liangskyli/utils';
import fs from 'fs-extra';
import path from 'path';
import type { PartialArgs } from 'typescript-json-schema';
import * as TJS from 'typescript-json-schema';

export type IGenSchemaDataFile = {
  tsSchemaPath: string;
  genSchemaAPIAbsolutePath: string;
  prettierOptions?: IPrettierOptions;
  typescriptJsonSchemaOptions?: PartialArgs;
};

const genSchemaDataFile = async (opts: IGenSchemaDataFile) => {
  const {
    tsSchemaPath,
    genSchemaAPIAbsolutePath,
    typescriptJsonSchemaOptions = {},
  } = opts;
  let { prettierOptions } = opts;
  const program = TJS.getProgramFromFiles([tsSchemaPath]);
  const schemaDefinition = TJS.generateSchema(program, 'paths', {
    required: true,
    ignoreErrors: true,
    ...typescriptJsonSchemaOptions,
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
