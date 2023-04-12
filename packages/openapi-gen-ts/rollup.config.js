import { getConfig } from '../rollup.base.config';
import packageJSON from './package.json';

export default [getConfig(packageJSON)];
