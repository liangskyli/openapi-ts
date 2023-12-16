import { requestApi } from './schema-api/request-api';

requestApi['/root/postBody2-v3']
  .post({
    data: { a: { postBody1param1: '1' } },
  })
  .then((res) => {
    console.log(res);
  });

requestApi['/root/v4/getQueryParams2-v4/{id}']
  .head({
    baseURL: 'd',
    params: { activityBases: [] },
    path: { id: 1 },
  })
  .then((res) => {
    console.log(res);
  });

requestApi['/root/v1/postBody2']
  .post({
    baseURL: 'd',
    data: {
      param1: '1',
      param2: null,
      param4: 4,
      param5: 5,
      param6: [['1', true]],
    },
  })
  .then((res) => {
    console.log(res.data);
  });

requestApi['/root/v1/postBody1']
  .post({
    baseURL: 'd',
    // url: 'd',
    params: { queryParam1: { param1: 1 } },
    data: { postBody1param1: '1', tow: [] },
  })
  .then((res) => {
    console.log(res.data);
  });

requestApi['/root/v1/postBody1']
  .post<{ a: string }>({
    a: 'a',
    baseURL: 'b',
    params: { queryParam1: { param1: 1 } },
    data: { postBody1param1: '1', tow: [] },
  })
  .then((res) => {
    console.log(res.data);
  });
