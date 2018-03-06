module.exports = `
enum PlatformType {
  Google
  Bing
}

type Authorization {
  _id: ID
  account: Account
  email: String
  accessToken: String
  refreshToken: String
  scopes: [String]
  platform: PlatformType
}

input AuthorizationInput {
  account: AccountInput
  email: String
  accessToken: String
  refreshToken: String
  scopes: [String]
  platform: PlatformType
}
`