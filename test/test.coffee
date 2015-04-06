{ jsdom } = require 'jsdom'
global.document = jsdom '<html><body></body></html>'
global.window = document.defaultView
global.navigator = window.navigator
global.location = window.location

assert = require 'power-assert'
HashListener = require '../src/hash-listener.coffee'

describe '.start()', ->
  b = false

  beforeEach (done) ->
    location.hash = ''
    h = '#test'
    hl = new HashListener
      onChange: (hash, newURL, oldURL) ->
        if hash is h
          b = true
          done()
    hl.start()
    location.hash = h

  it '.start()', ->
    assert b
