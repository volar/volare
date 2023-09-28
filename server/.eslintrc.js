module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      "@typescript-eslint/no-floating-promises": ["error"],
      'no-restricted-syntax': [
        'error',
        {
          'selector': ':not(BinaryExpression:matches([operator="!=="], [operator="==="])) > Literal[value=null]',
          'message': 'Usage of "null" is deprecated in this project, except when received from legacy APIs; use "undefined" instead.',
        }
      ]
    },
  };
  