'use strict'

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

export default function Reducers(container) {
  const taskList = container.get('taskList')

  const taskReducer = (state = {tasks: [], fetchStatus: 'default'}, action) => {
    switch (action.type) {
      case taskList.REQUEST_TASKS:
        return {
          ...state,
          fetchStatus: 'waiting'
        }
      case taskList.RECEIVE_TASKS:
        return {
          ...state,
          fetchStatus: 'finished',
          tasks: action.tasks
        }
      default:
        return state
    }
  }

  const rootReducer = combineReducers({
    taskList: taskReducer,
    routing: routerReducer
  })

  return rootReducer
}

Reducers.type = 'factory'
