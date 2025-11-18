const express = require("express");
const createCategory = require("../controllers/foodcategory/createCategory");
const getCategory = require("../controllers/foodcategory/getCategory");
const deleteCategory = require("../controllers/foodcategory/deleteCategory");
const updateCategory = require("../controllers/foodcategory/updateCategory");

const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getCategory);
categoryRouter.delete("/", deleteCategory);
categoryRouter.put("/", updateCategory);

module.exports = categoryRouter;
