const { User, Skill } = require("../models");

// TODO: Add the JWT Authentication and GraphQL Error
const { GraphQLError } = require("graphql");
const errorMessage = (message, codeMessage) => {
  return new GraphQLError(message, { extensions: { code: codeMessage } });
};

const resolvers = {
  Query: {
    me: async (parent, { userId }, context) => {
      // TODO: Validate
      // if(context.user){
      //   return User.findOne({ _id: userId });
      // }
      // throw errorMessage("You must be logged in", "UNAUTHENTICATED");
      return User.findOne({ _id: userId });
    },
    getSkills: async () => {
      return Skill.find();
    },
    skillMatch: async (parent, { oferredId, learnerId }, context) => {
      const offerer = await User.findById(oferredId);
      const learner = await User.findById(learner);

      if (!oferrer || !learner) {
        throw errorMessage("Oferrer or learner not found", "NOT_FOUND");
      }
      return User.find({
        _id: { $ne: oferredId },
        skilss: { $in: oferrer.skills },
      });
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = "placeholder";
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw errorMessage("User not found", "NOT_FOUND");
      }
      const verifyPassword = await User.verifyPassword(password);
      if (!verifyPassword) {
        throw errorMessage("Password incorrect", "UNAUTHENTICATED");
      }

      // TODO: create JWT token
      const token = "placeholder";
      return { token, user };
    },
    addSkill: async (parent, { userId, skill }, context) => {
      // if(context.user)
      return User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { skills: skill } },
        { new: true, runValidators: true }
      );
      // else throw errorMessage("You are not logged in", "UNAUTHENTICATED");
    },
    removeSkill: async (parent, { userId, skill }, context) => {
      // if(context.user)
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { skills: skill } },
        { new: true }
      );
      // else throw errorMessage("You are not logged in", "UNAUTHENTICATED");
    },
  },
};

module.exports = resolvers;
