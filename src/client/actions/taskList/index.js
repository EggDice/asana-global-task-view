'use strict'

export default function taskListActions(taskList) {
  const REQUEST_TASKS = 'REQUEST_TASKS'
  const RECEIVE_TASKS = 'RECEIVE_TASKS'

  const requestTasks = () => ({
    type: REQUEST_TASKS
  })

  const receiveTasks = tasks => ({
    type: RECEIVE_TASKS,
    tasks
  })

  const fetch = () => dispatch => {
    dispatch(requestTasks())
    taskList
      .getAllTaskOfLoggedInUser()
      .then(tasks => {dispatch(receiveTasks(tasks))})
  }

  return Object.freeze({
    REQUEST_TASKS,
    RECEIVE_TASKS,
    fetch
  })

}

taskListActions.deps = ['taskListService']
