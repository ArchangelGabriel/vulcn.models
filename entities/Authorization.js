const mongoose = require('mongoose')
const Types = mongoose.Schema.Types

const schema = new mongoose.Schema({
  account: { type: Types.ObjectId, ref: 'Account', index: true },
  email: String,
  accessToken: String,
  refreshToken: String,
  scopes: [String],
  platform: {type: String, enum: ['Google', 'Bing']}
}, {
  timestamps: true,
  discriminatorKey: 'platform'
})

var Authorization = mongoose.model('Authorization', schema)

var Google = Authorization.discriminator('Google', new mongoose.Schema({
  sub: { type: String, required: true },
  token_expiry: { type: Date },
  client_id: { type: String }
}))

var Bing = Authorization.discriminator('Bing', new mongoose.Schema({
  user_id: { type: String, required: true },
  expires_in: { type: Date },
}))





module.exports = mongoose.model('Authorization', schema)
