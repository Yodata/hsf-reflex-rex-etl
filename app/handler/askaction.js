const sendLeadToSalesForce = require('../sendLeadToSalesForce')
const getProp = require('lodash.get')

module.exports = async function handleAskAction (event) {
  // todo: use yodata-context to create event transformers
  const lead = {
    HSFId: getProp(event, 'recipient.identifier.thirdPartyID'),
    FirstName: getProp(event, 'agent.givenName'),
    LastName: getProp(event, 'agent.familyName'),
    EmailAddress: getProp(event, 'agent.email'),
    Phone: getProp(event, 'agent.telephone'),
    Message: getProp(event, 'description')
  }
  return sendLeadToSalesForce(lead)
}
