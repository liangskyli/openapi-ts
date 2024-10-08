/**
 * This file was auto-generated by @liangskyli/openapi-gen-ts.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/root/v4/getQueryParams1-v4': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'text/plain': string;
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v4/getNoQueryParams-v4': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'text/plain': string;
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v4/postBody1-v4': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query: {
          queryParam1: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          'application/json': components['schemas']['proto.LockRequest.4f2e3d7c'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'text/plain': string;
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v4/postBody2-v4': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          'application/json': components['schemas']['proto.LockRequest.4f2e3d7c'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'text/plain': string;
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v4/getQueryParams2-v4/{id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
        header?: never;
        path: {
          id: number;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'text/plain': string;
          };
        };
      };
    };
    patch?: never;
    trace?: never;
  };
  '/root/v4/getQueryParams3-v4': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'text/plain': string;
          };
        };
      };
    };
    trace?: never;
  };
  '/root/v4/file': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          'multipart/form-data': {
            /** Format: binary */
            fileName: string;
          };
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'text/plain': string;
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v4/files': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          'multipart/form-data': {
            fileNames: string[];
          };
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'text/plain': string;
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v4/Put': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'text/plain': string;
          };
        };
      };
    };
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v4/Delete': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'text/plain': string;
          };
        };
      };
    };
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v4': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'text/plain': string;
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v4/postBody3-v4': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          'application/json': components['schemas']['CustomizeExportByFilterRequest.d0da47e7'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'text/plain': string;
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/getQueryParams1-v3': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.bdef45cb'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/getQueryParam-v3/{id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query: {
          queryParam1: number;
          queryParam2: string | number;
          queryParam3?: number[];
          queryParam4: (string | number)[];
          queryParam5: (number | boolean)[];
          queryParam6: unknown;
          queryParam8?: components['schemas']['IParam2.9b453793'];
          queryParam9?: {
            a: string;
            b: string;
            c: unknown;
          };
          queryParam10?: ('1' | '2' | 3) | true;
          queryParam11?: ('1' | '2' | 3) | boolean;
          queryParam12?: ('1' | '2' | 3) | boolean;
          queryParam13?: boolean;
          queryParam14?: boolean;
          queryParam15?: [
            components['schemas']['IParam2.9b453793'],
            number,
            components['schemas']['getQueryParams1Request.5926e127'],
          ][];
          queryParam16?: '1' | '2' | '3';
          queryParam17?: 1 | 2 | 3;
          queryParam18?: [];
          queryParam19?: {
            a: Record<string, never>;
            b: Record<string, never>;
          };
          queryParam20?: Record<string, never>;
          queryParam21?: Record<string, never>;
          queryParam22?: components['schemas']['recordTest.89e6481d'];
          queryParam23?: components['schemas']['Date.8c67fa4a'];
          queryParam24?: null;
          queryParam25?: string;
          queryParam26?: boolean;
          queryParam27?: boolean;
          queryParam28?: [];
        };
        header?: never;
        path: {
          id: number;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: {
                a33: string;
              };
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/postBody1-v3': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          'application/json': {
            body1: components['schemas']['proto.LockRequest.4f2e3d7c'];
            body2: components['schemas']['InterFaceSameAll.928ca2e1'];
            body3: components['schemas']['InterfaceAndNamespaceSameAll.19767a93'];
          };
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: string;
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/postBody2-v3': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          'application/json': components['schemas']['CustomizeExportByFilterRequest.52d99618'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: string;
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v2/getQueryParams1-v2': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.428f9f7c'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v2/getQueryParam-v2/{id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query: {
          queryParam1: number;
          queryParam2: string | number;
          queryParam3: number[];
          queryParam4: (string | number)[];
          queryParam5: (string | number)[];
          queryParam6: unknown;
          queryParam8: components['schemas']['IParam2.9b453793'];
          queryParam9: components['schemas']['getQueryParams1Request.ab38dabd'];
        };
        header?: never;
        path: {
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.428f9f7c'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v1/getQueryParams1': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.428f9f7c'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          'application/json': components['schemas']['getQueryParams1Request.5926e127'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse3.99d35476'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v1/getQueryParams2': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query: {
          inlineQueryParam1: string;
          inlineQueryParam2: string | number;
          inlineQueryParam3: number;
          inlineQueryParam4: null;
          inlineQueryParam5: [string, boolean];
          inlineQueryParam6: [string, boolean][];
          inlineQueryParam7: [[string, boolean], number][];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.428f9f7c'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v1/getQueryParam': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** getQueryParam */
    get: {
      parameters: {
        query: {
          queryParam1: components['schemas']['IParam1.fad6a1af'];
          queryParam2: components['schemas']['IParam2.9b453793'];
          queryParam3: components['schemas']['IParam3.77ad127c'];
          queryParam4: components['schemas']['IParam4.b6e31f3b'];
          queryParam5: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.428f9f7c'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v1/getQueryParamWithQueryParams/{path1}/{path2}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query: {
          queryParam1: components['schemas']['IParam1.fad6a1af'];
          queryParam2: components['schemas']['IParam2.9b453793'];
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
        header: {
          /** @description 单行注释 */
          param1: string;
          param2: null;
          param4: unknown;
          param5: unknown;
          param6: [string, boolean][];
        };
        path: {
          path1: string;
          path2: number;
        };
        cookie: {
          /** @description 单行注释 */
          param1: string;
          param2: null;
          param4: unknown;
          param5: unknown;
          param6: [string, boolean][];
        };
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['Response1.02b0b2c3'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v1/getParam': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query?: never;
        header: {
          orgcode1: string;
          orgcode2: components['schemas']['IParam3.77ad127c'];
        };
        path: {
          param1: components['schemas']['IParam1.fad6a1af'];
          param2: components['schemas']['IParam2.9b453793'];
          param3: components['schemas']['IParam3.77ad127c'];
          param4: components['schemas']['IParam4.b6e31f3b'];
          param5: number;
          param6: components['schemas']['getUserRequest.0480a246'];
        };
        cookie: {
          cookie1: string;
        };
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.428f9f7c'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v1/getQueryParamWithParam': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: {
      parameters: {
        query: {
          queryParam1: components['schemas']['IParam1.fad6a1af'];
          queryParam2: components['schemas']['IParam2.9b453793'];
        };
        header?: never;
        path: {
          param1: components['schemas']['IParam1.fad6a1af'];
          param2: components['schemas']['IParam2.9b453793'];
          param3: components['schemas']['IParam3.77ad127c'];
          param4: components['schemas']['IParam4.b6e31f3b'];
          param5: number;
          param6: components['schemas']['getUserRequest.0480a246'];
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['Response1.02b0b2c3'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v1/postBody1': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query: {
          queryParam1: components['schemas']['IParam1.fad6a1af'];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          'application/json': components['schemas']['postBody1.c400b008'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.428f9f7c'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v1/postBody2': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          'application/json': components['schemas']['IParam2.9b453793'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.428f9f7c'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v1/postBody3': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          'application/json': components['schemas']['IParam3.77ad127c'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.428f9f7c'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v1/postBody4': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          'application/json': components['schemas']['getQueryParams1Request.5926e127'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data:
                | components['schemas']['commonResponse.428f9f7c']
                | components['schemas']['Response1.02b0b2c3'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v1/postBody5': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          'application/json': {
            inlineBody1: string;
            inlineBody2?: number;
          };
          'multipart/form-data': {
            /** Format: binary */
            fileName: string;
          };
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data:
                | components['schemas']['commonResponse.428f9f7c']
                | components['schemas']['Response1.02b0b2c3'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/root/v1/postBodyParam': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody: {
        content: {
          'application/json': {
            BodyParam1: components['schemas']['BodyParam1.d4044a2f'];
            BodyParam2: components['schemas']['IParam2.9b453793'];
            BodyParam3: components['schemas']['IParam3.77ad127c'];
            BodyParam4: components['schemas']['IParam4.b6e31f3b'];
            BodyParam5: number;
            BodyParam6: components['schemas']['getUserRequest.0480a246'];
          };
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.428f9f7c'] &
                components['schemas']['Response1.02b0b2c3'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    'getQueryParams1Request.5926e127': {
      /** @description activityBases */
      activityBases: components['schemas']['ActivityBase'][];
    };
    ActivityBase: {
      /** @description 活动id(对应原有字段chooseRoomActivityId) */
      activityId: number;
      /** @description 活动名称 */
      activityName: string;
    } & {
      /** @description 活动下的用户数量 */
      customerCount: number;
      /** @description 活动下的房源数量 */
      roomCount?: number;
      /** @description 摇号同步数据-是否有异常 */
      isException?: boolean;
    };
    'proto.LockRequest.4f2e3d7c': {
      /** @description 房间id */
      roomId: number;
    };
    'CustomizeExportByFilterRequest.d0da47e7': {
      a: components['schemas']['Omit<postBody1,"tow">.c5c59c2d'];
    };
    'Omit<postBody1,"tow">.c5c59c2d': {
      postBody1param1: string;
    };
    'commonResponse.bdef45cb': {
      a3: string;
      b: components['schemas']['commonResponse2.ea9feac8'];
      c: components['schemas']['commonResponse2_1.3353e192'];
    };
    'commonResponse2.ea9feac8': {
      /** @description 多行注释 */
      param1: number;
    };
    'commonResponse2_1.3353e192': {
      /** @description 多行注释 */
      param2: number;
    };
    'IParam2.9b453793': {
      /** @description 单行注释 */
      param1: string;
      param2: null;
      param4: unknown;
      param5: unknown;
      param6: [string, boolean][];
    };
    'recordTest.89e6481d': {
      a: components['schemas']['Record<string,string>.992e92f3'];
      b: components['schemas']['Record<any,any>.992e92f3'];
      c: components['schemas']['Record<string,never>.992e92f3'];
      /** Format: date-time */
      d: string;
    };
    'Record<string,string>.992e92f3': Record<string, never>;
    'Record<any,any>.992e92f3': Record<string, never>;
    'Record<string,never>.992e92f3': Record<string, never>;
    /** Format: date-time */
    'Date.8c67fa4a': string;
    'InterFaceSameAll.928ca2e1': {
      id: string;
      id2: string;
    };
    'InterfaceAndNamespaceSameAll.19767a93': {
      name1: components['schemas']['proto.InterfaceAndNamespaceSame.item.59108b86'][];
    };
    'proto.InterfaceAndNamespaceSame.item.59108b86': {
      id: number;
      name: string;
    };
    'CustomizeExportByFilterRequest.52d99618': {
      a: components['schemas']['Omit<postBody1,"tow">.c5c59c2d'];
    };
    'commonResponse.428f9f7c': {
      a: string;
    };
    'getQueryParams1Request.ab38dabd': {
      /** @description 注释getQueryParams1Request */
      param1: string;
    };
    'commonResponse3.99d35476': {
      a2: string;
    };
    'IParam1.fad6a1af': {
      /** @description 多行注释 */
      param1: number;
    };
    'IParam3.77ad127c': {
      param1: {
        a: string;
      } & {
        b: boolean;
        c: {
          a: number;
        };
      };
      param2_1: string | number;
      param2:
        | components['schemas']['Partial<Pick<IUser,"id">>.da0e6500']
        | (string | number);
      /** @enum {string} */
      param3: '1' | '2' | '3';
      /** @enum {unknown} */
      param4: '1' | '2' | 3 | true;
      param5:
        | {
            /** @description 单行注释 */
            param1: string;
            param2: null;
            param4: unknown;
            param5: unknown;
            param6: [string, boolean][];
          }
        | ('1' | '2' | 3);
    };
    'Partial<Pick<IUser,"id">>.da0e6500': {
      id?: number;
    };
    'IParam4.b6e31f3b': {
      /** @description param1 minLength 1 */
      param1: string;
      param2: components['schemas']['Required<ActivityBase>.77a01dac'] | string;
      param3: components['schemas']['Required<Pick<IUser,"name">>.77a01dac'];
    };
    'Required<ActivityBase>.77a01dac': {
      /** @description 活动id(对应原有字段chooseRoomActivityId) */
      activityId: number;
      /** @description 活动名称 */
      activityName: string;
      /** @description 活动下的用户数量 */
      customerCount: number;
      /** @description 活动下的房源数量 */
      roomCount: number;
      /** @description 摇号同步数据-是否有异常 */
      isException: boolean;
    };
    'Required<Pick<IUser,"name">>.77a01dac': {
      name: string;
    };
    'Response1.02b0b2c3': {
      activityBases2: {
        /** @description 活动id(对应原有字段chooseRoomActivityId) */
        activityId: number;
        /** @description 活动名称 */
        activityName: string;
      } & {
        /** @description 活动下的用户数量 */
        customerCount: number;
        /** @description 活动下的房源数量 */
        roomCount?: number;
        /** @description 摇号同步数据-是否有异常 */
        isException?: boolean;
      } & {
        activityBases2Other: {
          a: string;
        };
      };
    };
    'getUserRequest.0480a246': {
      /** @description a any */
      a: unknown;
      b: string;
      c: {
        d?: string;
      };
      user: components['schemas']['userWithList.c5c59c2d'];
    };
    'userWithList.c5c59c2d': {
      list: {
        id: string;
        name: string;
        pics: string[];
      }[];
    };
    'postBody1.c400b008': {
      postBody1param1: string;
      tow: components['schemas']['Partial<postBody11>.da0e6500'][];
    };
    'Partial<postBody11>.da0e6500': {
      postBody1param11?: string;
    };
    'BodyParam1.d4044a2f': {
      BodyParam1: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
