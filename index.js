const mongoose = require('mongoose')
const entities = require('./entities')

const NODE_ENV = process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase()
const CONNECTION_STRING = process.env[`MONGO_URL_${NODE_ENV}`]
if (CONNECTION_STRING) mongoose.connect(CONNECTION_STRING)

module.exports = entities
