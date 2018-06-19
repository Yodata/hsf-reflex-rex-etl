/**
 * @module App#router
 * @instance
 */
const EventRouter = require('@yodata/event-router')
const sendLeadToSalesForce = require('./sendLeadToSalesForce')

/** configure router */
const router = new EventRouter()

/** gets message<Notification>.object or message */
router.addHook('beforeRoute', async message => {
  return (message && message.type === 'Notification') ? message['object'] : message
})

/** log error if no matching handler was found  */
router.addHook('beforeAction', async event => {
  if (!router.hasRoute(event)) throw new Error(`EVENT_TYPE_UNMATCHED`)
  return event
})

router.addHook('afterAction', async result => {
  return sendLeadToSalesForce(result)
})

/** routes transform actions to SalesForce#Lead */
router.add({ type: 'AskAction' }, require('./handle/ask_action'))
router.add({ type: 'AddAction' }, require('./handle/add_action'))

module.exports = router
