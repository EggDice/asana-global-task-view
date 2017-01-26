'use strict'

import labDi from 'lab-di'
import config from 'lab-config'
import configMemory from 'lab-config/implementations/memory'
import app from './app'
import store from './store'
import root from './components/root'

const di = labDi()
di.registerModule(config, 'config')
di.registerModule(configMemory, 'config-memory')
di.registerModule(app, 'App')
di.registerModule(store, 'Store')
di.registerModule(root, 'Root')

module.exports = di
