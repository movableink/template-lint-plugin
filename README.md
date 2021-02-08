# `@movable/template-lint-plugin`

[![Build Status](https://travis-ci.com/movableink/template-lint-plugin.svg?branch=master)](https://travis-ci.com/movableink/template-lint-plugin)

This is a collection of custom [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) rules written for and used at [Movable Ink](https://github.com/movableink).

## Rules

| Name                                                                       | Description                                                        |
| :------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| [`no-expression-like-strings`](./docs/rules/no-expression-like-strings.md) | Catch strings that you probably meant to be Handlebars expressions |
| [`no-forbidden-elements`](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-forbidden-elements.md#no-forbidden-elements) | Catch `<b>, <i>` that you probably meant to be `<strong>, <em>` expressions |

## Configurations

The following sets of rules are available for your `ember-template-lint` configuration to extend from:

| Name                   | Description                                                          |
| :--------------------- | :------------------------------------------------------------------- |
| `avoid-possible-typos` | Rules meant to catch possible typos in your templates                |
| `avoid-b-and-i-tags`   | Rules meant to catch `<b>` and `<i>` tags, use `<strong>` and `<em>` |
| `base`                 | The base set of rules used across all Movable Ink projects           |

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
    '@movable/template-lint-plugin:avoid-b-and-i-tags',
  ],

  rules: [
    // ... Or just the ones you want
    ('no-expression-like-strings': true),
  ],
};
```
