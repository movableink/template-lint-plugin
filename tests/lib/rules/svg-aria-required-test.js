const generateRuleTests = require('../../helpers/rule-test-harness');
const { ERROR_MESSAGE } = require('../../../lib/rules/svg-aria-required');

generateRuleTests({
  name: 'svg-aria-required',
  config: true,
  groupMethodBefore: beforeEach,
  groupingMethod: describe,
  testMethod: test,

  good: [`{{svg-jar "hello" aria-label="yeah"}}`, `{{svg-jar "hello" aria-labelledby="yeah"}}`],

  bad: [
    {
      template: `{{svg-jar "hello" data-test="yeah"}}`,
      result: {
        message: ERROR_MESSAGE,
        column: 0,
        line: 1,
        source: '{{svg-jar "hello" data-test="yeah"}}',
      },
    },
  ],
});
