module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './packages/tsconfig.base.json',
    createDefaultProgram: true,
  },
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'no-console': 0,
    'no-new': 0,
    'no-case-declarations': 0,
    'no-param-reassign': 0,
    quotes: ['error', 'single'], // 使用单引号
    semi: ['error', 'always'], // 结束添加分号
  },
};
