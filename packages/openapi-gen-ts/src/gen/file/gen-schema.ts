import type { IPrettierOptions } from '@liangskyli/utils';
import path from 'path';
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
  public schemaDefinition: TJS.Definition | null;

  constructor(opts: IGenSchemaOpts) {
    this.schemaDefinition = null;
    this.opts = opts;
    this.generator();
  }

  private generator() {
    const { tsSchemaPath, typescriptJsonSchemaOptions = {} } = this.opts;
    const program = TJS.getProgramFromFiles([tsSchemaPath]);
    this.schemaDefinition = TJS.generateSchema(program, 'paths', {
      required: true,
      ignoreErrors: true,
      ...typescriptJsonSchemaOptions,
    });
  }

  private toString() {
    return JSON.stringify(this.schemaDefinition, null, 2);
  }

  private getPrettierOptions() {
    let { prettierOptions } = this.opts;
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
