module.exports = `
type Authorization {
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