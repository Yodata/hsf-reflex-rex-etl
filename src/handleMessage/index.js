const EventRouter = require('@yodata/event-router')
const router = new EventRouter()

router.registerRoute({ type: 'AskAction' }, require('./askaction'))
router.registerRoute('*', async function (event) {
  router.emit('error:unhandled-eventtype', event['type'])
})

module.exports = router.next
