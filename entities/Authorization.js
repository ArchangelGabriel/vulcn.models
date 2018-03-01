const mongoose = require('mongoose')
const Types = mongoose.Schema.Types

const schema = new mongoose.Schema({
  account: { type: Types.ObjectId, ref: 'Account', index: true },
  email: String,
  accessToken: String,
  refreshToken: String,
  scopes: [String],
}, {
  timestamps: true,
  versionKey: '_v',
})

module.exports = mongoose.model('Authorization', schema)
