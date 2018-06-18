const expect = require('expect')
module.exports = expect.objectContaining({
  'HSFId': expect.any(String),
  'FirstName': expect.any(String),
  'LastName': expect.any(String),
  'Phone': expect.any(String),
  'Message': expect.any(String)
})
