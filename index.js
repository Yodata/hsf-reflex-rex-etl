require('dotenv').config()
const Service = require('yodata-inbox-poller')
const handleMessage = require('./handleMessage')
const debug = require('debug')

const app = Service.create(process.env.YODATA_INBOX_URL, handleMessage)

app.start()
