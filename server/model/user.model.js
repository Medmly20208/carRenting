const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  if (!email && !password) {
    throw Error("all fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("your password isn't strong");
  }
  const isUserAlreadyExisted = await this.findOne({ email });

  if (isUserAlreadyExisted) {
    throw Error("this email is already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await this.create({ email, password: hashedPassword });

  return newUser;
};

userSchema.statics.login = async function (email, password) {
  if (!email && !password) {
    throw Error("all fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("this email is incorrect");
  }

  const isPasswordsMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordsMatched) {
    throw Error("incorrect password");
  }

  return user;
};

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
