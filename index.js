const mongoose = require('mongoose')
const entities = require('./entities')

const NODE_ENV = process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase()
const CONNECTION_STRING = process.env[`MONGO_URL_${NODE_ENV}`]
const isProd = NODE_ENV === 'production'

if (CONNECTION_STRING) mongoose.connect(CONNECTION_STRING, {
  autoIndex: isProd ? false : true,
  keepAlive: isProd ? false : true,
})

module.exports = entities
