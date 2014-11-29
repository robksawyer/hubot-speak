chai = require 'chai'
sinon = require 'sinon'
chai.use require 'sinon-chai'

expect = chai.expect

describe 'speak', ->
  beforeEach ->
    @robot =
      respond: sinon.spy()
      hear: sinon.spy()

    require('../src/speak')(@robot)

  it 'registers a respond listener', ->
    expect(@robot.hear).to.have.been.calledWith(/say something ([A-Z]||[a-z]*)?/i)
    expect(@robot.hear).to.have.been.calledWith(/say something stupid/i)