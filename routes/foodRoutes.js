const express = require("express");
const getFood = require("../controllers/food/getFood");
const createFood = require("../controllers/food/createFood");
const deleteFood = require("../controllers/food/deleteFood");
const updateFood = require("../controllers/food/updateFood");
const getFoodByCategory = require("../controllers/food/getFoodByCategory");

const foodRouter = express.Router();

foodRouter.get("/", getFood);
foodRouter.get("/:id", getFoodByCategory);
foodRouter.post("/", createFood);
foodRouter.delete("/", deleteFood);
foodRouter.put("/", updateFood);

module.exports = foodRouter;
