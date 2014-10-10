# Chopper.js

Hashchange event Polyfill

IE7+ and other minor browser

## Demo

[https://tsumikiinc.github.io/chopper.js/demo/](https://tsumikiinc.github.io/chopper.js/demo/)


## Usage

```js
chopper.changed(function(hash, newURL, oldURL) {});
```

Dispatched hashchange event has the following fields polyfill

* `newURL`

New URL to which the window is navigating

* `oldURL`

Previous URL from which the window was navigated

## api

### `.changed(callback)`

Hash watch start

### `.off( [hash] )`

Hash watch stop

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