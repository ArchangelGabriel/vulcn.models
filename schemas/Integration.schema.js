module.exports = `
enum ServiceType {
  Analytics
  Adwords
}

type Integration {
  _id: ID
  account: Account
  authorization: Authorization
  company: Company
  service: ServiceType
  name: String
  createdAt: String
  updatedAt: String
}

input IntegrationInput {
  account: AccountInput
  authorization: AuthorizationInput
  company: CompanyInput
  service: ServiceType
  name: String
}
`