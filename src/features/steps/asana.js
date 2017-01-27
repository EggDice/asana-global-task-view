'use strict'

import {assert} from 'chai'

export default function() {
  this.Given('asana with users', function(userList, cb) {  
    const asana = this.container.get('asanaService')
    userList.hashes().forEach(asana.addUser)
    cb()
  })

  this.Given('an asana user "$userId" with workspaces', function(userId, workspaceList, cb) {
    const asana = this.container.get('asanaService')
    workspaceList.hashes().forEach((ws) => asana.addWorkspace(userId, ws))
    cb()
  })

  this.Given('a logged in asana user with id: "$id"', function(id) {
    const asana = this.container.get('asanaService')
    asana.logInUser(id)
    
  })

  this.Given('asana tasks', function(taskList, cb) {
    const asana = this.container.get('asanaService')
    taskList.hashes().forEach(asana.addTask)
    cb()
  })
}

