const UserModel = require("../../schemas/userSchemas");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middleware/generateToken");

const loginUser = async (req, res) => {
  // console.log(req, "request");
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json("email not found");

    const isPasswordMatching = await bcrypt.compare(password, user.password);

    if (isPasswordMatching) {
      const token = generateToken(user);
      console.log("this is token:", token);
      res.status(200).json({ user: user, token: token });
    } else {
      res.status(400).json("password doesn't match");
    }
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = loginUser;
