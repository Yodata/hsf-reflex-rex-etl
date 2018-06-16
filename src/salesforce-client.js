const sf = require('jsforce')
const username = process.env.SALESFORCE_USERNAME
const password = process.env.SALESFORCE_PASSWORD
const loginUrl = process.env.SALESFORCE_LOGIN_URL
const debug = require('debug')('rex:salesforce-client')

const conn = new sf.Connection({loginUrl})
const postMessage = topic => message => {
  return new Promise((resolve, reject) => {
    conn.login(username, password, (err) => {
      if (err) {
        debug('error:login', err)
        reject(err)
      } else {
        conn.apex.post(topic, message, (err, res) => {
          if (err) {
            debug('error:postMessage', err)
            reject(err)
          } else {
            debug('postMessage', {topic, message})
            resolve(res)
          }
        })
      }
    })
  })
}

module.exports = {
  postMessage: postMessage,
  sendLead: postMessage('/LeadNotification/')
}
