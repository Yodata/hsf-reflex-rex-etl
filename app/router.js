const EventRouter = require('@yodata/event-router')

// configure router
const router = new EventRouter()

// message pre-processing
// event = Notification.object
router.addHook('beforeRoute', getEventFromNotification)
router.addHook('beforeAction', async message => {
  if (!router.hasRoute(message)) throw new Error(`EVENT_TYPE_UNMATCHED`)
  return message
})

// message handlers
router.add({ type: 'AskAction' }, require('./handler/askaction'))

module.exports = router

/**
 * If message.type === Notification ; returns the message.object the primary event
 * @param {object} message
 * @return {object} Notification.object
 */
function getEventFromNotification (message) {
  return (message && message.type === 'Notification') ? message['object'] : message
}
