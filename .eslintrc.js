module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:fsd/all', 'airbnb-base', 'airbnb-typescript/base'],
  // extends: [
  //   'airbnb',
  //   'airbnb-typescript',
  //   'airbnb/hooks',
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:@typescript-eslint/recommended-requiring-type-checking',
  // ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: ['fsd'],
  rules: {},
};
