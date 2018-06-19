/**
 * sends data to the /LeadNotification/ topic in salesforce
 * @module sendLeadToSalesForce
 */
const sf = require('jsforce')
const username = process.env.SALESFORCE_USERNAME
const password = process.env.SALESFORCE_PASSWORD
const loginUrl = process.env.SALESFORCE_LOGIN_URL
const log = require('debug')('hsf-reflex-rex-etl:sendSalesForceLead')
const topic = '/LeadNotification/'

const conn = new sf.Connection({loginUrl})

/**
 * sends a lead to salesforce
 * @param {Object<SalesForce#Lead>} lead
 */
module.exports = async lead => {
  return new Promise((resolve, reject) => {
    conn.login(username, password, (err) => {
      if (err) {
        log(`login error: ${err.message}`, err)
        reject(err)
      } else {
        conn.apex.post(topic, {lead}, (err, res) => {
          if (err) {
            log(`conn.apex.post error: ${err.message}`)
            reject(err)
          } else {
            resolve(lead)
          }
        })
      }
    })
  })
}
