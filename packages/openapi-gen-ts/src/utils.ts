import { colors, copyOptions, prettierData } from '@liangskyli/utils';
import fs from 'fs-extra';
import type { PathItemObject } from 'openapi-typescript';
import type { Definition } from 'typescript-json-schema';
import type { IGenTsDataOpts } from './gen';

export const packageName = '@liangskyli/openapi-gen-ts';

export const fileTip = `/**
 * This file was auto-generated by ${packageName}.
 * Do not make direct changes to the file.
 */

`;

export type IOpenapiMethod = keyof Omit<
  PathItemObject,
  'servers' | 'parameters' | `x-${string}`
>;
export const methodList: IOpenapiMethod[] = [
  'get',
  'put',
  'post',
  'delete',
  'options',
  'head',
  'patch',
  'trace',
];
export type OpenapiDefinition = Omit<Definition, 'properties'> & {
  properties?: { [key: string]: OpenapiDefinition };
};

type IWriteFileOpts = {
  prettierOptions: IGenTsDataOpts['prettierOptions'];
  absolutePath: string;
  data: string;
  successTip: string;
};
export const writePrettierFile = async (opts: IWriteFileOpts) => {
  const { absolutePath, prettierOptions, data, successTip } = opts;

  fs.writeFileSync(
    absolutePath,
    await prettierData(data, copyOptions(prettierOptions)),
  );

  console.info(colors.green(successTip));
};
