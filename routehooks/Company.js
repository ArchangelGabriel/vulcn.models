const { required } = require('../utils/auth')
const mergeReq = require('../utils/mergeReq')

const attachCurrentAccountToQuery = mergeReq(
  ['user', 'currentAccount'],
  ['query', 'where', 'account'],
)

const pre = {
  getOne: [],
  getAll: [required, attachCurrentAccountToQuery],
  create: [],
  update: [],
  delete: [],
}

const post = {
  getOne: [],
  getAll: [],
  create: [],
  update: [],
  delete: [],
}

module.exports = { pre, post }
