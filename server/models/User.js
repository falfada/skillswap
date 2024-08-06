const {Schema, model} = require('mongoose');
const Skill = require('./Skill');

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill",
    },
  ],
});

const Profile = model("Profile", profileSchema);

module.exports = Profile;