const Service = require('yodata-inbox-poller')
const inboxURL = process.env.YODATA_INBOX_URL || 'https://hsf.ds.bhhsresource.com/inbox/'
const handleMessage = require('./handleMessage')
const debug = require('debug')('REX')

const app = Service.create(inboxURL, handleMessage)

function log (type, props) {
  debug(`hsf:${type}: `)('%j', props)
}

app.on('dispatch', event => {
  switch (event.type) {
    case MESSAGE_PROCESS_COMPLETED:
      log(event.type, event)
      break
    case MESSAGE_PROCESS_FAILED:
      log(event.type, event.result)
      break
    case 'service:wait':
      log(event.type, `${event.waitTime} ms`)
      break
    default:
      log(event.type)
  }
})

app.start()
