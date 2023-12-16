/**
 * This file was auto-generated by @liangskyli/openapi-gen-ts.
 * Do not make direct changes to the file.
 */

import type { paths } from './ts-schema';

export interface IApi {
  url1: {
    get: { Query: paths['url1']['get']['parameters']['query']; Response: any };
  };
  url2: {
    post: {
      Body?: NonNullable<
        paths['url2']['post']['requestBody']
      >['content']['application/json'];
      Response: paths['url2']['post']['responses']['200']['content']['application/json'];
    };
  };
  url3: {
    post: {
      Query: Omit<
        paths['url3']['post']['parameters']['query'],
        'requestQueryOmit'
      >;
      Path: paths['url3']['post']['parameters']['path'];
      Body: Omit<
        paths['url3']['post']['requestBody']['content']['application/json'],
        'requestBodyOmit'
      >;
      Response: paths['url3']['post']['responses']['200']['content']['application/json'];
    };
  };
}
