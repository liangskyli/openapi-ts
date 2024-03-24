import type { Definition } from 'typescript-json-schema';
import { commandCodeGenCli } from './cli/code-gen';
import type { IGenTsDataOpts, IGenTsDataOptsCLI } from './gen';
import genTsData from './gen/index';
import type { IOpenapiMethod } from './utils';
import { methodList } from './utils';

type IAPIRequest = (param: {
  url?: string;
  method?: (IOpenapiMethod | Uppercase<IOpenapiMethod>) & string;
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

export { commandCodeGenCli, defineConfig, methodList };
export type {
  Definition,
  IAPIRequest,
  IGenTsDataOpts,
  IGenTsDataOptsCLI,
  IOpenapiMethod,
  PartialAll,
};
export default genTsData;
