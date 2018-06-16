const EventRouter = require('@yodata/event-router')
const router = new EventRouter()

router.registerRoute({ type: 'AskAction' }, require('./askaction'))

module.exports = event => router.next(event)
