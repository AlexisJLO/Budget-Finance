const typeDefs = `
  type User {
    _id: ID
    email: String!
    password: String!
    firstName: String!
    lastName: String!
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    me: User
  }

`;

module.exports = typeDefs;
