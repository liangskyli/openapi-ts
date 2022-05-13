import type { Definition } from 'typescript-json-schema';
import genTsData from './gen/index';

type IAPIRequest = (param: {
  url?: string;
  method?: 'get' | 'GET' | 'post' | 'POST';
  params?: any;
  data?: any;
  [k: string]: any;
}) => Promise<any>;
type PartialAll<T> = {
  [P in keyof T]?: PartialAll<T[P]>;
};

export type { IGenTsDataOpts } from './gen/index';
export default genTsData;
export type { IAPIRequest, PartialAll, Definition };
