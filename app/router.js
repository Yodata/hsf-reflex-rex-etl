/**
 * @module App#router
 * @instance
 */
const EventRouter = require('@yodata/event-router')

/** configure router */
const router = new EventRouter()

/**
 * If message.type === Notification ; returns the message.object the primary event
 * @param {object} message
 * @return {object} Notification.object
 * @example
 * let notification = { type: Notification, object: { type: AskAction, ... } }
 * let result = getEventFromNotification(notification)
 * // result = { type: AskAction, ... }
 */
router.addHook('beforeRoute', message => {
  return (message && message.type === 'Notification') ? message['object'] : message
})

/**  */
router.addHook('beforeAction', async message => {
  if (!router.hasRoute(message)) throw new Error(`EVENT_TYPE_UNMATCHED`)
  return message
})

/** adds a route handler for events that with type: AskAction */
router.add({ type: 'AskAction' }, require('./handler/ask_action'))
router.add({ type: 'AddAction' }, require('./handler/add_action'))

module.exports = router
