###!
Chopper.js
Hashchange event polyfill
License MIT
###
class window.Chopper

  # Helper -----------------------------

  _extend = (out) ->
    out = out or {}

    for i in [1...arguments.length]

      if not arguments[i]
        continue

      for key, val of arguments[i]
        if arguments[i].hasOwnProperty key
          out[key] = arguments[i][key]
    out

  _isFunc = (target) -> typeof target is 'function'

  # Helper -----------------------------


  # hashchange polyfill 
  newURL = null
  oldURL = null

  _timer = null
  _hash = null



  _init = ->
    _hash = location.hash
    oldURL = location.href

    if _isFunc @options.onInit
      @options.onInit()

    return



  # Default options
  defaults =
    onInit: ->
    onChange: ->
    interval: 100



  constructor: (options) ->
    @options = _extend {}, defaults, options

    _init.call @



  on: (callback) ->
    h = location.hash

    cb = if callback? then callback else @options.onChange

    if _hash isnt h and _isFunc cb
      newURL = location.href
      cb h, newURL, oldURL

    _hash = h
    oldURL = location.href

    _this = @
    _timer = setTimeout(->
      _this.on cb
      return
    , @options.interval)
    return @

  off: (callback, hash) ->
    clearTimeout _timer
    if callback? and _isFunc callback
      callback()

    if hash? then _hash = hash
    return @
