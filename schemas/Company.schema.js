module.exports = `
type Company {
  name: String
  websiteUrl: String
  account: Account
  createdAt: String
  updatedAt: String
}

input CompanyInput {
  name: String
  websiteUrl: String
}
`