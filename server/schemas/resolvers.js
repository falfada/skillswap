
const { User, Skill, Message } = require("../models");
const { signToken, AuthenticationError} = require('../utils/auth');


const resolvers = {
  Query: {
    me: async (parent, { userId }, context) => {

      if(context.user){
        return User.findOne({ _id: userId });
      }
      throw AuthenticationError;
    },
    getSkills: async () => {
      return Skill.find();
    },
    skillMatch: async (parent, { oferredId, learnerId }, context) => {
      if(context.user){
        const offerer = await User.findById(oferredId);
        const learner = await User.findById(learnerId);
  
        if (!offerer || !learner) {
          throw AuthenticationError;
        }
        return User.find({
          _id: { $ne: oferredId },
          skilss: { $in: offerer.skills },
        });  
      }
      throw AuthenticationError
      
    },
    getMessages: async(parent, {userId}, context) => {
      if(context.user){
        return Message.find({$or: [{sender: userId}, {receiver: userId}]}).populate('sender receiver');
      }
      throw AuthenticationError;
    }
  },

  Mutation: {
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const verifyPassword = await User.verifyPassword(password);
      if (!verifyPassword) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      if (!user) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async(parent, {name, email, password}, context) => {
      if(context.user){
        return User.findOneAndUpdate({_id: context.user._id}, {name, email, password}, {new: true});
      }
      throw AuthenticationError;
    },
    addSkill: async (parent, { userId, skill }, context) => {
      if(context.user){
        return User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { skills: skill } },
          { new: true, runValidators: true }
        );
      }
      throw AuthenticationError;
    },
    removeSkill: async (parent, { userId, skillId }, context) => {
      if(context.user){
        return User.findOneAndUpdate(
          { _id: userId },
          { $pull: { skills: {_id: skillId }}},
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    sendMessage: async(parent, {receiverId, content}, context) => {
      if(context.user){
        const message = Message.create({sender: context.user._id, receiver: receiverId, content});
        return await message.populate('sender receiver').execPopulate();
      }
      throw AuthenticationError;
     
    },
    addCalendarEvent: async() => {
      
    }
  },
};

module.exports = resolvers;
