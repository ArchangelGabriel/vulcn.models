module.exports = `
type Authorization {
  email: String
  accessToken: String
  scopes: [String]
}

input AuthorizationInput {

}
`