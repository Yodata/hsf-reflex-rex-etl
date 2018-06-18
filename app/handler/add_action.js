/**
 * @module handleAddAction
 */
const get = require('lodash.get')
const sendLeadToSalesForce = require('../sendLeadToSalesForce')

/**
 * Receives an AskAction and returns the asker (AskAction#agent) as a SalesForce#Lead
 * @exports handleAskAction
 * @param {object<AskAction>} action - expects a schema:AskAction
 * @returns {object<SalesForce#Lead>}
 */
module.exports = async addAction => {
  const lead = {
    HSFId: get(addAction, 'recipient.0.id', ''),
    FirstName: get(addAction, 'contact.givenName', ''),
    LastName: get(addAction, 'contact.familyName', ''),
    Phone: get(addAction, 'contact.contactPoint.0.telephone', ''),
    Message: get(addAction, 'contact.comment.0.value', '')
  }
  console.dir(lead)
  return lead
}
