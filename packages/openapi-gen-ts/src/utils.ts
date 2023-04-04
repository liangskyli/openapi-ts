import type { PathItemObject } from 'openapi-typescript';
import type { Definition } from 'typescript-json-schema';

export const packageName = '@liangskyli/openapi-gen-ts';

export const fileTip = `/**
 * This file was auto-generated by ${packageName}.
 * Do not make direct changes to the file.
 */

`;

export type OpenapiMethod = keyof Omit<
  PathItemObject,
  'servers' | 'parameters'
>;
export const methodList: OpenapiMethod[] = [
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
