/**
 * This file was auto-generated by @liangskyli/openapi-gen-ts.
 * Do not make direct changes to the file.
 */

import type { IApi } from './interface-api';
import request from './request';

type IConfig<T extends Record<any, any>, U extends Record<any, any>> = T & U;

export const requestApi = {
  url1: <T extends Record<any, any> = Record<string, never>>(
    config: IConfig<Omit<T, 'params'>, { params: IApi['url1']['Query'] }>,
  ): Promise<IApi['url1']['Response']> => {
    const { params, ...otherConfig } = config;

    return request({
      method: 'get',
      url: 'url1',
      params: params,

      ...otherConfig,
    });
  },
};
