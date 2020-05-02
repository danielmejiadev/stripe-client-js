module.exports = {
  ignorePatterns: ["dist/**"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'object-curly-newline': [
      'error',
      {
          ObjectPattern: {
              multiline: true
          },
          ImportDeclaration: 'never',
          ExportDeclaration: {
              multiline: true,
              minProperties: 3
          }
      }
  ],
  },
};
