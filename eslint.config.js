import pluginJs from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

export default [
  {
    ignores: [
      '**/lib/**',
      '**/node_modules/**',
      '**/__test__snapshots__/**',
      '**/coverage/**',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
  },
  { languageOptions: { globals: globals.browser } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      quotes: ['error', 'single'], // 使用单引号
      semi: ['error', 'always'], // 结束添加分号
    },
  },
];
