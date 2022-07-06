import { Rule } from 'ember-template-lint';
export const ERROR_MESSAGE = 'Found likely HandleBars expression';

export default class NoExpressionLikeStrings extends Rule {
  visitor() {
    return {
      TextNode(node) {
        const content = node.chars.trim();

        if (content.startsWith('{') && content.endsWith('}')) {
          this.log({
            message: ERROR_MESSAGE,
            line: node.loc && node.loc.start.line,
            column: node.loc && node.loc.start.column,
            source: this.sourceForNode(node),
          });
        }
      },
    };
  }
}
