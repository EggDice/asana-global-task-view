'use strict'

const ACCESS_TOKEN = global.localStorage && localStorage.ACCESS_TOKEN

import asana from 'asana'

const client = asana.Client.create().useAccessToken(ACCESS_TOKEN)

const CUSTOM_FIELDS = [
  'id',
  'name',
  'assignee_status',
  'completed',
  'due_at',
  'workspace',
  'memberships',
  'tags'
].join(',')

module.exports = () => {
  function getUserInfo() {
    return client.users.me()
  }

  async function getAllTasksByWorkspace({assigneeId, workspaceId}) {
    const collection = await client.tasks.findAll({
      assignee: assigneeId,
      workspace: workspaceId,
      completed_since: 'now',
      opt_fields: CUSTOM_FIELDS
    })
    return collection.fetch()
  }

  return Object.freeze({
    getUserInfo,
    getAllTasksByWorkspace,
    addUser: () => {},
    addWorkspace: () => {},
    addTask: () => {},
    logInUser: () => {}
  })
}

