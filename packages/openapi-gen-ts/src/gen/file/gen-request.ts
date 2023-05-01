import type { IPrettierOptions } from '@liangskyli/utils';
import path from 'path';
import { fileTip, packageName, writePrettierFile } from '../../utils';

export type IGenRequestOpts = {
  genTsAbsolutePath: string;
  prettierOptions?: IPrettierOptions;
};

export class GenRequest {
  private readonly opts: IGenRequestOpts;
  public requestString: string;

  constructor(opts: IGenRequestOpts) {
    this.requestString = '';
    this.opts = opts;
    this.generator();
  }

  private generator() {
    const requestData: string[] = [];
    requestData.push(`${fileTip}
    import type { AxiosRequestConfig } from 'axios';
    import axios from 'axios';
    import type { IAPIRequest } from '${packageName}';
    
    const request: IAPIRequest = (config) => {
      return axios(config).then((res) => res.data);
    };
    
    export default request;
    export { AxiosRequestConfig };
  `);
    this.requestString = requestData.join('');
  }

  public writeFile() {
    const { genTsAbsolutePath, prettierOptions } = this.opts;
    const requestDataAbsolutePath = path.join(genTsAbsolutePath, 'request.ts');

    writePrettierFile({
      prettierOptions,
      absolutePath: requestDataAbsolutePath,
      data: this.requestString,
      successTip: 'Generate schema-api/request.ts file success',
    });
  }
}
