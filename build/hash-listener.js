(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HashListener = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

/*!
 * @license hash-listener
 * (c) sugarshin
 * License: MIT
 */
"use strict";
var HashListener,
  __hasProp = {}.hasOwnProperty;

module.exports = HashListener = (function() {
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
        if (!__hasProp.call(_ref1, key)) continue;
        val = _ref1[key];
        out[key] = arguments[i][key];
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



},{}]},{},[1])(1)
});
