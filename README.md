# hash-listener

[![Build Status](https://travis-ci.org/sugarshin/hash-listener.svg?branch=master)](https://travis-ci.org/sugarshin/hash-listener) [![GitHub version](https://badge.fury.io/gh/sugarshin%2Fhash-listener.svg)](http://badge.fury.io/gh/sugarshin%2Fhash-listener) [![License](http://img.shields.io/:license-mit-blue.svg)](http://sugarshin.mit-license.org/)

HashListener

```shell
npm i sugarshin/hash-listener
```

## usage

```coffeescript
HashListener = require 'hash-listener'

hl = new HashListener
hl.start (hash, newURL, oldURL) ->
```

or

```html
<script src="hash-listener.js"></script>
<script>
  var hl = new HashListener;
  hl.start(function(hash, newURL, oldURL) {});
</script>
```

**Set when create an instance**

```coffeescript
hl = new HashListener
  onInit: (hash) ->
  onChange: (hash, newURL, oldURL) ->
  interval: 100

hl.start()
```

## api

### `.start( [callback] )`

Add event listener

### `.stop( [callback] [, hash] )`

Remove event listener

## Contributing

[CoffeeScript](//coffeescript.org/)

[mocha-phantomjs](//github.com/metaskills/mocha-phantomjs)

[power-assert](//github.com/twada/power-assert)

```shell
npm test
```

## License

[MIT](http://sugarshin.mit-license.org/)

© sugarshin
