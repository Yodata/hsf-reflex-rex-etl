process.env.YODATA_API_KEY = 'oomooghaeFiov0koo4ki8uewoh8iuThoo6asaeXoo'
process.env.YODATA_INBOX_URL = 'https://hsf.ds.bhhsresource.com/inbox/'
process.env.SALESFORCE_USERNAME = 'lucychen@hsfranchise.com.hsfitteam4'
process.env.SALESFORCE_PASSWORD = 'wangkaiwen0@kKrcZUZGcYvOSrPGAWV5pi7yH'
process.env.SALESFORCE_LOGIN_URL = 'https://test.salesforce.com'
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
