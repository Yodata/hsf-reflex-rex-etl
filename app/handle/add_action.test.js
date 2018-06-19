const handler = require('./add_action')
const addAction = require('./add_action.json')
const salesForceLead = require('./sales_force_lead')
test('add_action transform', () => {
  expect(handler(addAction)).toMatchObject(salesForceLead)
})
