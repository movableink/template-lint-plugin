# `require-purgeable-class-names`

This lint rules helps ensure that CSS classes are not concatenated dynamically at run-time. Doing so prevents the classes from being detected by [PurgeCSS](https://purgecss.com). Writing purgeable class names is important, as it allows for the automatic removal of unused classes provided by a utility library. This pattern has become especially popular due to the widespread adopting of Tailwind CSS.

## Examples

### Forbidden

```hbs
<div class="text-white bg-{{color}}"></div>
```

### Allowed

```hbs
<div class="text-white {{if @error "bg-red" "bg-black"}}"></div>
```

## When Not To Use This

If it is impossible to know the full set of required class names in your application ahead of time, you'll want to disable this rule.
