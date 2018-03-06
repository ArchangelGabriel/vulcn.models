const { required } = require('../utils/auth')
const attachCurrentAccountToQuery = require('../utils/attachCurrentAccountToQuery')

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
