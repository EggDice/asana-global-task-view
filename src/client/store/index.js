'use strict'

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

function Reducers() {
  const rootReducer = combineReducers({
    routing: routerReducer
  })

  return rootReducer
}

Reducers.type = 'factory'
module.exports = Reducers
