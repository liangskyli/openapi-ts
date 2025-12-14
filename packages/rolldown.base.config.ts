import type { RolldownOptions } from 'rolldown';

type IConfigFunction = (packageJSON: {
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
}) => RolldownOptions;
// 基础配置
const baseConfig: IConfigFunction = (packageJSON) => {
  return {
    input: ['./src/index.ts'],
    external: [
      ...Object.keys(packageJSON.dependencies || {}),
      ...Object.keys(packageJSON.peerDependencies || {}),
      ...Object.keys(packageJSON.optionalDependencies || {}),
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    platform: 'node',
    output: [
      {
        dir: 'lib',
        cleanDir: true,
        format: 'esm',
      },
    ],
  };
};

const getConfig: IConfigFunction = (packageJSON) => baseConfig(packageJSON);

export { getConfig };
