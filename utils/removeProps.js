const R = require('ramda')

const removeProps = (props) => (req, res, next) => {
  const omitter = R.omit(props)
  if (Array.isArray(res.data)) {
    res.data = R.map(omitter, res.data)
  } else {
    res.data = omitter(res.data)
  }
  next()
}

module.exports = removeProps