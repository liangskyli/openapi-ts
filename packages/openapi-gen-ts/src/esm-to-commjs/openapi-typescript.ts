// eslint-disable-next-line no-global-assign,no-native-reassign
require = require('@qiwi/esm')(module /*, options*/);
const openapiTS = require('openapi-typescript').default;
const defaultSchemaObjectTransform =
  require('openapi-typescript/dist/transform/schema-object').defaultSchemaObjectTransform;
export default openapiTS;
export { defaultSchemaObjectTransform };
