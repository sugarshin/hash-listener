# Chopper.js

Hashchange event Polyfill

IE7+ and other minor browser

## Demo

[https://tsumikiinc.github.io/chopper.js/demo/](https://tsumikiinc.github.io/chopper.js/demo/)


## Usage

```js
var chopper = new Chopper();

chopper.on(function(hash, newURL, oldURL) {});
```

**Dispatched hashchange event has the following fields polyfill**

* `newURL`

New URL to which the window is navigating

* `oldURL`

Previous URL from which the window was navigated

**Set when create an instance**

```js
var chopper = new Chopper({
  onInit: function() {},
  onChange: function(hash, newURL, oldURL) {},
  interval: 100
});

chopper.on();
```

## api

### `.on( [callback] )`

Add event listener

### `.off( [callback] [, hash] )`

Remove event listener

## Contributing

This library was developed with following things

[gulp](http://gulpjs.com/)

[CoffeeScript](http://coffeescript.org/)

```shell
npm i
```

## License

MIT

© Tsumiki inc.

© sugarshin