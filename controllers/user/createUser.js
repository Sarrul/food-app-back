const UserModel = require("../../schemas/userSchemas");
const bcrypt = require("bcrypt");

const SALT_ROUND = 10;

const createUser = async (req, res) => {
  console.log(req, "request");
  const { password, email } = req.body;

  console.log(password, email, "this is create user");

  const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

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
