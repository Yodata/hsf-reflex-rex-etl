/**
 * @module handle/uriToHsfId
 */
const URL = require('url')

/**
 * returns the first part of the URL.hostname or uri on any errors
 * @param {string<URL>} uri
 * @returns {string}
 */
module.exports = uri => {
  try {
    let host = URL.parse(uri).host
    return host.split('.')[0].toUpperCase()
  } catch (e) {
    return uri
  }
}
