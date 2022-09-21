# `@movable/template-lint-plugin`

[![CI](https://github.com/movableink/template-lint-plugin/actions/workflows/ci.yml/badge.svg)](https://github.com/movableink/template-lint-plugin/actions/workflows/ci.yml)

This is a collection of custom [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) rules written for and used at [Movable Ink](https://github.com/movableink).

## Rules

| Name                                                                             | Description                                                                 |
| :------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| [`no-expression-like-strings`](./docs/rules/no-expression-like-strings.md)       | Catch strings that you probably meant to be Handlebars expressions          |
| [`no-forbidden-elements`][no-forbidden-elements-docs]                            | Catch `<b>, <i>` that you probably meant to be `<strong>, <em>` expressions |
| [`require-purgeable-class-names`](./docs/rules/require-purgeable-class-names.md) | Require class names are written such that they can be detected by PurgeCSS  |

## Configurations

The following sets of rules are available for your `ember-template-lint` configuration to extend from:

| Name                        | Description                                                            |
| :-------------------------- | :--------------------------------------------------------------------- |
| `avoid-possible-typos`      | Rules meant to catch possible typos in your templates                  |
| `avoid-deprecated-elements` | Rules meant to catch `<b>` and `<i>` tags, use `<strong>` and `<em>`   |
| `svg-aria-required`         | Rules meant to catch svgs without an `aria-label` or `aria-labelledby` |
| `base`                      | The base set of rules used across all Movable Ink projects             |

## Usage

Start with installing this package into your Ember application

```sh
yarn add -D @movable/template-lint-plugin
```

Then, include the plugin in your `.template-lintrc.js`

```javascript
// .template-lintrc.js

module.exports = {
  plugins: ['@movable/template-lint-plugin'],

  extends: [
    // You can extend a whole set of rules
    '@movable/template-lint-plugin:avoid-possible-typos',
    '@movable/template-lint-plugin:avoid-deprecated-elements',
    '@movable/template-lint-plugin:svg-aria-required',
  ],

  rules: [
    // ... Or just the ones you want
    ('no-expression-like-strings': true),
  ],
};
```

[no-forbidden-elements-docs]: https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-forbidden-elements.md#no-forbidden-elements
