import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const request = (config: AxiosRequestConfig) => {
  return axios(config).then((res) => res.data);
};

export default request;
