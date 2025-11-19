const UserModel = require("../../schemas/userSchemas");
const bcrypt = require("bcrypt");

const SALT_ROUND = 10;

const createUser = async (req, res) => {
  console.log(req, "request");
  const { password, email, phoneNumber, address } = req.body;

  const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

  console.log("create user working");
  try {
    const data = await UserModel.create({
      password: hashedPassword,
      email: email,
    });
    console.log(data);
    res.status(201).json(`createdUser: ${data}`);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = createUser;
