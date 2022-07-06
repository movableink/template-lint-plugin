import { ERROR_MESSAGE_FORBIDDEN_ELEMENTS } from 'ember-template-lint/lib/rules/no-forbidden-elements';
import generateRuleTests from '../../helpers/rule-test-harness';

generateRuleTests({
  name: 'no-forbidden-elements',
  config: ['b', 'i'],
  good: ['<strong></strong>', '<em></em>'],
  bad: [
    {
      template: '<b></b>',
      result: {
        message: ERROR_MESSAGE_FORBIDDEN_ELEMENTS('b'),
        line: 1,
        column: 0,
        source: '<b></b>',
      },
    },
    {
      template: '<i></i>',
      result: {
        message: ERROR_MESSAGE_FORBIDDEN_ELEMENTS('i'),
        line: 1,
        column: 0,
        source: '<i></i>',
      },
    },
  ],
});
