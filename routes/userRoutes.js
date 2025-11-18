const express = require("express");
const createUser = require("../controllers/user/createUser");
const getUser = require("../controllers/user/getUser");
const deleteUser = require("../controllers/user/deleteUser");
const updateUser = require("../controllers/user/updateUser");

const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.put("/", updateUser);

userRouter.delete("/", deleteUser);

userRouter.post("/", createUser);

module.exports = userRouter;
