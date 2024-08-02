import type { IPrettierOptions } from '@liangskyli/utils';
import path from 'node:path';
import openapiTS, { astToString } from 'openapi-typescript';
import type * as TJS from 'typescript-json-schema';
import { fileTip, writePrettierFile } from '../../utils';
import type { IGenTsDataOpts } from '../index';

export type IGenTsSchemaOpts = {
  genTsAbsolutePath: string;
  prettierOptions?: IPrettierOptions;
  openAPITSOptions: IGenTsDataOpts['openAPITSOptions'];
};

export class GenTsSchema {
  private readonly opts: IGenTsSchemaOpts;
  private readonly schema: Parameters<typeof openapiTS>[0];
  public schemaDefinition: TJS.Definition | null;
  public schemaString: string = '';

  constructor(schema: Parameters<typeof openapiTS>[0], opts: IGenTsSchemaOpts) {
    this.schemaDefinition = null;
    this.schema = schema;
    this.opts = opts;
  }

  public async generator() {
    const { openAPITSOptions } = this.opts;
    // openapi生成TS类型文件
    const result = await openapiTS(this.schema, openAPITSOptions);
    this.schemaString = `${fileTip}${astToString(result)}`;
  }

  public async writeFile() {
    const { genTsAbsolutePath, prettierOptions } = this.opts;
    const tsSchemaPath = path.join(genTsAbsolutePath, 'ts-schema.ts');

    await writePrettierFile({
      prettierOptions,
      absolutePath: tsSchemaPath,
      data: this.schemaString,
      successTip: 'Generate schema-api/ts-schema.ts success',
    });

    return tsSchemaPath;
  }
}
