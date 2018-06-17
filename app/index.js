const Service = require('yodata-inbox-poller')
const router = require('./router')

const app = Service.create(process.env.YODATA_INBOX_URL, message => router.next(message))

module.exports = app
