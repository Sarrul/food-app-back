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

const isEmailExist = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(404).json("Email is required");
  }

  const user = await UserModel.findOne({ email: email });
  if (user) {
    res.status(404).json("User already exist");
  }

  next();
};

// New endpoint to check if email already exists
AuthenticationRouter.post("/check-email", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json("Email is required");

  const user = await UserModel.findOne({ email });

  if (user) return res.status(400).json("User already exists");

  return res.status(200).json("OK");
});

AuthenticationRouter.post("/login", isUserExist, loginUser);
AuthenticationRouter.post("/signup", isEmailExist, createUser);

module.exports = AuthenticationRouter;
