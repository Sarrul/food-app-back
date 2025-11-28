const UserModel = require("../../schemas/userSchemas");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  // console.log(req, "request");
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    const isPasswordMatching = await bcrypt.compare(password, user.password);

    if (isPasswordMatching) {
      res.status(200).json(`user: ${user}`);
    } else {
      res.status(400).json("password doesn't match");
    }
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = loginUser;
