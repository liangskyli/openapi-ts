/**
 * This file was auto-generated by @liangskyli/openapi-gen-ts.
 * Do not make direct changes to the file.
 */

import type { paths } from './ts-schema';

export interface IApi {
  post: {
    '/root/v4/postBody1-v4': {
      Query: paths['/root/v4/postBody1-v4']['post']['parameters']['query'];
      Body: paths['/root/v4/postBody1-v4']['post']['requestBody']['content']['application/json'];
      Response: paths['/root/v4/postBody1-v4']['post']['responses']['default']['content']['text/plain'];
    };
  };
}
