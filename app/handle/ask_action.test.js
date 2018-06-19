const handler = require('./ask_action')
const askAction = require('./ask_action.json')
const salesForceLead = require('./sales_force_lead')
test('askAction transform', () => {
  expect(handler(askAction)).toMatchObject(salesForceLead)
})
