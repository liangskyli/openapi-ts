/**
 * This file was auto-generated by @liangskyli/openapi-gen-ts.
 * Do not make direct changes to the file.
 */

import type { IApi } from './interface-api';
import type { AxiosRequestConfig } from './request';
import request from './request';

type IConfig<
  T extends Record<any, any> | unknown,
  U extends Record<any, any>,
> = T & U;
type Equal<T, U> =
  (<P>(x: P) => P extends T ? 1 : 2) extends <P>(x: P) => P extends U ? 1 : 2
    ? true
    : false;

export const requestApi = {
  '/root/v4/postBody1-v4': {
    post: <T extends Record<any, any> | never = never>(
      config: IConfig<
        Omit<
          Equal<T, never> extends true
            ? AxiosRequestConfig
            : T & AxiosRequestConfig,
          'method' | 'url' | 'params' | 'data'
        >,
        {
          params: IApi['/root/v4/postBody1-v4']['post']['Query'];
          data: IApi['/root/v4/postBody1-v4']['post']['Body'];
        }
      >,
    ): Promise<IApi['/root/v4/postBody1-v4']['post']['Response']> => {
      const { params, data, ...otherConfig } = config;
      const finalURL = '/root/v4/postBody1-v4';

      return request({
        method: 'post',
        url: finalURL,
        params: params,
        data: data,
        ...otherConfig,
      });
    },
  },
};
