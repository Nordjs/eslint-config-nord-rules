module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "indent": [
      2,
      2
    ],
    "quotes": [
      2,
      "single"
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "semi": [
      2,
      "always"
    ],
    "no-shadow"               : 0,
    "no-cond-assign"          : 2,
    "space-after-keywords"    : 2,
    "key-spacing"             : [2, {"align": "colon"}],
    "no-multiple-empty-lines" : [2, {"max": 2}],
    "wrap-iife"               : [2, "inside"],
    "brace-style"             : 2,
    "spaced-comment"          : [2, "always", {"exceptions":["-","+"]}],
    "space-before-blocks"     : 2,
    "no-implicit-coercion"    : 2,
    "no-useless-call"         : 2,
    "prefer-reflect"          : 2,
    // ES6+ Rules
    "arrow-spacing"           : [2, { "before": true, "after": true }],
    "constructor-super"       : 2,
    "no-class-assign"         : 2,
    "no-const-assign"         : 2,
    "no-invalid-this"         : 2,
    "no-this-before-super"    : 2,
    "no-var"                  : 2,
    "object-shorthand"        : 2,
    "prefer-const"            : 2,
    "prefer-spread"           : 2
  },
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended"
};
