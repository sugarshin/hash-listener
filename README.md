# hash-listener

[![Build Status](https://travis-ci.org/sugarshin/hash-listener.svg?branch=master)](https://travis-ci.org/sugarshin/hash-listener) [![GitHub version](https://badge.fury.io/gh/sugarshin%2Fhash-listener.svg)](http://badge.fury.io/gh/sugarshin%2Fhash-listener) [![License](http://img.shields.io/:license-mit-blue.svg)](http://sugarshin.mit-license.org/)

HashListener

substitutes for [hashchange event](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange)

```shell
npm i hash-listener
```

## usage

```coffeescript
HashListener = require 'hash-listener'

hl = new HashListener
hl.start (hash, newURL, oldURL) ->
```

or

```html
<script src="build/hash-listener.js"></script>
<script>
  var hl = new HashListener;
  hl.start(function(hash, newURL, oldURL) {});
</script>
```

### set when create an instance

```coffeescript
hl = new HashListener
  onInit: (hash) ->
  onChange: (hash, newURL, oldURL) ->
  interval: 100

hl.start()
```

## api

### `.start( [callback] )`

Start listening

### `.stop( [callback] [, hash] )`

Stop listening

## contributing

**Incomplete** **WIP**

```shell
npm test
```

## license

[MIT](http://sugarshin.mit-license.org/)

© sugarshin
