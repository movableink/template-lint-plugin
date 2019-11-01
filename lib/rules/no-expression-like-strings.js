'use strict';

const { Rule } = require('ember-template-lint');

const ERROR_MESSAGE = 'Found likely HandleBars expression';

module.exports = class NoExpressionLikeStrings extends Rule {
  visitor() {
    return {
      TextNode(node) {
        const content = node.chars.trim();

        if (content.startsWith('{') && content.endsWith('}')) {
          this.log({
            message: ERROR_MESSAGE,
            line: node.loc && node.loc.start.line,
            column: node.loc && node.loc.start.column,
            source: this.sourceForNode(node)
          });
        }
      }
    };
  }
};

module.exports.ERROR_MESSAGE = ERROR_MESSAGE;
