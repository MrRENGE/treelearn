module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'html', '@typescript-eslint'],
  rules: {
    'import/resolver': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
};
