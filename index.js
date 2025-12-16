const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");

// require("./schemas/foodSchema");
// require("./schemas/orderSchema");

const userRouter = require("./routes/userRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const authenticationRouter = require("./routes/authentication");
const foodRouter = require("./routes/foodRoutes");
const orderRouter = require("./routes/orderRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectToDB();

app.use("/user", userRouter);
app.use("/foodcategory", categoryRouter);
app.use("/food", foodRouter);
app.use("/authentication", authenticationRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("hello world, running");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
