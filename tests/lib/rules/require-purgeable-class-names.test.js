import generateRuleTests from '../../helpers/rule-test-harness';
import { ERROR_MESSAGE } from '../../../lib/rules/require-purgeable-class-names';

generateRuleTests({
  name: 'require-purgeable-class-names',
  config: true,

  good: [
    `<div class="bg-red" />`,
    `<div class="bg-red {{color}}" />`,
    `<div
      class="
        bg-
        {{color}}
      "
      />`,
    `<div class="{{first}}{{second}}" />`,
    `<div some-other-attribute="bg-{{color}}" />`,
    `<MyComponent @className="bg-red" />`,
  ],

  bad: [
    {
      template: `<div class="bg-{{color}}" />`,
      result: {
        message: ERROR_MESSAGE,
        line: 1,
        column: 12,
        source: 'bg-{{color}}',
      },
    },
    {
      template: `<div class="bg-{{color}} text-{{color}}" />`,
      results: [
        {
          message: ERROR_MESSAGE,
          line: 1,
          column: 12,
          source: 'bg-{{color}}',
        },
        {
          message: ERROR_MESSAGE,
          line: 1,
          column: 25,
          source: 'text-{{color}}',
        },
      ],
    },
    {
      template: `
        <div
          class="
            bg-{{color}}
          "
        />
      `,
      result: {
        message: ERROR_MESSAGE,
        line: 4,
        column: 12,
        source: 'bg-{{color}}',
      },
    },
    {
      template: `<MyComponent @className="bg-{{color}}" />`,
      result: {
        message: ERROR_MESSAGE,
        line: 1,
        column: 25,
        source: 'bg-{{color}}',
      },
    },
  ],
});
