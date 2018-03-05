const R = require('ramda')

const attachCurrentAccountToQuery = (req, res, next) => {
  req.query = R.assocPath(['where', 'accounts', '$in'], [req.user.currentAccount] || [], req.query)
  next()
}

module.exports = attachCurrentAccountToQuery
