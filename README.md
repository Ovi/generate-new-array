[![Npm package version](https://badgen.net/npm/v/generate-new-array)](https://npmjs.com/package/generate-new-array)

# generate-new-array

JavaScript library to generate new array of a given size with optional custom value

```js
const array = require('generate-new-array');

array(5);
// > [ 0, 1, 2, 3, 4 ]

array(2, 'Hi');
// > [ 'Hi', 'Hi' ]

array();
// > []
```

## License

MIT
