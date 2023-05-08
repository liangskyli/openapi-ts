import { winPath } from '@liangskyli/utils';
import fs from 'fs-extra';
import { expect, test, vi } from 'vitest';
import { GenRequestApi } from '../../../../src/gen/file/gen-request-api';

test('Generate schema-api/request-api.ts file', async () => {
  let genRequestAPI = new GenRequestApi({
    genTsAbsolutePath: '/',
    requestParamsType: 'requestParamsType',
    path: undefined,
  });

  genRequestAPI.body({
    bodyMediaTypes: [],
    responseMediaType: undefined,
    responseCode: '200',

    haveQuery: true,
    haveBody: false,
    methodObjRequired: [],
    method: 'get',
    requestParamsType: '',
    url: 'url1',
  });
  genRequestAPI.body({
    bodyMediaTypes: [],
    responseMediaType: undefined,
    responseCode: '200',

    haveQuery: false,
    haveBody: true,
    methodObjRequired: ['query'],
    method: 'post',
    requestParamsType: 'requestParamsType',
    url: 'url2',
  });
  genRequestAPI.body({
    bodyMediaTypes: [],
    responseMediaType: undefined,
    responseCode: '200',

    haveQuery: true,
    haveBody: true,
    methodObjRequired: ['query', 'requestBody'],
    method: 'post',
    requestParamsType: '',
    url: 'url3',
  });
  genRequestAPI.body({
    bodyMediaTypes: [],
    responseMediaType: undefined,
    responseCode: '200',

    haveQuery: true,
    haveBody: true,
    methodObjRequired: ['query', 'requestBody'],
    method: 'post',
    requestParamsType: 'requestParamsType',
    url: 'url4',
  });
  genRequestAPI.body({
    bodyMediaTypes: [],
    responseMediaType: undefined,
    responseCode: '200',

    haveQuery: false,
    haveBody: false,
    methodObjRequired: [],
    method: 'put',
    requestParamsType: '',
    url: 'url5',
  });
  genRequestAPI.body({
    bodyMediaTypes: [],
    responseMediaType: undefined,
    responseCode: '200',

    haveQuery: false,
    haveBody: false,
    methodObjRequired: [],
    method: 'put',
    requestParamsType: 'requestParamsType',
    url: 'url6',
  });
  genRequestAPI.writeFile();
  let args = vi.mocked(fs.writeFileSync).mock.calls[0];
  expect((global as any).writePrettierFileArgs.prettierOptions).toBeUndefined();
  expect(winPath(args[0] as string)).toBe('/request-api.ts');
  expect((global as any).writePrettierFileArgs.successTip).toBe(
    'Generate schema-api/request-api.ts file success',
  );
  await expect(args[1]).toMatchFileSnapshot(
    './__test__snapshots__/request-api-1.ts',
  );

  vi.clearAllMocks();
  genRequestAPI = new GenRequestApi({
    genTsAbsolutePath: '/',
    requestParamsType: '',
    path: 'path',
  });

  genRequestAPI.body({
    bodyMediaTypes: [],
    responseMediaType: undefined,
    responseCode: '200',

    haveQuery: true,
    haveBody: false,
    methodObjRequired: [],
    method: 'get',
    requestParamsType: '',
    url: 'url1',
  });
  genRequestAPI.writeFile();
  args = vi.mocked(fs.writeFileSync).mock.calls[0];
  await expect(args[1]).toMatchFileSnapshot(
    './__test__snapshots__/request-api-2.ts',
  );

  vi.clearAllMocks();
  genRequestAPI = new GenRequestApi({
    genTsAbsolutePath: '/',
    requestParamsType: 'requestParamsType',
    path: undefined,
  });

  genRequestAPI.body({
    bodyMediaTypes: [],
    responseMediaType: undefined,
    responseCode: '200',

    haveQuery: true,
    haveBody: false,
    methodObjRequired: [],
    method: 'get',
    requestParamsType: '',
    url: 'url1',
  });
  genRequestAPI.writeFile();
  args = vi.mocked(fs.writeFileSync).mock.calls[0];
  await expect(args[1]).toMatchFileSnapshot(
    './__test__snapshots__/request-api-3.ts',
  );

  vi.clearAllMocks();
  genRequestAPI = new GenRequestApi({
    genTsAbsolutePath: '/',
    requestParamsType: 'requestParamsType',
    path: 'path',
  });

  genRequestAPI.body({
    bodyMediaTypes: [],
    responseMediaType: undefined,
    responseCode: '200',

    haveQuery: true,
    haveBody: false,
    methodObjRequired: [],
    method: 'get',
    requestParamsType: 'requestParamsType',
    url: 'url1',
  });
  genRequestAPI.writeFile();
  args = vi.mocked(fs.writeFileSync).mock.calls[0];
  await expect(args[1]).toMatchFileSnapshot(
    './__test__snapshots__/request-api-4.ts',
  );
});
