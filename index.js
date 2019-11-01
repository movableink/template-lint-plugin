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
    }
  }
};
