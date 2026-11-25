const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = [
  { ignores: ['dist/', 'node_modules/', 'coverage/'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
];
