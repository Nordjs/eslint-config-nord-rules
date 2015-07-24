# Nord.js eslint rules

*Requires eslint >= 1.0.0-rc-2*

A sharable .eslintrc file that is used by the Nord.js project and meant for a clean
codebase with the help of es6 and some es7+ features.

## Usage

`npm i eslint@next babel-eslint eslint-config-nord-rules --save-dev`

Create your `.eslintrc` as follows:

```json
{
  "extends": "nord-rules"
}
```

or if you prefer YAML:

```yml
extends: "nord-rules"
```

If you want to add some more rules or disagree with some you can either extend your local `.eslintrc` or feel free to submit a Ticket/PR.
