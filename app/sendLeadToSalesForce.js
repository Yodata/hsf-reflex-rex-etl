const sf = require('jsforce')
const username = process.env.SALESFORCE_USERNAME
const password = process.env.SALESFORCE_PASSWORD
const loginUrl = process.env.SALESFORCE_LOGIN_URL
const log = require('debug')('hsf-reflex-rex-etl')

const conn = new sf.Connection({loginUrl})
const sendLead = topic => async lead => {
  return new Promise((resolve, reject) => {
    conn.login(username, password, (err) => {
      if (err) {
        log('salesforce login error', err)
        reject(err)
      } else {
        conn.apex.post(topic, {lead}, (err, res) => {
          if (err) {
            log('salesforce postMessge error', err)
            reject(err)
          } else {
            log(`salesforce postMessage:${topic}`, lead)
            resolve(lead)
          }
        })
      }
    })
  })
}

module.exports = sendLead('/LeadNotification/')
