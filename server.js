/**
 * @file configure service and logging
 */
const log = require('debug')('hsf-reflex-rex-etl:success!')
const logError = require('debug')('hsf-reflex-rex-etl:error')
const app = require('./app')

/**
 * Fires when a message has been successfully processed
 * @event App#message:process:completed
 */
app.on('message:process:completed', event => {
  log('IT WORKED!!!', event.result)
})

/**
 * Fires when message processing fails
 * @event App#message:process:failed
 */
app.on('message:process:failed', event => {
  let get = require('lodash.get')
  let message = get(event, 'message', 'message:process:failed')
  let actionType = get(event, 'object.object.type', 'event type unknown')
  logError(message, actionType)
})

app.start()
