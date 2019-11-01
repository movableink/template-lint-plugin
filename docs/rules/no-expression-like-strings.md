# `no-expression-like-strings`

This lint rule helps catch typos around Handlebars expressions that are missing the initial curly brace.

If you happen to accidentally put something like this in your template:

```handlebars
<FooBar @prop={value}} />
```

Or this:

```handlebars
<FooBar @prop={value} />
```

You _probably_ wanted to actually write this instead:

```handlebars
<FooBar @prop={{value}} />
```

Somewhat surprisingly, all three are valid, but the first two examples treat `{value}}` and `{value}` as strings, while the last is a Handlebars expression accessing the `value` variable within the current context.

## When Not To Use This

If you are actually trying to pass a string literal that starts with `{` and ends with `}`, then you should disable this rule for that line in your template.
