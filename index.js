const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const UserModel = require("./schemas/userschemas");

const app = express();
const PORT = process.env.PORT || 999;

app.use(cors());
app.use(express.json());

connectToDB();

app.get("/", async (req, res) => {
  console.log(req, "request");
  const { password, email, phoneNumber, address } = req.body;
  try {
    const data = await UserModel.create({
      password: password,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
    });
    res.json("hello 2 world");
  } catch (err) {
    res.json(err);
  }
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
