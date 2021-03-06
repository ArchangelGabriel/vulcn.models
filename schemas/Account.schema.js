module.exports = `
enum AccountType {
  ADVERTISER
  AGENCY
}

type Account {
  _id: ID
  name: String
  type: AccountType
  createdAt: String
  updatedAt: String
}

input AccountInput {
  name: String
  type: AccountType
}
`
