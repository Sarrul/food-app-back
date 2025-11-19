const express = require("express");

const createUser = require("../controllers/user/createUser");
const loginUser = require("../controllers/authentication/loginUser");
const UserModel = require("../schemas/userSchemas");

const AuthenticationRouter = express.Router();

const isUserExist = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(404).json("Email required");
  }

  const user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(404).json("User not found.");
  }
  console.log("this is calling next");
  next();
};

AuthenticationRouter.post("/login", isUserExist, loginUser);
AuthenticationRouter.post("/signup", createUser);

module.exports = AuthenticationRouter;
