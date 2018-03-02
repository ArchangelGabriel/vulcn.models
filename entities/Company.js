const mongoose = require('mongoose')
const Types = mongoose.Schema.Types

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  websiteUrl: {
    type: String,
  },
  account: { type: Types.ObjectId, ref: 'Account', index: true }
}, {
  timestamps: true,
})

module.exports = mongoose.model('Company', schema)
