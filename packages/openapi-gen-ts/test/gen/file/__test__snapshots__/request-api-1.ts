/**
 * This file was auto-generated by @liangskyli/openapi-gen-ts.
 * Do not make direct changes to the file.
 */

import type { IApi } from './interface-api';
import type { requestParamsType } from './request';
import request from './request';

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
      Omit<Equal<T, never> extends true ? unknown : T, 'params'>,
      { params: IApi['url1']['Query'] }
    >,
  ): Promise<IApi['url1']['Response']> => {
    const { params, ...otherConfig } = config;

    return request({
      method: 'get',
      url: 'url1',
      params: params,

      ...otherConfig,
    });
  },
  url2: <T extends Record<any, any> | never = never>(
    config: IConfig<
      Omit<
        Equal<T, never> extends true
          ? requestParamsType
          : T & requestParamsType,
        'method' | 'url' | 'data'
      >,
      { data?: IApi['url2']['Body'] }
    >,
  ): Promise<IApi['url2']['Response']> => {
    const { data, ...otherConfig } = config;

    return request({
      method: 'post',
      url: 'url2',

      data: data,
      ...otherConfig,
    });
  },
  url3: <T extends Record<any, any> | never = never>(
    config: IConfig<
      Omit<Equal<T, never> extends true ? unknown : T, 'params' | 'data'>,
      { params: IApi['url3']['Query']; data: IApi['url3']['Body'] }
    >,
  ): Promise<IApi['url3']['Response']> => {
    const { params, data, ...otherConfig } = config;

    return request({
      method: 'post',
      url: 'url3',
      params: params,
      data: data,
      ...otherConfig,
    });
  },
  url4: <T extends Record<any, any> | never = never>(
    config: IConfig<
      Omit<
        Equal<T, never> extends true
          ? requestParamsType
          : T & requestParamsType,
        'method' | 'url' | 'params' | 'data'
      >,
      { params: IApi['url4']['Query']; data: IApi['url4']['Body'] }
    >,
  ): Promise<IApi['url4']['Response']> => {
    const { params, data, ...otherConfig } = config;

    return request({
      method: 'post',
      url: 'url4',
      params: params,
      data: data,
      ...otherConfig,
    });
  },
  url5: <T extends Record<any, any> | never = never>(
    config: IConfig<
      Equal<T, never> extends true ? unknown : T,
      Record<any, any>
    >,
  ): Promise<IApi['url5']['Response']> => {
    const { ...otherConfig } = config;

    return request({
      method: 'put',
      url: 'url5',

      ...otherConfig,
    });
  },
  url6: <T extends Record<any, any> | never = never>(
    config: IConfig<
      Omit<
        Equal<T, never> extends true
          ? requestParamsType
          : T & requestParamsType,
        'method' | 'url'
      >,
      Record<any, any>
    >,
  ): Promise<IApi['url6']['Response']> => {
    const { ...otherConfig } = config;

    return request({
      method: 'put',
      url: 'url6',

      ...otherConfig,
    });
  },
};
