const mongoose = require('mongoose')
const Types = mongoose.Schema.Types

const schema = new mongoose.Schema({
  account: { type: Types.ObjectId, ref: 'Account' },
  email: String,
  accessToken: String,
  refreshToken: String,
  scopes: [String],
}, {
  timestamps: true,
})

schema.index({ account: 1, email: 1 })

module.exports = mongoose.model('Authorization', schema)
