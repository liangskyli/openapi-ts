import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { IAPIRequest } from '@liangskyli/openapi-gen-ts';

const request: IAPIRequest = (config) => {
  return axios(config).then((res) => res.data);
};

export default request;
export { AxiosRequestConfig };
