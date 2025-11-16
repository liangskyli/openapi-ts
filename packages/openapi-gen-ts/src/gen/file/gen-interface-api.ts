import { writePrettierFile } from '@liangskyli/utils';
import path from 'node:path';
import type { IOpenapiMethod } from '../../utils';
import { fileTip } from '../../utils';
import type {
  IGenInterfaceRequestFile,
  IReturnTypeProcessMethodMediaData,
} from '../gen-interface-request-file';

type IGenInterfaceAPITypeBodyOpts = IReturnTypeProcessMethodMediaData &
  Pick<
    Required<IGenInterfaceRequestFile>,
    'requestQueryOmit' | 'requestBodyOmit'
  > & {
    url: string;
  };

type IGenInterfaceApiOpts = Pick<
  IGenInterfaceRequestFile,
  'genTsAbsolutePath' | 'prettierOptions'
>;

export class GenInterfaceApi {
  private readonly opts: IGenInterfaceApiOpts;
  private readonly interfaceAPIType: string[];
  private readonly interfaceAPIBodyType: Partial<Record<string, string[]>>;

  constructor(opts: IGenInterfaceApiOpts) {
    this.opts = opts;
    this.interfaceAPIType = [];
    this.interfaceAPIBodyType = {};
    this.init();
  }

  private init() {
    this.interfaceAPIType.push(`${fileTip}
  import type { paths } from './ts-schema';
  `);
    this.interfaceAPIType.push('\n export interface IApi {');
  }

  public body(bodyOpts: IGenInterfaceAPITypeBodyOpts) {
    const {
      haveQuery,
      havePath,
      haveBody,
      bodyMediaTypes,
      responseMediaType,
      methodObjRequired,
      responseCode,
      method,
      requestQueryOmit,
      requestBodyOmit,
      url,
    } = bodyOpts;
    if (this.interfaceAPIBodyType[url] === undefined) {
      this.interfaceAPIBodyType[url] = [];
    }
    this.interfaceAPIBodyType[url]!.push(`'${method}': {`);

    if (haveQuery) {
      const omitKeys = requestQueryOmit
        .map((omitItem) => `'${omitItem}'`)
        .join(' | ');
      const queryInterface = `paths['${url}']['${method}']['parameters']['query']`;
      this.interfaceAPIBodyType[url]!.push(
        omitKeys
          ? `Query: Omit<${queryInterface}, ${omitKeys}>;`
          : `Query: ${queryInterface};`,
      );
    }
    if (havePath) {
      const pathInterface = `paths['${url}']['${method}']['parameters']['path']`;
      this.interfaceAPIBodyType[url]!.push(`Path: ${pathInterface};`);
    }
    if (haveBody) {
      const omitKeys = requestBodyOmit
        .map((omitItem) => `'${omitItem}'`)
        .join(' | ');
      const requestBodyRequired =
        methodObjRequired.find((item) => item === 'requestBody') !== undefined;
      const bodyInterfaces = bodyMediaTypes.map((bodyMediaType) => {
        let bodyInterface = `paths['${url}']['${method}']['requestBody']['content']['${bodyMediaType}']`;
        if (!requestBodyRequired) {
          bodyInterface = `NonNullable<paths['${url}']['${method}']['requestBody']>['content']['${bodyMediaType}']`;
        }
        return omitKeys ? `Omit<${bodyInterface}, ${omitKeys}>` : bodyInterface;
      });
      this.interfaceAPIBodyType[url]!.push(
        `Body${requestBodyRequired ? '' : '?'}: ${bodyInterfaces.join(' & ')};`,
      );
    }
    if (responseMediaType) {
      this.interfaceAPIBodyType[url]!.push(
        `Response: paths['${url}']['${method}']['responses']['${responseCode}']['content']['${responseMediaType}'];`,
      );
    } else {
      this.interfaceAPIBodyType[url]!.push('Response: any');
    }
    this.interfaceAPIBodyType[url]!.push('};');
  }

  private footer() {
    this.interfaceAPIType.push('}');
  }
  private toString() {
    (Object.keys(this.interfaceAPIBodyType) as IOpenapiMethod[]).forEach(
      (method) => {
        this.interfaceAPIType.push(`'${method}': {`);
        this.interfaceAPIType.push(this.interfaceAPIBodyType[method]!.join(''));
        this.interfaceAPIType.push('},');
      },
    );

    this.footer();
    return this.interfaceAPIType.join('');
  }

  public async writeFile() {
    const { genTsAbsolutePath, prettierOptions } = this.opts;
    const interfaceAPITypeAbsolutePath = path.join(
      genTsAbsolutePath,
      'interface-api.ts',
    );

    await writePrettierFile({
      prettierOptions,
      absolutePath: interfaceAPITypeAbsolutePath,
      data: this.toString(),
      successTip: 'Generate schema-api/interface-api.ts file success',
    });
  }
}
