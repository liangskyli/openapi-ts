import { register } from '@liangskyli/utils';
import type IOpenapiTS from 'openapi-typescript';

register.register({});

const openapiTS = require('openapi-typescript').default as typeof IOpenapiTS;
const defaultSchemaObjectTransform =
  require('openapi-typescript/dist/transform/schema-object').defaultSchemaObjectTransform;
register.restore();

export default openapiTS;
export { defaultSchemaObjectTransform };
