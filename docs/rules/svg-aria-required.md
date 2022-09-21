# `svg-aria-required`

This lint rule helps catch missing attributes `aria-label` or `arial-labelby` SVG-Jar template helper when using `title` attribute displays a tooltip, we don't actually want this to happen 90% of the time.

If you happen to accidentally put something like this in your template:

```handlebars
{{svg-jar 'icon-happy'}}
```

Or this:

```handlebars
{{svg-jar 'icon-happy' title='icon-happy'}}
```

You _probably_ wanted to actually write this instead:

```handlebars
{{svg-jar 'icon-happy' aria-label='indicates happiess'}}
```

## When Not To Use This

If you are actually trying use browser title attributes to generate a tooltip use both

```handlebars
{{svg-jar 'icon-happy' title='indicates happiness' aria-label='indicates happiess'}}
```
