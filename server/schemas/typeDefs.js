
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

  type Message {
    _id: ID!
    sender: User!
    receiver: User!
    content: String!
    timestamp: String!
  }

  input SkillInput {
    category: String!
    skill: String!
  }

  input CalendarEventInput {
    title: String!
    description: String
    startTime: String!
    endTime: String!
    location: String
  }

  type Query{
    me(UserId: ID!): User
    getSkills: [Skill]
    skillMatch(offererId: ID!, learnerId: ID!): [User]
    getMessages(userId: ID!): [Message!]!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    updateUser(name: String!, email: String!, password: String!): User
    addSkill(userId: ID!, skill: SkillInput!): User
    removeSkill(userId: ID!, skillId: ID!): User
    sendMessage(receiverId: ID!, content: String!): Message!

  }
`;


module.exports = typeDefs;
