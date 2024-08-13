const { Schema, model } = require("mongoose");

const skillSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const Skill = model("Skill", skillSchema);

module.exports = Skill;
