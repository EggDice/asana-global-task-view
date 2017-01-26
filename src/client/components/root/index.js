'use strict'

import React from 'react'
import {connect} from 'react-redux'

function Component() {
  class Root extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div>
          Hello!
        </div>
      )
    }
  }
  const mapStateToProps = state => {
    return {
      dummy: state.dummy
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      something: () => {
        dispatch()
      }
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(Root)
}

Component.deps = []
module.exports = Component
