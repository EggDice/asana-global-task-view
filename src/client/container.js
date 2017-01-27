'use strict'

import labDi from 'lab-di'
import config from 'lab-config'
import configMemory from 'lab-config/implementations/memory'
import asana from '../external/asana'
import asanaExternal from '../external/asana/implementations/external'
import asanaMemory from '../external/asana/implementations/memory'
import task from '../internal/tasksList'
import app from './app'
import store from './store'
import root from './components/root'
import taskList from './actions/taskList'

const di = labDi()
di.registerModule(config, 'config')
di.registerModule(configMemory, 'config-memory')
di.registerModule(asana, 'asanaService')
di.registerModule(asanaExternal, 'asanaService-external')
di.registerModule(asanaMemory, 'asanaService-memory')
di.registerModule(task, 'taskListService')
di.registerModule(taskList, 'taskList')
di.registerModule(app, 'App')
di.registerModule(store, 'Store')
di.registerModule(root, 'Root')

module.exports = di
