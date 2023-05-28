import { requestApi } from './schema-api/request-api';

requestApi['/root/v4/getQueryParams2-v4/{id}']({
  baseURL: 'd',
  params: { activityBases: [] },
  path: { id: 1 },
}).then((res) => {
  console.log(res);
});

requestApi['/root/v1/postBody2']({
  baseURL: 'd',
  data: { param1: '1', param2: null },
}).then((res) => {
  console.log(res.data);
});

requestApi['/root/v1/postBody1']({
  baseURL: 'd',
  // url: 'd',
  params: { queryParam1: { param1: 1 } },
  data: { postBody1param1: '1', tow: [] },
}).then((res) => {
  console.log(res.data);
});

requestApi['/root/v1/postBody1']<{ a: string }>({
  a: 'a',
  baseURL: 'b',
  params: { queryParam1: { param1: 1 } },
  data: { postBody1param1: '1', tow: [] },
}).then((res) => {
  console.log(res.data);
});
