namespace = window

class namespace.Chopper

  # Helper -----------------------------
  _extend = (out) ->
    out or= {}
    for i in [1...arguments.length]
      unless arguments[i] then continue
      for own key, val of arguments[i]
        out[key] = arguments[i][key]
    return out
  # Helper -----------------------------

  # hashchange polyfill 
  newURL = null
  oldURL = null

  _timer = null
  _hash = null



  _init = ->
    _hash = location.hash
    oldURL = location.href
    @options.onInit()?



  defaults:
    onInit: ->
    onChange: ->
    interval: 100

  constructor: (options) ->
    @options = _extend {}, @defaults, options
    _init.call @

  on: (callback) ->
    h = location.hash

    cb = if callback? then callback else @options.onChange

    if _hash isnt h
      newURL = location.href
      cb? h, newURL, oldURL

    _hash = h
    oldURL = location.href

    _timer = setTimeout =>
      @on cb
    , @options.interval
    return this

  off: (callback, hash) ->
    clearTimeout _timer
    callback?()
    if hash? then _hash = hash
    return this
