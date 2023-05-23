import type { OpenAPI3 } from 'openapi-typescript';
import converter from 'swagger2openapi';

const swagger2ToOpenapi: (schema: string | URL) => Promise<OpenAPI3> = async (
  schema,
) => {
  return new Promise((resolve, reject) => {
    if (typeof schema === 'string') {
      converter.convertFile(schema, {}, (error, options) => {
        if (error) {
          reject(error);
        } else {
          resolve(options.openapi as unknown as OpenAPI3);
        }
      });
    } else {
      converter.convertUrl(schema.href, {}, (error, options) => {
        if (error) {
          reject(error);
        } else {
          resolve(options.openapi as unknown as OpenAPI3);
        }
      });
    }
  });
};
export { swagger2ToOpenapi };
