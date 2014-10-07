
/*!
Chopper.js
Hash change event polyfill
License MIT
 */

(function() {
  var Chopper;

  Chopper = (function() {
    var defaults, _extend, _isFunc;

    _extend = function(out) {
      var i, key, val, _i, _ref, _ref1;
      out = out || {};
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

    _isFunc = function(target) {
      return typeof target === 'function';
    };

    defaults = {
      onInit: null,
      onChange: null,
      interval: 100
    };

    function Chopper(options) {
      this.options = _extend({}, defaults, options);
      this._init();
    }

    Chopper.prototype.timer = null;

    Chopper.prototype.hash = null;

    Chopper.prototype._init = function() {
      this.hash = location.hash;
      if (_isFunc(this.options.onInit)) {
        this.options.onInit();
      }
    };

    Chopper.prototype.start = function(hash) {
      var h, _this;
      h = hash ? hash : location.hash;
      if (this.hash !== h && _isFunc(this.options.onChange)) {
        this.options.onChange(h);
      }
      this.hash = h;
      _this = this;
      this.timer = setTimeout(function() {
        _this.start();
      }, this.options.interval);
      return this;
    };

    Chopper.prototype.stop = function(hash) {
      clearTimeout(this.timer);
      if (hash != null) {
        this.hash = hash;
      }
      return this;
    };

    return Chopper;

  })();

  window.Chopper = window.Chopper || Chopper;

}).call(this);
