
const typeDefs = `
  type User{
    _id: ID
    name: String
    email: String
    password: String
    skills: [UserSkill]
    messages: [Message]
    events: [CalendarEvent]
    }
  type UserSkill{
    skill: Skill
    hasSkill: Boolean
    wantsToLearn: Boolean
  }

  type Skill{
    _id: ID
    category: String
    skill: String
    
  }

  type Auth{
    token: ID!
    user: User
  }

  type Message {
    _id: ID!
    sender: User!
    receiver: User!
    content: String!
    timestamp: String!
  }

  type CalendarEvent {
    _id: ID!
    title: String
    startTime: String
    endTime: String
    location: String
    user: User
  }

  input SkillInput {
    skill: String!
    category: String!
    hasSkill: Boolean
    wantsToLearn: Boolean
  }

  input CalendarEventInput {
    title: String!
    startTime: String!
    endTime: String!
    location: String
  }

  type Checkout {
    session: ID
  }
    
  type Query{
    me: User
    getSkills: [Skill]
    getSingleSkill(skillId: ID!): Skill 
    searchSkills(category: String, skill: String): [Skill]
    skillMatch(offererId: ID!, learnerId: ID!): [User]
    getMessages(userId: ID!): [Message]
    getCalendarEvents: [CalendarEvent]
    checkout(donation: Int): Checkout
  }
    

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    updateUser(name: String!, email: String!): User
    addSkill(input: SkillInput!): User
    removeSkill(skillId: ID!): User
    sendMessage(receiverId: ID!, content: String!): Message
    addCalendarEvent(input: CalendarEventInput!): CalendarEvent
    removeCalendarEvent(eventId: ID!): User

  }
`;


module.exports = typeDefs;
