import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript2';
import packageJSON from './package.json';

const extensions = ['.js', '.ts', '.tsx'];

// 基础配置
const baseConfig = {
  input: ['./src/index.ts'],
  external: [
    ...Object.keys(packageJSON.dependencies || {}),
    ...Object.keys(packageJSON.peerDependencies || {}),
  ],
  plugins: [
    del({ targets: 'lib/*' }),
    nodeResolve({ extensions }),
    typescript({
      tsconfig: './tsconfig.json', // 导入本地ts配置
    }),
    commonjs(),
    json(),
  ],
};

// 需要导出的模块类型
const outputBaseMap = [
  {
    file: packageJSON.main, // 通用模块
    format: 'cjs',
  },
  {
    file: packageJSON.module, // es6模块
    format: 'esm',
  },
];

const createConfig = (output) => {
  return {
    ...baseConfig,
    output,
  };
};

export default [createConfig(outputBaseMap)];
