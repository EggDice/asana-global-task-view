'use strict'

import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

function Component(taskList) {
  class Root extends React.Component {
    componentDidMount() {
      this.props.fetch()
    }
    
    render() {
      const bySections = _.groupBy(this.props.taskList.tasks, 'assignee_status')
      const sections = ['inbox', 'today', 'upcoming']
      return (
        <div>
          <h1>Tasks</h1>
          {sections.map(section =>
            <section key={section}>
              <h2>{section}</h2>
              <ul>
                {(bySections[section]||[]).map(task => <li key={task.id}>{task.name}</li>)}
              </ul>
            </section>
          )}
        </div>
      )
    }
  }
  const mapStateToProps = state => {
    return {
      taskList: state.taskList
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      fetch: () => {
        dispatch(taskList.fetch())
      }
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(Root)
}

Component.deps = ['taskList']
module.exports = Component
