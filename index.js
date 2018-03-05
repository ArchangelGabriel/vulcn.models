const mongoose = require('mongoose')
const entities = require('./entities')

const {
  CONNECTION_STRING,
  SECRET,
  isProd,
} = require('./config')

if (!SECRET) throw new Error('Environment `SECRET_${ENV}` must be defined')

if (CONNECTION_STRING) mongoose.connect(CONNECTION_STRING, {
  autoIndex: isProd ? false : true,
  keepAlive: isProd ? false : true,
})

module.exports = entities
