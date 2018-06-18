/**
 *
 * @typedef {Object} AskAction
 * @see https://schema.org/AskAction
 * @property {'AskAction'} type
 * @property {string<URI>|object<Person>} agent - the Person who asked the question
 * @property {string<URI>|object<Person>|object<Organization>} recipient - the Person or Organization being asked
 * @property {object<Question>} question - the Question being asked
 *
 * @typedef {Object} Question - a Question asked of Question#recipient by Question#agent about Question#object
 * @see https://schema.org/Question
 * @property {string} type - Question
 * @property {string} text - the textual content of the Question
 *
 * @typedef {Object} Person - a person, living, dead or undead; real of fictional
 * @see https://schema.org/Person
 * @property {string} givenName - the first name of a person
 * @property {string} familyName - the last name of a person
 * @property {string} name - the name of an entity
 *
 * @typedef {Object} SalesForce#Lead
 * @property {string} PersonContactID
 * @property {string} FirstName - givenName
 * @property {string} LastName - familyName
 * @property {string} EmailAddress - email
 * @property {string} Message - ???
 * @property {string} AccountSource - The source of the account record. For example, Advertisement, Data.com, or Trade Show.
 * @property {string} OwnerId - The ID of the SalesForce user who currently owns this account.
 * @property {string} Phone
 * @property {string} Fax
 * @property {string} PhotoUrl
 */

const sendLeadToSalesForce = require('../sendLeadToSalesForce')
const getProp = require('lodash.get')

/**
 * Receives an AskAction and returns the asker (AskAction#agent) as a SalesForce#Lead
 * @exports handleAskAction
 * @param {object<AskAction>} action - expects a schema:AskAction
 * @returns {object<SalesForce#Lead>}
 */
module.exports = async function handleAskAction (action) {
  /** @todo use yodata-context to create event transformers */
  const lead = {
    HSFId: getProp(action, 'recipient.identifier.thirdPartyID'),
    FirstName: getProp(action, 'agent.givenName'),
    LastName: getProp(action, 'agent.familyName'),
    EmailAddress: getProp(action, 'agent.email'),
    Phone: getProp(action, 'agent.telephone'),
    Message: getProp(action, 'description')
  }
  return sendLeadToSalesForce(lead)
}
