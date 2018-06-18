/**
 * @file configure service and logging
 */
const log = require('debug')('hsf-reflex-rex-etl:success!')
const logError = require('debug')('hsf-reflex-rex-etl:error')
const app = require('./app')

/**
 * Fires when a message has been successfully processed
 * @event App#message:process:completed - message has been processed
 */
app.on('message:process:completed', event => {
  log('IT WORKED!!!', event.result)
})

/**
 * Fires when message processing fails
 * @event App#message:process:failed
 * @type {object}
 * @property {string} message - the error message
 * @property {Object} object - the message being processed type=Notification
 * @property {Object} result - the result response or error
 */
app.on('message:process:failed', event => {
  let get = require('lodash.get')
  let message = get(event, 'message', 'message:process:failed')
  let actionType = get(event, 'object.object.type', 'event type unknown')
  logError(message, actionType)
})

app.start()
