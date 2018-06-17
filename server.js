const log = require('debug')('hsf-reflex-rex-etl:success!')
const logError = require('debug')('hsf-reflex-rex-etl:error')
const app = require('./app')

app.on('message:process:completed', event => {
  log('IT WORKED!!!', event.result)
})

app.on('message:process:failed', event => {
  let get = require('lodash.get')
  let message = get(event, 'message')
  let actionType = get(event, 'object.object.type')
  logError(message, actionType)
})

app.start()
