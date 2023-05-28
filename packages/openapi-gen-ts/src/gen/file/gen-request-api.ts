import path from 'path';
import { fileTip, writePrettierFile } from '../../utils';
import type {
  IGenInterfaceRequestFile,
  IReturnTypeProcessMethodMediaData,
} from '../gen-interface-request-file';

type IGenGenRequestApiOpts = Pick<
  IGenInterfaceRequestFile,
  'genTsAbsolutePath' | 'prettierOptions'
> &
  Partial<
    Pick<
      Required<IGenInterfaceRequestFile>['requestFile'],
      'requestParamsType' | 'path'
    >
  >;

type IGenRequestAPIBodyOpts = IReturnTypeProcessMethodMediaData &
  Pick<
    Required<IGenInterfaceRequestFile>['requestFile'],
    'requestParamsType'
  > & {
    url: string;
  };

export class GenRequestApi {
  private requestAPI: string[];
  private readonly opts: IGenGenRequestApiOpts;

  constructor(opts: IGenGenRequestApiOpts) {
    this.opts = opts;
    this.requestAPI = [];
    this.init();
  }

  private init() {
    const { requestParamsType = '', path } = this.opts;
    this.requestAPI.push(`${fileTip}
  ${
    requestParamsType !== ''
      ? `import type {${requestParamsType} } from '${
          path ? path : './request'
        }';`
      : ''
  } 
   import request from '${path ? path : './request'}';
   import type { IApi } from './interface-api';
  `);
    this.requestAPI.push('\n');
    this.requestAPI.push(`
    type IConfig<T extends Record<any, any> | unknown, U extends Record<any, any>> = T & U;
    type Equal<T, U> =
    (<P>(x: P) => P extends T ? 1: 2) extends
        (<P>(x: P) => P extends U ? 1: 2)
        ? true
        : false
   `);
    this.requestAPI.push('\n export const requestApi = {');
  }

  public body(bodyOpts: IGenRequestAPIBodyOpts) {
    const {
      haveQuery,
      havePath,
      haveBody,
      methodObjRequired,
      method,
      requestParamsType,
      url,
    } = bodyOpts;
    const IConfigT: string[] = [];
    if (haveQuery || haveBody) {
      if (requestParamsType) {
        IConfigT.push(
          `Omit<Equal<T,never> extends true ? ${requestParamsType} : (T & ${requestParamsType}),`,
        );
        IConfigT.push('"method" | "url"');
        if (haveQuery) {
          IConfigT.push('| "params"');
        }
        if (haveBody) {
          IConfigT.push('| "data"');
        }
      } else {
        IConfigT.push('Omit<Equal<T,never> extends true ? unknown : T,');
        if (haveQuery) {
          IConfigT.push('"params"');
        }
        if (haveBody) {
          if (haveQuery) {
            IConfigT.push(' | ');
          }
          IConfigT.push('"data"');
        }
      }
      IConfigT.push('>,');
    } else {
      if (requestParamsType) {
        IConfigT.push(
          `Omit<Equal<T,never> extends true ? ${requestParamsType} : (T & ${requestParamsType}), 'method' | 'url'>,`,
        );
      } else {
        IConfigT.push('Equal<T,never> extends true ? unknown : T,');
      }
    }

    this.requestAPI
      .push(`'${url}': <T extends Record<any, any> | never = never>(
        config: IConfig<
          ${IConfigT.join('')}
      `);
    this.requestAPI.push(
      !haveQuery && !havePath && !haveBody ? 'Record<any, any>' : '{',
    );
    if (haveQuery) {
      this.requestAPI.push(`params: IApi['${url}']['Query'];`);
    }
    if (havePath) {
      this.requestAPI.push(`path: IApi['${url}']['Path'];`);
    }
    if (haveBody) {
      const requestBodyRequired =
        methodObjRequired.find((item) => item === 'requestBody') !== undefined;
      this.requestAPI.push(
        `data${requestBodyRequired ? '' : '?'}: IApi['${url}']['Body'];`,
      );
    }
    if (haveQuery || havePath || haveBody) {
      this.requestAPI.push('}');
    }
    const noPathFinalURL = `const finalURL = '${url}';`;
    const havePathFinalURL = `
      let finalURL = '${url}';
      for (const [k, v] of Object.entries(path)) {
        finalURL = finalURL.replace(\`{\${k}}\`, encodeURIComponent(String(v)));
      }
      `;
    this.requestAPI.push(`>,
      ): Promise<IApi['${url}']['Response']> => {  
      const { ${haveQuery ? 'params,' : ''} ${havePath ? 'path,' : ''} 
        ${haveBody ? 'data,' : ''} ...otherConfig } = config;
        ${havePath ? havePathFinalURL : noPathFinalURL}

      return request({
        method: '${method}',
        url: finalURL,
        ${haveQuery ? 'params: params,' : ''}
        ${haveBody ? 'data: data,' : ''}
        ...otherConfig,
      });
    },
      `);
  }

  private footer() {
    this.requestAPI.push('}');
  }
  private toString() {
    this.footer();
    return this.requestAPI.join('');
  }

  public writeFile() {
    const { genTsAbsolutePath, prettierOptions } = this.opts;

    const requestAPIAbsolutePath = path.join(
      genTsAbsolutePath,
      'request-api.ts',
    );

    writePrettierFile({
      prettierOptions,
      absolutePath: requestAPIAbsolutePath,
      data: this.toString(),
      successTip: 'Generate schema-api/request-api.ts file success',
    });
  }
}
