import type { Definition } from 'typescript-json-schema';
import { commandCodeGenCli } from './cli/code-gen';
import genTsData from './gen/index';
import type { OpenapiMethod } from './utils';

type IAPIRequest = (param: {
  url?: string;
  method?: OpenapiMethod | Uppercase<OpenapiMethod> | string;
  params?: any;
  path?: any;
  data?: any;
  [k: string]: any;
}) => Promise<any>;
type PartialAll<T> = {
  [P in keyof T]?: PartialAll<T[P]>;
};

export type { IGenTsDataOpts, IGenTsDataOptsCLI } from './gen/index';
export type { IAPIRequest, PartialAll, Definition };
export { commandCodeGenCli };
export default genTsData;
