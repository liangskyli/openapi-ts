import { describe, expect, test } from 'vitest';
import { swagger2ToOpenapi } from '../../src/gen/swagger2-to-openapi';

describe('swagger2ToOpenapi', () => {
  test('swagger2ToOpenapi path', async () => {
    await expect(
      await swagger2ToOpenapi('./test/example/swagger2/swagger2.json'),
    ).toMatchFileSnapshot('./__test__snapshots__/swagger2-to-openapi-1.json');
  });
  test('swagger2ToOpenapi url', async () => {
    await expect(
      await swagger2ToOpenapi(
        new URL('https://petstore.swagger.io/v2/swagger.json'),
      ),
    ).toMatchFileSnapshot('./__test__snapshots__/swagger2-to-openapi-2.json');
  });
});
