const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

const createToken = (_id, email) => {
  return jwt.sign({ _id, email }, process.env.SECRET_JWT, { expiresIn: "3d" });
};

const loginUser = async (req, res) => {
  let { email, password } = req.body;

  try {
    const User = await userModel.login(email, password);

    const token = createToken(User._id, User.email);

    res.status(200).json({
      status: "success",
      message: "you are logged in",
      data: {
        email: User.email,
        token,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  let newUser;

  try {
    newUser = await userModel.signup(email, password);

    const token = createToken(newUser._id, email);
    res.status(200).json({
      status: "success",
      message: "signedup successfully",
      data: {
        email: newUser.email,
        id: newUser._id,
        token,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
