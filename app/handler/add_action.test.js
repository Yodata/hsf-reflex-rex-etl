const handler = require('./add_action')
const input = require('./add_action.json')

test('add_action transform', async () => {
  await expect(handler(input)).resolves.toMatchObject({
    'HSFId': expect.any(String),
    'FirstName': expect.any(String),
    'LastName': expect.any(String),
    'Phone': expect.any(String),
    'Message': expect.any(String)
  })
})
