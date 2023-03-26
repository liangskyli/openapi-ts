import type { Definition } from 'typescript-json-schema';
import genTsData from './gen/index';
import type { OpenapiMethod } from './utils';

type IAPIRequest = (param: {
  url?: string;
  method?: OpenapiMethod | Uppercase<OpenapiMethod> | string;
  params?: any;
  data?: any;
  [k: string]: any;
}) => Promise<any>;
type PartialAll<T> = {
  [P in keyof T]?: PartialAll<T[P]>;
};

export type { IGenTsDataOpts } from './gen/index';
export type { IAPIRequest, PartialAll, Definition };
export default genTsData;
