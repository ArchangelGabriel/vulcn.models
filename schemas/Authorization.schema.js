module.exports = `
type Authorization {
  _id: ID
  account: Account
  email: String
  accessToken: String
  scopes: [String]
}

input AuthorizationInput {
  email: String
  accessToken: String
  scope: [String]
}
`