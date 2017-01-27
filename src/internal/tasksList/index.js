'use strict'

function taskList(asana) {
  async function getAllTaskOfLoggedInUser() {
    const user = await asana.getUserInfo()    
    const fetchWorkspace = workspace => asana.getAllTasksByWorkspace({
      assigneeId: user.id,
      workspaceId: workspace.id
    })
    const tasksByWorkspaces = await Promise.all(user.workspaces.map(fetchWorkspace))
    return tasksByWorkspaces.reduce((all, list) => all.concat(list))
  }

  return Object.freeze({
    getAllTaskOfLoggedInUser
  })
} 

taskList.deps = 'asanaService'
module.exports = taskList
