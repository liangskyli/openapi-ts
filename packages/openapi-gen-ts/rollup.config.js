import { createRequire } from 'node:module';
import { getConfig } from '../rollup.base.config.js';

const require = createRequire(import.meta.url);
const packageJSON = require('./package.json');

export default [getConfig(packageJSON)];
