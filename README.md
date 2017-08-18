# stylelint-max-selectors

A [stylelint](https://github.com/stylelint/stylelint) plugin that enforces maximum selector count for a stylesheet.
Useful if you need to support old IE (<IE10) which has a [limit of 4095 selectors](https://blogs.msdn.microsoft.com/ieinternals/2011/05/14/stylesheet-limits-in-internet-explorer/)
or just for performance reasons.

## Installation

```sh
npm install stylelint-max-selectors
```

## Usage

Add it to your stylelint config `plugins` array, then add `"plugin/max-selectors"` to your rules.

Like so:

```js
// .stylelintrc
{
  "plugins": [
    "stylelint-max-selectors"
  ],
  "rules": {
    // ...
    "plugin/max-selectors": 4095,
    // ...
  }
}
```

## Options

`int`: Maximum number of selectors allowed.

For example the following stylesheet has 2 selectors:

```css
.foo, .bar {
  color: red
}
```