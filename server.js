/**
 * @file configure service and logging
 */
const log = require('debug')('hsf-reflex-rex-etl:sent-to-salesforce')
const logError = require('debug')('hsf-reflex-rex-etl:error')
const app = require('./app')

/**
 * Fires when a message has been successfully processed
 * @event App#message:process:completed - message has been processed
 */
app.on('message:process:completed', event => {
  log(event.result)
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
  if (event.message === 'EVENT_TYPE_UNMATCHED') {
    logError(`EVENT_TYPE_UNHANDLED: ${event.object.object.type}`)
  } else {
    logError(event)
  }
})

app.start()
