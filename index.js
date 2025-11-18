const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const UserModel = require("./schemas/userschemas");
const CategoryModel = require("./schemas/foodcategoryschemas");

const userRouter = require("./routes/userRoutes");
const categoryRouter = require("./routes/categoryRoutes");

const app = express();
const PORT = process.env.PORT || 999;

app.use(cors());
app.use(express.json());

connectToDB();

app.use("/user", userRouter);
app.use("/foodcategory", categoryRouter);
app.get("/", (req, res) => {
  res.send("hello world, running");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
