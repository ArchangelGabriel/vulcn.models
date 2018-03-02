module.exports = `
type User {
  _id: ID
  email: String
  accounts: [Account]
  createdAt: String
  updatedAt: String
}

input UserInput {
  email: String
  password: String
}
`