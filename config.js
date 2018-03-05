const NODE_ENV = process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase()
const CONNECTION_STRING = process.env[`MONGO_URL_${NODE_ENV}`]
const SECRET = process.env[`SECRET_${NODE_ENV}`]
const isProd = NODE_ENV === 'production'

module.exports = {
  NODE_ENV,
  CONNECTION_STRING,
  SECRET,
  isProd,
}