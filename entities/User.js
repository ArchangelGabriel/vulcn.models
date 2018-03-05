const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const hashPassword = require('../modelhooks/hashPassword')
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
})

schema.pre('save', hashPassword)

schema.methods.generateJWT = function() {
  const today = new Date()
  const exp = new Date(today)
  exp.setDate(today.getDate() + 60)

  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      accounts: this.accounts,
      currentAccount: this.currentAccount || this.accounts[0],
      exp: parseInt(exp.getTime() / 1000, 10),
    },
    SECRET
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
  return bcrypt.compare(password, this.password)
} 

module.exports = mongoose.model('User', schema)
