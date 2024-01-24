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

  type Mutation {
    addUser(email: String!, password: String!, firstName: String!, lastName: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
