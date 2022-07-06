import generateRuleTests from 'ember-template-lint/lib/helpers/rule-test-harness';
import PluginRules from '../../index';

export default function (options) {
  return generateRuleTests({
    ...options,
    plugins: [PluginRules],
    groupMethodBefore: beforeEach,
    groupingMethod: describe,
    testMethod: test,
  });
}
