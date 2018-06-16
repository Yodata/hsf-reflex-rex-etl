require('dotenv').config()
const Service = require('yodata-inbox-poller')
const handleMessage = require('./src/handleMessage')
const debug = require('debug')('rex')

const app = Service.create(process.env.YODATA_INBOX_URL, handleMessage)

app.on('message:process:completed', event => {
  debug('success', event)
})

app.on('message:process:failed', event => {
  debug('error', event)
})

app.start()
