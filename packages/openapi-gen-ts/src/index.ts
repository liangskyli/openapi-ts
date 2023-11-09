import type { Definition } from 'typescript-json-schema';
import { commandCodeGenCli } from './cli/code-gen';
import type { IGenTsDataOpts, IGenTsDataOptsCLI } from './gen';
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

const defineConfig = (config: IGenTsDataOptsCLI) => {
  return config;
};

export { commandCodeGenCli, defineConfig };
export type {
  Definition,
  IAPIRequest,
  IGenTsDataOpts,
  IGenTsDataOptsCLI,
  PartialAll,
};
export default genTsData;
