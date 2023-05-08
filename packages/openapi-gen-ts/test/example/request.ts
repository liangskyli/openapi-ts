import type { IAPIRequest } from '@liangskyli/openapi-gen-ts';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const request: IAPIRequest = (config) => {
  return axios(config).then((res) => res.data);
};

export default request;
export { AxiosRequestConfig };
