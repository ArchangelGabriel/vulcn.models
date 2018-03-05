const { required } = require('../utils/auth')
const attachCurrentAccountToQuery = require('../utils/attachCurrentAccountToQuery')

const UserHooks = {
  pre: {
    plural: {
      GET: [required, attachCurrentAccountToQuery]
    }
  }
}

module.exports = UserHooks
