/*!
 * @license Chopper.js v1.3.0
 * (c) 2014 sugarshin https://github.com/sugarshin
 * License: MIT
 */
(function() {
  var namespace,
    __hasProp = {}.hasOwnProperty;

  namespace = window;

  namespace.Chopper = (function() {
    var newURL, oldURL, _extend, _hash, _init, _timer;

    _extend = function(out) {
      var i, key, val, _i, _ref, _ref1;
      out || (out = {});
      for (i = _i = 1, _ref = arguments.length; 1 <= _ref ? _i < _ref : _i > _ref; i = 1 <= _ref ? ++_i : --_i) {
        if (!arguments[i]) {
          continue;
        }
        _ref1 = arguments[i];
        for (key in _ref1) {
          if (!__hasProp.call(_ref1, key)) continue;
          val = _ref1[key];
          out[key] = arguments[i][key];
        }
      }
      return out;
    };

    newURL = null;

    oldURL = null;

    _timer = null;

    _hash = null;

    _init = function() {
      _hash = location.hash;
      oldURL = location.href;
      return this.options.onInit() != null;
    };

    Chopper.prototype.defaults = {
      onInit: function() {},
      onChange: function() {},
      interval: 100
    };

    function Chopper(options) {
      this.options = _extend({}, this.defaults, options);
      _init.call(this);
    }

    Chopper.prototype.on = function(callback) {
      var cb, h;
      h = location.hash;
      cb = callback != null ? callback : this.options.onChange;
      if (_hash !== h) {
        newURL = location.href;
        if (typeof cb === "function") {
          cb(h, newURL, oldURL);
        }
      }
      _hash = h;
      oldURL = location.href;
      _timer = setTimeout((function(_this) {
        return function() {
          return _this.on(cb);
        };
      })(this), this.options.interval);
      return this;
    };

    Chopper.prototype.off = function(callback, hash) {
      clearTimeout(_timer);
      if (typeof callback === "function") {
        callback();
      }
      if (hash != null) {
        _hash = hash;
      }
      return this;
    };

    return Chopper;

  })();

}).call(this);
