
const typeDefs = `
  type User{
    _id: ID
    name: String
    email: String
    password: String
    skills: [Skill]
  }

  type Skill{
    _id: ID
    category: String
    skill: String
  }

  type Auth{
    token: ID!
    User: User
  }

  type Query{
    me(UserId: ID!): User
    getSkills: [Skill]
    skillMatch(offererId: ID!, learnerId: ID!): [User]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSkill(userId: ID!, skill: String!): User
    removeSkill(userId: ID!, skill: String!): User
  }
`;

module.exports = typeDefs;
