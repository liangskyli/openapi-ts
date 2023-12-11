import type { IPrettierOptions } from '@liangskyli/utils';
import { copyOptions } from '@liangskyli/utils';
import path from 'node:path';
import type { PartialArgs } from 'typescript-json-schema';
import * as TJS from 'typescript-json-schema';
import { writePrettierFile } from '../../utils';

export type IGenSchemaOpts = {
  tsSchemaPath: string;
  genTsAbsolutePath: string;
  prettierOptions?: IPrettierOptions;
  typescriptJsonSchemaOptions?: PartialArgs;
};

export class GenSchema {
  private readonly opts: IGenSchemaOpts;
  public schemaDefinition: TJS.Definition;

  constructor(opts: IGenSchemaOpts) {
    this.schemaDefinition = {};
    this.opts = opts;
    this.generator();
  }

  private generator() {
    const { tsSchemaPath, typescriptJsonSchemaOptions = {} } = this.opts;
    const program = TJS.getProgramFromFiles([tsSchemaPath]);
    const schemaDefinition = TJS.generateSchema(program, 'paths', {
      required: true,
      ignoreErrors: true,
      ...typescriptJsonSchemaOptions,
    });

    if (schemaDefinition === null) {
      throw new Error('Generate schema-api/schema.json fail');
    }
    this.schemaDefinition = schemaDefinition;
  }

  private toString() {
    return JSON.stringify(this.schemaDefinition, null, 2);
  }

  private getPrettierOptions() {
    const { prettierOptions: defaultPrettierOptions } = this.opts;
    let prettierOptions = copyOptions(defaultPrettierOptions);
    if (prettierOptions === undefined) {
      prettierOptions = { parser: 'json' };
    }
    prettierOptions = Object.assign(prettierOptions, { parser: 'json' });
    return prettierOptions;
  }

  public async writeFile() {
    const { genTsAbsolutePath } = this.opts;
    const schemaPath = path.join(genTsAbsolutePath, 'schema.json');

    await writePrettierFile({
      prettierOptions: this.getPrettierOptions(),
      absolutePath: schemaPath,
      data: this.toString(),
      successTip: 'Generate schema-api/schema.json success',
    });
  }
}
