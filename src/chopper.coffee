###!
Chopper.js
Hash change event polyfill
License MIT
###
class Chopper

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



  defaults =
    onInit: null
    onChange: null
    interval: 100



  constructor: (options) ->
    @options = _extend {}, defaults, options

    @_init()

  timer: null
  hash: null

  _init: () ->
    @hash = location.hash
    if _isFunc @options.onInit
      @options.onInit()
    return

  start: (hash) ->
    h = if hash then hash else location.hash

    if @hash isnt h and _isFunc @options.onChange
      @options.onChange h

    @hash = h

    _this = @
    @timer = setTimeout(->
      _this.start()
      return
    , @options.interval)
    @

  stop: (hash) ->
    clearTimeout @timer

    if hash?
      @hash = hash
    @

# class Chopper ------------------------

window.Chopper = window.Chopper or Chopper
