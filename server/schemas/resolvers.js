const { User, Skill, Message, Calendar } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("skills")
          .populate("messages")
          .populate("events");
      }
      throw AuthenticationError;
    },
    getSkills: async () => {
      return Skill.find();
    },
    getSingleSkill: async (parent, { skillId }) => {
      return Skill.findOne({ _id: skillId }).populate("users");
    },
    searchSkills: async (parent, { category, skill }) => {
      const searchCriteria = {};
      if (category) {
        searchCriteria.category = category;
      }
      if (skill) {
        searchCriteria.skill = new RegExp(skill, "i");
      }

      return Skill.find(searchCriteria).populate("users");
    },
    skillMatch: async (parent, { oferredId, learnerId }, context) => {
      if (context.user) {
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
      throw AuthenticationError;
    },
    getMessages: async (parent, { userId }, context) => {
      if (context.user) {
        return Message.find({
          $or: [{ sender: userId }, { receiver: userId }],
        }).populate("sender receiver");
      }
      throw AuthenticationError;
    },
    getCalendarEvents: async (parent, args, context) => {
      if (context.user) {
        return Calendar.find().populate("user");
      }
      throw AuthenticationError;
    },
    checkout: async (parent, { donation }, context) => {
      const url = new URL(context.headers.referer).origin;

      const line_items = [];

      line_items.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: "Donation",
            description: "Support our platform",
          },
          unit_amount: donation * 100, // amount in cents
        },
        quantity: 1,
      });

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },

  Mutation: {
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const verifyPassword = await user.verifyPassword(password);
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
      console.log(token);
      return { token, user };
    },
    updateUser: async (parent, { name, email }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { name, email },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    addSkill: async (parent, { input }, context) => {
      // console.log('input: ', input); // Log skillInput for inspection
      const { skill, category, hasSkill, wantsToLearn } = input;

      if (!skillInput || !skillInput.skill) {
        console.error("skillInput or skillInput.skill is undefined");
        return; // Or handle the error appropriately
      }
      console.log(context.user);
      if (context.user) {
        try {
          const newSkill = await Skill.create({
            skill, category
          });

          const updatedUser = await User.findByIdAndUpdate(
            context.user._id,
            {
              $push: {
                skills: {
                  skill: newSkill._id,
                  hasSkill,
                  wantsToLearn,
                },
              },
            },
            { new: true }
          ).populate("skills.skill");

          return updatedUser;
        } catch (error) {
          console.error("Error adding skill:", error);
        }
      }
      throw AuthenticationError;
    },
    removeSkill: async (parent, args, context) => {
      console.log('Arguments received:', args);
      const { skillId } = args;
    
      if (!skillId) {
        throw new Error('Skill ID is required');
      }
    
      if (context.user) {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            context.user._id,
            { $pull: { skills: { skill: skillId } } },
            { new: true }
          ).populate("skills.skill");
    
          await Skill.findByIdAndUpdate(
            skillId,
            { $pull: { users: context.user._id } },
            { new: true }
          );
    
          return updatedUser;
        } catch (error) {
          console.error("Error removing skill:", error);
          throw new Error("Error removing skill.");
        }
      }
      throw new AuthenticationError("User not authenticated.");
    },
    sendMessage: async (parent, { receiverId, content }, context) => {
      if (context.user) {
        const message = Message.create({
          sender: context.user._id,
          receiver: receiverId,
          content,
        });
        return await message.populate("sender receiver").execPopulate();
      }
      throw AuthenticationError;
    },
    addCalendarEvent: async (parent, { input }, context) => {
      if (context.user) {
        const event = Calendar.create({ ...input, user: context.user._id });
        return (await event).populate("user").execPopulate();
      }
      throw AuthenticationError;
    },
    removeCalendarEvent: async (parent, { eventId }, context) => {
      if (context.user) {
        const event = await CalendarEvent.findById(eventId);
        if (!event) {
          throw new Error("Calendar event not found.");
        }

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { events: eventId } },
          { new: true }
        ).populate("events");

        return updatedUser;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
