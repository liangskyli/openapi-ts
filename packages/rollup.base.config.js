import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript2';

const extensions = ['.js', '.ts', '.tsx'];

// 基础配置
const baseConfig = (packageJSON) => {
  return {
    input: ['./src/index.ts'],
    external: [
      ...Object.keys(packageJSON.dependencies || {}),
      ...Object.keys(packageJSON.peerDependencies || {}),
      ...Object.keys(packageJSON.optionalDependencies || {}),
    ],
    plugins: [
      del({ targets: 'lib/*' }),
      nodeResolve({ extensions }),
      typescript(),
      commonjs(),
      json(),
    ],
  };
};

// 需要导出的模块类型
const outputBaseMap = (packageJSON) => [
  {
    file: packageJSON.main, // 通用模块
    format: 'cjs',
    exports: 'named',
    interop: 'auto',
  },
  {
    file: packageJSON.module, // es6模块
    format: 'esm',
  },
];

const createConfig = (packageJSON) => {
  return {
    ...baseConfig(packageJSON),
    output: outputBaseMap(packageJSON),
  };
};

const getConfig = (packageJSON) => createConfig(packageJSON);

export { getConfig };
