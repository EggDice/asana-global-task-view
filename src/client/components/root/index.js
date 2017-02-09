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
        <div className="app__container">
          <h1 className="app__title">Asana Global View</h1>
          <div className="app__content">
            <main className="tasks">
              {sections.map(section =>
                <section key={section} className="section">
                  <h2 className="section__title">{section}</h2>
                  <ol>
                    {(bySections[section]||[]).map(task => <li className={"section__task" + (task.name[task.name.length - 1] === ':' ? ' heading' : '')} key={task.id}>{task.name}</li>)}
                  </ol>
                </section>
              )}
            </main>
            <aside className="tags"></aside>
          </div>
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
