const R = require('ramda')

/*  Merges values in req from src to dest
 *
 *  mergeReq(
 *    ['user', 'currentAccount'],
 *    ['query', 'where', 'accounts', '$in'],
 *    { multi: true }
 *  )
 * 
 */

const defaultConfig = {
  multi: false
}

function mergeReq(s, d, config = defaultConfig) {
  const src = R.lensPath(s)
  return function middleware(req, res, next) {
    const tmp = R.view(src, req)
    const val = config.multi ? [tmp] : tmp
    Object.assign(req, R.assocPath(d, val, req))
    next()
  }
}

module.exports = mergeReq