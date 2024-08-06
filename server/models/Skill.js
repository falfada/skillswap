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
});

const Skill = model("Skill", skillSchema);

module.exports = Skill;
