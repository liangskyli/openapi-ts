import { register } from '@liangskyli/utils';
import type IOpenapiTS from 'openapi-typescript';

const { unregister } = register.register({ key: 'openapi-typescript' });

const openapiTS = require('openapi-typescript').default as typeof IOpenapiTS;

unregister();

export default openapiTS;
