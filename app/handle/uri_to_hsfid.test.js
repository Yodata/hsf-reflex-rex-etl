const uriToHsfId = require('./uri_to_hsfid')
const uri = 'https://ct301.ds.bhhsresource.com/inbox/'

test('returns first node of uri.hostname', () => {
  expect(uriToHsfId(uri)).toBe('CT301')
})

test('handles numbers', () => {
  expect(uriToHsfId('https://123.yodata.me')).toBe('123')
})

test('handles null', () => {
  expect(uriToHsfId(null)).toBe(null)
})

test('handles non URL values', () => {
  expect(uriToHsfId('this is a test')).toBe('this is a test')
})
