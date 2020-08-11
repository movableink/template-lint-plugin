'use strict';

const generateRuleTests = require('ember-template-lint/lib/helpers/rule-test-harness');

module.exports = function (options) {
  return generateRuleTests({
    ...options,
    plugins: [require('../../index')],
    groupMethodBefore: beforeEach,
    groupingMethod: describe,
    testMethod: test,
  });
};
