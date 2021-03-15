'use strict';

const { Rule } = require('ember-template-lint');

const DOES_NOT_END_IN_WHITESPACE_REGEX = /(\S)$/;

const ERROR_MESSAGE =
  'CSS class names should not be created through concatentation, since they cannot be detected for purging. Dynamically select between full class names instead.';

function isClassAttribute(node) {
  return node.name === 'class' || node.name === '@className' || node.name === '@classNames';
}

function isConcatStatement(node) {
  return node.type === 'ConcatStatement';
}

function isInvalidMustachePrefix(classString) {
  return DOES_NOT_END_IN_WHITESPACE_REGEX.test(classString);
}

module.exports = class RequirePurgeableClassNames extends Rule {
  visitor() {
    return {
      AttrNode(node) {
        if (isClassAttribute(node) && isConcatStatement(node.value)) {
          for (const part of node.value.parts) {
            // Skip processing this "part" if we're not looking at a dynamic segment
            if (part.type !== 'MustacheStatement') {
              continue;
            }

            const currentPartIndex = node.value.parts.indexOf(part);
            const previousPart = node.value.parts[currentPartIndex - 1];

            // This dynamic segment can't be part of a concatentated class if there is no previous "part"
            if (!previousPart) {
              continue;
            }

            // If the previous "text" part doesn't end with whitespace, then the mustache statement is being used
            // to dynamically concatenate a class name
            if (isInvalidMustachePrefix(previousPart.chars)) {
              const classList = previousPart.chars.split(/\s/);
              const lastClassString = classList[classList.length - 1];

              this.log({
                message: ERROR_MESSAGE,
                line: part.loc && part.loc.start.line,
                column: part.loc && part.loc.start.column - lastClassString.length,
                source: lastClassString + this.sourceForNode(part),
              });
            }
          }
        }
      },
    };
  }
};

module.exports.ERROR_MESSAGE = ERROR_MESSAGE;
