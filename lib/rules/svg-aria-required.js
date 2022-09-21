const { Rule } = require('ember-template-lint');

const ERROR_MESSAGE = 'an svg must have either an aria-label or aria-labelledby attribute';

module.exports = class SvgAriaRequired extends Rule {
  visitor() {
    return {
      MustacheStatement(node) {
        if (
          node.path.original === 'svg-jar' &&
          !node.hash.pairs.some((p) => ['aria-label', 'aria-labelledby'].includes(p.key))
        )
          this.log({ message: ERROR_MESSAGE, node });
      },
    };
  }
};

module.exports.ERROR_MESSAGE = ERROR_MESSAGE;
