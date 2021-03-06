'use strict';

module.exports = {
  name: '@movable/template-lint-plugin',

  rules: {
    'no-expression-like-strings': require('./lib/rules/no-expression-like-strings'),
    'require-purgeable-class-names': require('./lib/rules/require-purgeable-class-names'),
  },

  configurations: {
    'avoid-possible-typos': {
      rules: {
        'no-expression-like-strings': true,
      },
    },
    'avoid-deprecated-elements': {
      rules: {
        'no-forbidden-elements': ['b', 'i'],
      },
    },
    base: {
      extends: [
        '2-x-recommended',
        '@movable/template-lint-plugin:avoid-possible-typos',
        '@movable/template-lint-plugin:avoid-deprecated-elements',
      ],
      rules: {
        'require-purgeable-class-names': true,

        // Overrides to built-in "recommended" rules
        'no-inline-styles': {
          allowDynamicStyles: true,
        },
        quotes: false,
      },
    },
  },
};
