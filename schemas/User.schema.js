module.exports = `
type User {
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