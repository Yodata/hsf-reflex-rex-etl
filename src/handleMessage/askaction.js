const sf = require('../salesforce-client')
const debug = require('debug')('rex:ask-action')
const getProp = require('lodash.get')

module.exports = async function (event) {
  var leadNotification = {
    lead: {
      HSFId: getProp(event, 'object.recipient.identifier.thirdPartyID'),
      FirstName: getProp(event, 'object.agent.givenName'),
      LastName: getProp(event, 'object.agent.familyName'),
      EmailAddress: getProp(event, 'object.agent.email'),
      Phone: getProp(event, 'object.agent.telephone'),
      Message: getProp(event, 'object.description') }
  }
  return sf.sendLead(leadNotification)
    .then(res => debug('success', res))
    .catch(err => debug('error', err))
}
