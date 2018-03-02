module.exports = `
type Authorization {
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