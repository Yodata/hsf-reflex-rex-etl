const client = require('./salesforce-client')

test('sendLead is a function', () => {
  expect(client.sendLead).toBeInstanceOf(Function)
})

test('sendLead resolves', async () => {
  let message = {
    lead: {
      HSFId: '12334',
      FirstName: 'alice',
      LastName: 'jones',
      EmailAddress: 'alice@example.com',
      Phone: '867-5309',
      Message: 'this is a test' }
  }
  expect(client.sendLead(message)).resolves.toBe('')
})

test('postMessage fails if wrong url', (done) => {
  let shouldFail = client.postMessage('badtopic')
  shouldFail({})
    .catch(() => {
      done()
    })
})
