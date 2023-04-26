import { register } from '@liangskyli/utils';
import type IOpenapiTS from 'openapi-typescript';

register.register({});

const openapiTS = require('openapi-typescript').default as typeof IOpenapiTS;

register.restore();

export default openapiTS;
