'use strict'

import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {Router, Route, createMemoryHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'

injectTapEventPlugin()

function App(Root, StoreService) {
  const memoryHistory = createMemoryHistory()
  const middleware = [ thunk, routerMiddleware(memoryHistory) ]
  const store = createStore(StoreService, applyMiddleware(...middleware))
  const history = syncHistoryWithStore(memoryHistory, store)
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Root}></Route>
      </Router>
    </Provider>
  )
}

App.deps = ['Root', 'Store']
module.exports = App
