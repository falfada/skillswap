const {Schema, model} = require('mongoose');
const Skill = require('./Skill');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
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

userSchema.pre('save', async function (next) {
  if(this.isNew || this.isModified('password')){
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.verifyPassword = async function(password){
  return bcrypt.compare(password, this.password);
}

const User = model("User", userSchema);

module.exports = User;