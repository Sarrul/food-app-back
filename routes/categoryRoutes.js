const express = require("express");
const createCategory = require("../controllers/foodcategory/createCategory");
const getCategory = require("../controllers/foodcategory/getCategory");
const deleteCategory = require("../controllers/foodcategory/deleteCategory");
const updateCategory = require("../controllers/foodcategory/updateCategory");
const verifyJWT = require("../controllers/middleware/verifyJWT");

const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
categoryRouter.post("/", verifyJWT, createCategory);
categoryRouter.delete("/", verifyJWT, deleteCategory);
categoryRouter.put("/", verifyJWT, updateCategory);

module.exports = categoryRouter;
