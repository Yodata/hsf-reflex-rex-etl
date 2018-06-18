const config = require('dotenv').config()
const sendLeadToSalesForce = require('./sendLeadToSalesForce')

test('environment contains SALESFORCE_USERNAME', () => {
  expect(config.parsed).toHaveProperty('SALESFORCE_USERNAME')
  expect(typeof process.env.SALESFORCE_USERNAME).toBe('string')
})

test('environment contains SALESFORCE_PASSWORD', () => {
  expect(config.parsed).toHaveProperty('SALESFORCE_PASSWORD')
  expect(typeof process.env.SALESFORCE_PASSWORD).toBe('string')
})

test('environment contains SALESFORCE_LOGIN_URL', () => {
  expect(config.parsed).toHaveProperty('SALESFORCE_LOGIN_URL')
  expect(typeof process.env.SALESFORCE_LOGIN_URL).toBe('string')
})

test('sendLeadToSalesForce sends the lead to Sales Force', async () => {
  const exampleLead = {
    HSFId: '12345',
    FirstName: 'Alice',
    LastName: 'Agent',
    Phone: '867-5309',
    Message: 'carpe diem'
  }
  await expect(sendLeadToSalesForce(exampleLead)).resolves.toMatchObject(exampleLead)
})
