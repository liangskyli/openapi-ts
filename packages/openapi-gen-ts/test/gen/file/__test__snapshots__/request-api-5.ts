/**
 * This file was auto-generated by @liangskyli/openapi-gen-ts.
 * Do not make direct changes to the file.
 */

import type { requestParamsType } from 'path';
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
  url1: <T extends Record<any, any> | never = never>(
    config: IConfig<
      Omit<
        Equal<T, never> extends true
          ? requestParamsType
          : T & requestParamsType,
        'method' | 'url' | 'params' | 'data'
      >,
      {
        params: IApi['url1']['Query'];
        path: IApi['url1']['Path'];
        data?: IApi['url1']['Body'];
      }
    >,
  ): Promise<IApi['url1']['Response']> => {
    const { params, path, data, ...otherConfig } = config;

    let finalURL = 'url1';
    for (const [k, v] of Object.entries(path)) {
      finalURL = finalURL.replace(`{${k}}`, encodeURIComponent(String(v)));
    }

    return request({
      method: 'get',
      url: finalURL,
      params: params,
      data: data,
      ...otherConfig,
    });
  },
};