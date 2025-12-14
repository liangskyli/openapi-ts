import { defineConfig } from 'rolldown';
import { getConfig } from '../rolldown.base.config';
import packageJSON from './package.json' with { type: 'json' };

export default defineConfig([getConfig(packageJSON)]);
