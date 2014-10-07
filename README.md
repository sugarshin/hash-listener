# Chopper.js

Hashchange event Polyfill

IE7+ and other minor browser

## Demo

[https://tsumikiinc.github.io/chopper.js/demo/](https://tsumikiinc.github.io/chopper.js/demo/)


## Usage

```js
var chopper = new Chopper({
  onInit: function() {},

  onChange: function(hash) {},

  interval: 100
});

chopper.start();
```

## Contributing

Using gulp

```shell
npm i
```

## License

MIT

© Tsumiki inc.

© sugarshin