/**
 * Receives an AskAction and returns the asker (AskAction#agent) as a SalesForce#Lead
 * @module handle/askAction
 */
const get = require('jmespath').search
const uriToHsfId = require('./uri_to_hsfid')
/**
 * @param {object<AskAction>} action - expects a schema:AskAction
 * @returns {object<SalesForce#Lead>}
 */
module.exports = askAction => ({
  HSFId: uriToHsfId(askAction['recipient']['@id']),
  FirstName: get(askAction, 'agent.givenName'),
  LastName: get(askAction, 'agent.familyName'),
  Phone: get(askAction, 'agent.telephone'),
  Message: get(askAction, 'description')
})
