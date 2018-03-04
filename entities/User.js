const b = require('bcrypt')
const bcrypt = require('bcrypt-nodejs')
const mongoose = require('mongoose')
const removeProps = require('../utils/removeProps')
const { SECRET } = require('../config')

const Types = mongoose.Schema.Types

const schema = new mongoose.Schema({
  email: {
    type: String,
    index: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  accounts: [{ type: Types.ObjectId, ref: 'Account', index: true }]
}, {
  timestamps: true,
  versionKey: '_v',
})

schema.pre('save', function (next) {
  if (!this.isNew) return next()

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(this.password, salt, null, (err, result) => {
      if (err) return next(err)
      this.password = result
      return next(null)
    })
  })
})

schema.methods.generateJWT = function() {
  const today = new Date()
  const exp = new Date(today)
  exp.setDate(today.getDate() + 60)

  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      accounts: this.accounts,
      exp: parseInt(exp.getTime() / 1000, 10),
    },
    SECRET,
  )
}

schema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  }
}

schema.methods.verifyPassword = function(password) {
  return b.compare(password, this.password)
} 

module.exports = mongoose.model('User', schema)

module.exports.hooks = {
  post: {
    all: [removeProps(['password'])]
  }
}