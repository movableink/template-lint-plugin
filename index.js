'use strict';

module.exports = {
  name: '@movable/template-lint-plugin',

  rules: {
    'no-expression-like-strings': require('./lib/rules/no-expression-like-strings')
  },

  configurations: {
    'avoid-possible-typos': {
      rules: {
        'no-expression-like-strings': true
      }
    },

    base: {
      extends: [
        'recommended',
        '@movable/template-lint-plugin:avoid-possible-typos'
      ],
      rules: {
        // Overrides to built-in "recommended" rules
        'no-inline-styles': {
          allowDynamicStyles: true
        },
        quotes: false
      }
    }
  }
};
