const express = require("express");
const getFood = require("../controllers/food/getFood");
const createFood = require("../controllers/food/createFood");
const deleteFood = require("../controllers/food/deleteFood");
const updateFood = require("../controllers/food/updateFood");
const getFoodByCategory = require("../controllers/food/getFoodByCategory");
const verifyJWT = require("../controllers/middleware/verifyJWT");

const foodRouter = express.Router();

foodRouter.get("/", getFood);
foodRouter.get("/:id", getFoodByCategory);
foodRouter.post("/", verifyJWT, createFood);
foodRouter.delete("/:id", verifyJWT, deleteFood);
foodRouter.put("/:id", verifyJWT, updateFood);

module.exports = foodRouter;
