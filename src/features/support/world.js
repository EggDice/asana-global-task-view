'use strict'

import register from 'ignore-styles'
register(['.scss'])
import "babel-polyfill"

import tools from './tools'

module.exports = function() {
  this.World = World
}

function World() {
  this.context = {}
  this.tools = tools
  this.container = require('../../client/container')
  this.server = require('../../server/container')
  extendContainer.call(this)
  setupConfig(this.container.get('config'))
}

function setupConfig(config) {
  config.update('asanaService','memory')
}

function extendContainer() {
  this.container.extend(this.server.default)
}
