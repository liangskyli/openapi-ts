import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { IAPIRequest } from '../../lib';

const request: IAPIRequest = (config) => {
  return axios(config).then((res) => res.data);
};

export default request;
export { AxiosRequestConfig };
