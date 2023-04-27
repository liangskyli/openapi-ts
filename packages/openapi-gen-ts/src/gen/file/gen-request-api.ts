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
    const { requestParamsType, path } = this.opts;
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
    type IConfig<T extends Record<any, any>, U extends Record<any, any>> = T & U;
   `);
    this.requestAPI.push('\n export const requestApi = {');
  }

  public body(bodyOpts: IGenRequestAPIBodyOpts) {
    const {
      haveQuery,
      haveBody,
      methodObjRequired,
      method,
      requestParamsType,
      url,
    } = bodyOpts;
    const IConfigT: string[] = [];
    if (haveQuery || haveBody) {
      IConfigT.push('Omit<T');
      if (requestParamsType !== '') {
        IConfigT.push(` & ${requestParamsType}, 'method' | 'url'`);
      } else {
        IConfigT.push(', ');
      }
      if (haveQuery) {
        if (requestParamsType !== '') {
          IConfigT.push('| "params"');
        } else {
          IConfigT.push('"params"');
        }
      }
      if (haveBody) {
        if (requestParamsType !== '') {
          IConfigT.push('| "data"');
        } else {
          if (haveQuery) {
            IConfigT.push(' | ');
          }
          IConfigT.push('"data"');
        }
      }
      IConfigT.push('>,');
    } else {
      if (requestParamsType !== '') {
        IConfigT.push(`Omit<T & ${requestParamsType}, 'method' | 'url'>,`);
      } else {
        IConfigT.push('T,');
      }
    }

    this.requestAPI
      .push(`'${url}': <T extends Record<any, any> = Record<string, never>>(
        config: IConfig<
          ${IConfigT.length > 0 ? IConfigT.join('') : 'T,'}
      `);
    this.requestAPI.push(
      !haveQuery && !haveBody ? 'Record<string, never>' : '{',
    );
    if (haveQuery) {
      this.requestAPI.push(`params: IApi['${url}']['Query'];`);
    }
    if (haveBody) {
      const requestBodyRequired =
        methodObjRequired.find((item) => item === 'requestBody') !== undefined;
      this.requestAPI.push(
        `data${requestBodyRequired ? '' : '?'}: IApi['${url}']['Body'];`,
      );
    }
    if (haveQuery || haveBody) {
      this.requestAPI.push('}');
    }
    this.requestAPI.push(`>,
      ): Promise<IApi['${url}']['Response']> => {  
      const { ${haveQuery ? 'params,' : ''} ${
      haveBody ? 'data,' : ''
    } ...otherConfig } = config;

      return request({
        method: '${method}',
        url: '${url}',
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

  public async writeFile() {
    const { genTsAbsolutePath, prettierOptions } = this.opts;

    const requestAPIAbsolutePath = path.join(
      genTsAbsolutePath,
      'request-api.ts',
    );

    await writePrettierFile({
      prettierOptions,
      absolutePath: requestAPIAbsolutePath,
      data: this.toString(),
      successTip: 'Generate schema-api/request-api.ts file success',
    });
  }
}
