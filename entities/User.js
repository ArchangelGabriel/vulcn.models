const bcrypt = require('bcrypt-nodejs')
const mongoose = require('mongoose')
const removeProps = require('../utils/removeProps')

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

module.exports = mongoose.model('User', schema)

module.exports.hooks = {
  post: {
    all: [removeProps(['password'])]
  }
}