const mongoose = require('mongoose')
const Types = mongoose.Schema.Types

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['ADVERTISER', 'AGENCY'],
    required: true,
  },
  users: [{ type: Types.ObjectId, ref: 'User', index: true }],
}, {
  timestamps: true,
})

module.exports = mongoose.model('Account', schema)
