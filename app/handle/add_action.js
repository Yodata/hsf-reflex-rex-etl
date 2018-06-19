/**
 * @module handle/addAction
 */
const get = require('jmespath').search
const uriToHsfId = require('./uri_to_hsfid')
/**
 * Receives an AskAction and returns the asker (AskAction#agent) as a SalesForce#Lead
 * @param {object<AskAction>} action - expects a schema:AskAction
 * @returns {object<SalesForce#Lead>}
 */
module.exports = addAction => ({
  HSFId: uriToHsfId(get(addAction, 'recipient[:1].id | [0]')),
  FirstName: get(addAction, 'contact.givenName'),
  LastName: get(addAction, 'contact.familyName'),
  Phone: get(addAction, 'contact.contactPoint[:1].telephone | [0]'),
  Message: get(addAction, 'contact.comment[:1].value | [0]')
})
