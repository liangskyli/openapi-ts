/**
 * This file was auto-generated by @liangskyli/openapi-gen-ts.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/root/v4/getQueryParams1-v4': {
    get: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'text/plain': string;
          };
        };
      };
    };
  };
  '/root/v4/getNoQueryParams-v4': {
    get: {
      responses: {
        /** @description Success */
        200: {
          content: {
            'text/plain': string;
          };
        };
      };
    };
  };
  '/root/v4/postBody1-v4': {
    post: {
      parameters: {
        query: {
          queryParam1: number;
        };
      };
      requestBody: {
        content: {
          'application/json': components['schemas']['proto.LockRequest.be7af638'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'text/plain': string;
          };
        };
      };
    };
  };
  '/root/v4/postBody2-v4': {
    post: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
      };
      requestBody?: {
        content: {
          'application/json': components['schemas']['proto.LockRequest.be7af638'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'text/plain': string;
          };
        };
      };
    };
  };
  '/root/v4/getQueryParams2-v4/{id}': {
    head: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
        path: {
          id: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'text/plain': string;
          };
        };
      };
    };
  };
  '/root/v4/getQueryParams3-v4': {
    patch: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'text/plain': string;
          };
        };
      };
    };
  };
  '/root/v4/file': {
    post: {
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
          content: {
            'text/plain': string;
          };
        };
      };
    };
  };
  '/root/v4/files': {
    post: {
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
          content: {
            'text/plain': string;
          };
        };
      };
    };
  };
  '/root/v4/Put': {
    put: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'text/plain': string;
          };
        };
      };
    };
  };
  '/root/v4/Delete': {
    delete: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'text/plain': string;
          };
        };
      };
    };
  };
  '/root/v4': {
    get: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'text/plain': string;
          };
        };
      };
    };
  };
  '/root/getQueryParams1-v3': {
    get: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.72f9dc4c'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/getQueryParam-v3/{id}': {
    get: {
      parameters: {
        query: {
          queryParam1: number;
          queryParam2: string | number;
          queryParam3?: number[];
          queryParam4: (string | number)[];
          queryParam5: (number | boolean)[];
          queryParam6: unknown;
          queryParam7: unknown;
          queryParam8?: components['schemas']['IParam2.533c44ea'];
          queryParam9?: {
            a: string;
            b: string;
          };
          queryParam10?: ('1' | '2' | 3) | true;
          queryParam11?: ('1' | '2' | 3) | boolean;
          queryParam12?: ('1' | '2' | 3) | boolean;
          queryParam13?: boolean;
          queryParam14?: boolean;
          queryParam15?: [
            components['schemas']['IParam2.533c44ea'],
            number,
            components['schemas']['getQueryParams1Request.b20d307f'],
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
          queryParam22?: components['schemas']['recordTest.112e854d'];
          queryParam23?: components['schemas']['Date.b4dfd3f2'];
          queryParam24?: null;
          queryParam25?: string;
          queryParam26?: boolean;
          queryParam27?: boolean;
        };
        path: {
          id: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
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
  };
  '/root/postBody1-v3': {
    post: {
      requestBody: {
        content: {
          'application/json': components['schemas']['proto.LockRequest.be7af638'];
        };
      };
      responses: {
        /** @description Success */
        200: {
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
  };
  '/root/v2/getQueryParams1-v2': {
    get: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.2e0063f8'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/v2/getQueryParam-v2/{id}': {
    get: {
      parameters: {
        query: {
          queryParam1: number;
          queryParam2: string | number;
          queryParam3: number[];
          queryParam4: (string | number)[];
          queryParam5: (string | number)[];
          queryParam6: unknown;
          queryParam7: unknown;
          queryParam8: components['schemas']['IParam2.533c44ea'];
          queryParam9: components['schemas']['getQueryParams1Request.1e8dc649'];
        };
        path: {
          id: string;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.2e0063f8'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/v1/getQueryParams1': {
    get: {
      parameters: {
        query: {
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.2e0063f8'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/v1/getQueryParams2': {
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
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.2e0063f8'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/v1/getQueryParam': {
    /** getQueryParam */
    get: {
      parameters: {
        query: {
          queryParam1: components['schemas']['IParam1.75a8c941'];
          queryParam2: components['schemas']['IParam2.533c44ea'];
          queryParam3: components['schemas']['IParam3.5823c769'];
          queryParam4: components['schemas']['IParam4.20099fa0'];
          queryParam5: number;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.2e0063f8'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/v1/getQueryParamWithQueryParams/{path1}/{path2}': {
    get: {
      parameters: {
        query: {
          queryParam1: components['schemas']['IParam1.75a8c941'];
          queryParam2: components['schemas']['IParam2.533c44ea'];
          /** @description activityBases */
          activityBases: components['schemas']['ActivityBase'][];
        };
        path: {
          path1: string;
          path2: number;
        };
        cookie: {
          /** @description 单行注释 */
          param1: string;
          param2: null;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['Response1.a4ad3aac'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/v1/getParam': {
    get: {
      parameters: {
        header: {
          orgcode1: string;
          orgcode2: components['schemas']['IParam3.5823c769'];
        };
        path: {
          param1: components['schemas']['IParam1.75a8c941'];
          param2: components['schemas']['IParam2.533c44ea'];
          param3: components['schemas']['IParam3.5823c769'];
          param4: components['schemas']['IParam4.20099fa0'];
          param5: number;
          param6: components['schemas']['getUserRequest.34eee32a'];
        };
        cookie: {
          cookie1: string;
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.2e0063f8'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/v1/getQueryParamWithParam': {
    get: {
      parameters: {
        query: {
          queryParam1: components['schemas']['IParam1.75a8c941'];
          queryParam2: components['schemas']['IParam2.533c44ea'];
        };
        path: {
          param1: components['schemas']['IParam1.75a8c941'];
          param2: components['schemas']['IParam2.533c44ea'];
          param3: components['schemas']['IParam3.5823c769'];
          param4: components['schemas']['IParam4.20099fa0'];
          param5: number;
          param6: components['schemas']['getUserRequest.34eee32a'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['Response1.a4ad3aac'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/v1/postBody1': {
    post: {
      parameters: {
        query: {
          queryParam1: components['schemas']['IParam1.75a8c941'];
        };
      };
      requestBody: {
        content: {
          'application/json': components['schemas']['postBody1.5ca1bd16'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.2e0063f8'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/v1/postBody2': {
    post: {
      requestBody: {
        content: {
          'application/json': components['schemas']['IParam2.533c44ea'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.2e0063f8'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/v1/postBody3': {
    post: {
      requestBody: {
        content: {
          'application/json': components['schemas']['IParam3.5823c769'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.2e0063f8'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/v1/postBody4': {
    post: {
      requestBody: {
        content: {
          'application/json': components['schemas']['getQueryParams1Request.b20d307f'];
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data:
                | components['schemas']['commonResponse.2e0063f8']
                | components['schemas']['Response1.a4ad3aac'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/v1/postBody5': {
    post: {
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
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data:
                | components['schemas']['commonResponse.2e0063f8']
                | components['schemas']['Response1.a4ad3aac'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
  '/root/v1/postBodyParam': {
    post: {
      requestBody: {
        content: {
          'application/json': {
            BodyParam1: components['schemas']['BodyParam1.31f12947'];
            BodyParam2: components['schemas']['IParam2.533c44ea'];
            BodyParam3: components['schemas']['IParam3.5823c769'];
            BodyParam4: components['schemas']['IParam4.20099fa0'];
            BodyParam5: number;
            BodyParam6: components['schemas']['getUserRequest.34eee32a'];
          };
        };
      };
      responses: {
        /** @description Success */
        200: {
          content: {
            'application/json': {
              /** @description 接口返回code码字段 */
              code: number;
              data: components['schemas']['commonResponse.2e0063f8'] &
                components['schemas']['Response1.a4ad3aac'];
              /** @description 接口返回信息字段 */
              msg?: string;
            };
          };
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    'getQueryParams1Request.b20d307f': {
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
    'proto.LockRequest.be7af638': {
      /** @description 房间id */
      roomId: number;
    };
    'commonResponse.72f9dc4c': {
      a3: string;
      b: components['schemas']['commonResponse2.f01d223d'];
    };
    'commonResponse2.f01d223d': {
      /** @description 多行注释 */
      param1: number;
    };
    'IParam2.533c44ea': {
      /** @description 单行注释 */
      param1: string;
      param2: null;
    };
    'recordTest.112e854d': {
      a: components['schemas']['Record<string,string>.c2db622b'];
      b: components['schemas']['Record<any,any>.c2db622b'];
      c: components['schemas']['Record<string,never>.c2db622b'];
      /** Format: date-time */
      d: string;
    };
    'Record<string,string>.c2db622b': Record<string, never>;
    'Record<any,any>.c2db622b': Record<string, never>;
    'Record<string,never>.c2db622b': Record<string, never>;
    /** Format: date-time */
    'Date.b4dfd3f2': string;
    'commonResponse.2e0063f8': {
      a: string;
    };
    'getQueryParams1Request.1e8dc649': {
      /** @description 注释getQueryParams1Request */
      param1: string;
    };
    'IParam1.75a8c941': {
      /** @description 多行注释 */
      param1: number;
    };
    'IParam3.5823c769': {
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
        | components['schemas']['Partial<Pick<IUser,"id">>.1800f052']
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
          }
        | ('1' | '2' | 3);
    };
    'Partial<Pick<IUser,"id">>.1800f052': {
      id?: number;
    };
    'IParam4.20099fa0': {
      /** @description param1 minLength 1 */
      param1: string;
      param2: components['schemas']['Required<ActivityBase>.0036b956'] | string;
      param3: components['schemas']['Required<Pick<IUser,"name">>.0036b956'];
    };
    'Required<ActivityBase>.0036b956': {
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
    'Required<Pick<IUser,"name">>.0036b956': {
      name: string;
    };
    'Response1.a4ad3aac': {
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
    'getUserRequest.34eee32a': {
      /** @description a any */
      a: unknown;
      b: string;
      c: {
        d?: string;
      };
      user: components['schemas']['userWithList.287fa0d1'];
    };
    'userWithList.287fa0d1': {
      list: {
        id: string;
        name: string;
        pics: string[];
      }[];
    };
    'postBody1.5ca1bd16': {
      postBody1param1: string;
      tow: components['schemas']['Partial<postBody11>.1800f052'][];
    };
    'Partial<postBody11>.1800f052': {
      postBody1param11?: string;
    };
    'BodyParam1.31f12947': {
      BodyParam1: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
