const bcrypt = require('bcrypt')

function hashPassword (next) {
  if (!this.isNew) return next()

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(this.password, salt, (err, result) => {
      if (err) return next(err)
      this.password = result
      return next(null)
    })
  })
}

module.exports = hashPassword
