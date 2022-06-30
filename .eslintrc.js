module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'linebreak-style': 0,
    'react/prop-types': 0,
    'require-jsdoc': 0,
    'max-len': [1, {'code': 100}],
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
    'no-unused-vars': 1,
    'camelcase': 'off',
  },
};
