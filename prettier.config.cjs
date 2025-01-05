module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  arrowParens: 'avoid', // https://prettier.io/docs/en/options.html#arrow-function-parentheses
  endOfLine: 'lf',
  bracketSameLine: false,
  overrides: [
    {
      files: '*.md{,x}',
      options: {
        semi: false,
        trailingComma: 'none',
      },
    },
  ],
};
