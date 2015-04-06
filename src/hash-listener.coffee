###!
 * @license hash-listener
 * (c) sugarshin
 * License: MIT
###

"use strict"

module.exports =
class HashListener

  # hashchange polyfill
  newURL = null
  oldURL = null

  # private
  _timer = null
  _hash = null

  _extend: (out) ->
    out or= {}
    for i in [1...arguments.length]
      unless arguments[i] then continue
      for own key, val of arguments[i]
        out[key] = arguments[i][key]
    return out

  _defaults:
    onInit: (hash) ->
    onChange: (hash, newURL, oldURL) ->
    interval: 100

  _configure: (opts) ->
    @opts = @_extend {}, @_defaults, opts
    _hash = location.hash
    oldURL = location.href

  constructor: (opts) ->
    @_configure opts
    @opts.onInit? _hash

  start: (callback) ->
    h = location.hash
    cb = if callback? then callback else @opts.onChange

    if _hash isnt h
      newURL = location.href
      cb? h, newURL, oldURL

    _hash = h
    oldURL = location.href

    _timer = setTimeout =>
      @start cb
    , @opts.interval
    return this

  stop: (callback, hash) ->
    clearTimeout _timer
    callback?()
    if hash? then _hash = hash
    return this
