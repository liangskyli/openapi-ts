import path from 'path';
import { fileTip, writePrettierFile } from '../../utils';
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
  private interfaceAPIType: string[];
  private readonly opts: IGenInterfaceApiOpts;

  constructor(opts: IGenInterfaceApiOpts) {
    this.opts = opts;
    this.interfaceAPIType = [];
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
    this.interfaceAPIType.push(`'${url}': {`);
    if (haveQuery) {
      const omitKeys = requestQueryOmit
        .map((omitItem) => `'${omitItem}'`)
        .join(' | ');
      const queryInterface = `paths['${url}']['${method}']['parameters']['query']`;
      this.interfaceAPIType.push(
        omitKeys
          ? `Query: Omit<${queryInterface}, ${omitKeys}>;`
          : `Query: ${queryInterface};`,
      );
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
          bodyInterface = `(paths['${url}']['${method}']['requestBody'] & Record<string, never>)['content']['${bodyMediaType}']`;
        }
        return omitKeys ? `Omit<${bodyInterface}, ${omitKeys}>` : bodyInterface;
      });
      this.interfaceAPIType.push(
        `Body${requestBodyRequired ? '' : '?'}: ${bodyInterfaces.join(' & ')};`,
      );
    }
    if (responseMediaType) {
      this.interfaceAPIType.push(
        `Response: paths['${url}']['${method}']['responses']['${responseCode}']['content']['${responseMediaType}'];`,
      );
    } else {
      this.interfaceAPIType.push('Response: any');
    }
    this.interfaceAPIType.push('};');
  }

  private footer() {
    this.interfaceAPIType.push('}');
  }
  private toString() {
    this.footer();
    return this.interfaceAPIType.join('');
  }

  public writeFile() {
    const { genTsAbsolutePath, prettierOptions } = this.opts;
    const interfaceAPITypeAbsolutePath = path.join(
      genTsAbsolutePath,
      'interface-api.ts',
    );

    writePrettierFile({
      prettierOptions,
      absolutePath: interfaceAPITypeAbsolutePath,
      data: this.toString(),
      successTip: 'Generate schema-api/interface-api.ts file success',
    });
  }
}
