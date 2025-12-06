import { getConfig } from '../rollup.base.config.js';
import packageJSON from './package.json' with { type: 'json' };

export default [getConfig(packageJSON)];
