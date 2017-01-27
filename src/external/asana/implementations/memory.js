'use strict'

module.exports = () => {
  const users = []
  const tasks = []

  function getUserInfo() {
    return users.find(u => u.isLoggedIn)
  }

  async function getAllTasksByWorkspace({assigneeId, workspaceId}) {
    const byWorkspaceAndUser =
      t => t.assigneeId == assigneeId && t.workspaceId == workspaceId
    return Promise.resolve(tasks.filter(byWorkspaceAndUser))
  }

  function addUser(user) {
    users.push({...user, isLoggedIn: false, workspaces: []})
  }

  function addTask(task) {
    tasks.push(task)
  }

  function logInUser(userId) {
    users.find(u => u.id == userId).isLoggedIn = true
  }

  function addWorkspace(userId, workspace) {
    users.find(u => u.id === userId).workspaces.push(workspace)
  }

  return Object.freeze({
    getUserInfo,
    getAllTasksByWorkspace,
    addUser,
    addWorkspace,
    addTask,
    logInUser
  })
}

