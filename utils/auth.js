const jwt = require('express-jwt')
const { SECRET } = require('../config')

function fromHeaderOrQuerystring (req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1]
  } else if (req.query && req.query.token) {
    return req.query.token
  }
  return null
}

module.exports.required = jwt({ secret: SECRET, getToken: fromHeaderOrQuerystring })

module.exports.optional = jwt({ secret: SECRET, getToken: fromHeaderOrQuerystring, credentialsRequired: false })
