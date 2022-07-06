import generateRuleTests from '../../helpers/rule-test-harness';
import { ERROR_MESSAGE } from '../../../lib/rules/no-expression-like-strings';

generateRuleTests({
  name: 'no-expression-like-strings',
  config: true,

  good: ['{{value}}', '<FooBar @prop={{foobar}} />'],

  bad: [
    {
      template: '{value}}',
      result: {
        message: ERROR_MESSAGE,
        line: 1,
        column: 0,
        source: '{value}}',
      },
    },
    {
      template: '{value}',
      result: {
        message: ERROR_MESSAGE,
        line: 1,
        column: 0,
        source: '{value}',
      },
    },
    {
      template: '   {value}}   ',
      result: {
        message: ERROR_MESSAGE,
        line: 1,
        column: 0,
        source: '   {value}}   ',
      },
    },
    {
      template: '<FooBar @prop={foo}} />',
      result: {
        message: ERROR_MESSAGE,
        line: 1,
        column: 14,
        source: '{foo}}',
      },
    },
    {
      template: '<h1>{title}}</h1>',
      result: {
        message: ERROR_MESSAGE,
        line: 1,
        column: 4,
        source: '{title}}',
      },
    },
  ],
});
