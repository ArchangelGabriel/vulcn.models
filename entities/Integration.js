const mongoose = require('mongoose')
const Types = mongoose.Schema.Types

const schema = new mongoose.Schema({
  account: { type: Types.ObjectId, ref: 'Account', index: true, required: true },
  authorization: { type: Types.ObjectId, ref: 'Authorization', index: true, required: true },
  company: { type: Types.ObjectId, ref: 'Company', index: true, required: true },
  service: { type: String, required: true, enum: ['Analytics', 'Adwords'] },
  name: String
}, {
  timestamps: true,
  discriminatorKey: 'service'
})

var Integration = mongoose.model('Integration', schema)

var Analytics = Integration.discriminator('Analytics', new mongoose.Schema({
  ga_account_id: { type: String },
  ga_account_name: { type: String },
  ga_property_id: { type: String },
  ga_property_name: {type: String },
  ga_profile_name: { type: String },
  ga_profile_id: { type: String, required: true },
  website_url: { type: String }
}))

var Adwords = Integration.discriminator('Adwords', new mongoose.Schema({
  isMcc: { type: String },
  customerId: { type: String, required: true },
  timeZone: { type: String },
  website_url: {type: String }
}))

module.exports = mongoose.model('Integration', schema)
