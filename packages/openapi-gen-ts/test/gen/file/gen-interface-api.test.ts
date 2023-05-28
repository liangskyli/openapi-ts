import { winPath } from '@liangskyli/utils';
import fs from 'fs-extra';
import { expect, test, vi } from 'vitest';
import { GenInterfaceApi } from '../../../src/gen/file/gen-interface-api';

test('Generate schema-api/interface-api.ts file', async () => {
  const genInterfaceAPIType = new GenInterfaceApi({
    genTsAbsolutePath: '/',
  });
  genInterfaceAPIType.body({
    haveQuery: true,
    havePath: false,
    haveBody: false,
    bodyMediaTypes: [''],
    responseMediaType: undefined,
    methodObjRequired: [],
    responseCode: '200',
    method: 'get',
    requestQueryOmit: [],
    requestBodyOmit: [],
    url: 'url1',
  });
  genInterfaceAPIType.body({
    haveQuery: false,
    havePath: false,
    haveBody: true,
    bodyMediaTypes: ['application/json'],
    responseMediaType: 'application/json',
    methodObjRequired: ['query'],
    responseCode: '200',
    method: 'post',
    requestQueryOmit: [],
    requestBodyOmit: [],
    url: 'url2',
  });
  genInterfaceAPIType.body({
    haveQuery: true,
    havePath: true,
    haveBody: true,
    bodyMediaTypes: ['application/json'],
    responseMediaType: 'application/json',
    methodObjRequired: ['query', 'requestBody'],
    responseCode: '200',
    method: 'post',
    requestQueryOmit: ['requestQueryOmit'],
    requestBodyOmit: ['requestBodyOmit'],
    url: 'url3',
  });
  genInterfaceAPIType.writeFile();
  let args = vi.mocked(fs.writeFileSync).mock.calls[0];
  expect((global as any).writePrettierFileArgs.prettierOptions).toBeUndefined();
  expect(winPath(args[0] as string)).toBe('/interface-api.ts');
  expect((global as any).writePrettierFileArgs.successTip).toBe(
    'Generate schema-api/interface-api.ts file success',
  );

  await expect(args[1]).toMatchFileSnapshot(
    './__test__snapshots__/interface-api.ts',
  );
});
