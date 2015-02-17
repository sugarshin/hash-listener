// Generated by CoffeeScript 1.9.0
(function(root, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else {
    root.HashListener || (root.HashListener = factory());
  }
})(this, function() {
  "use strict";
  var HashListener;
  return HashListener = (function() {
    var newURL, oldURL, _hash, _timer;

    newURL = null;

    oldURL = null;

    _timer = null;

    _hash = null;

    HashListener.prototype._extend = function(out) {
      var i, key, val, _i, _ref, _ref1;
      out || (out = {});
      for (i = _i = 1, _ref = arguments.length; 1 <= _ref ? _i < _ref : _i > _ref; i = 1 <= _ref ? ++_i : --_i) {
        if (!arguments[i]) {
          continue;
        }
        _ref1 = arguments[i];
        for (key in _ref1) {
          val = _ref1[key];
          if (arguments[i].hasOwnProperty(key)) {
            out[key] = arguments[i][key];
          }
        }
      }
      return out;
    };

    HashListener.prototype._defaults = {
      onInit: function(hash) {},
      onChange: function(hash, newURL, oldURL) {},
      interval: 100
    };

    HashListener.prototype._configure = function(opts) {
      this.opts = this._extend({}, this._defaults, opts);
      _hash = location.hash;
      return oldURL = location.href;
    };

    function HashListener(opts) {
      var _base;
      this._configure(opts);
      if (typeof (_base = this.opts).onInit === "function") {
        _base.onInit(_hash);
      }
    }

    HashListener.prototype.start = function(callback) {
      var cb, h;
      h = location.hash;
      cb = callback != null ? callback : this.opts.onChange;
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
          return _this.start(cb);
        };
      })(this), this.opts.interval);
      return this;
    };

    HashListener.prototype.stop = function(callback, hash) {
      clearTimeout(_timer);
      if (typeof callback === "function") {
        callback();
      }
      if (hash != null) {
        _hash = hash;
      }
      return this;
    };

    return HashListener;

  })();
});