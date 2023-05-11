/**
 * This file was auto-generated by @liangskyli/openapi-gen-ts.
 * Do not make direct changes to the file.
 */

import request from 'path';
import type { IApi } from './interface-api';

type IConfig<
  T extends Record<any, any> | unknown,
  U extends Record<any, any>,
> = T & U;
type Equal<T, U> = (<P>(x: P) => P extends T ? 1 : 2) extends <P>(
  x: P,
) => P extends U ? 1 : 2
  ? true
  : false;

export const requestApi = {
  '/root/v4/getNoQueryParams-v4': <T extends Record<any, any> | never = never>(
    config: IConfig<
      Equal<T, never> extends true ? unknown : T,
      Record<any, any>
    >,
  ): Promise<IApi['/root/v4/getNoQueryParams-v4']['Response']> => {
    const { ...otherConfig } = config;

    return request({
      method: 'get',
      url: '/root/v4/getNoQueryParams-v4',

      ...otherConfig,
    });
  },
};
