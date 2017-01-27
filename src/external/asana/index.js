'use strict'

function Asana(container) {
  const implementation = container.get('config').get('asanaService') || 'external'
  return container.getImplementation('asanaService', implementation)
} 

Asana.type = 'factory'
module.exports = Asana
