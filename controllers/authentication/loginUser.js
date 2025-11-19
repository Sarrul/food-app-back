const UserModel = require("../../schemas/userSchemas");

const loginUser = async (req, res) => {
  console.log(req, "request");
  const { email, password } = req.body;

  try {
    const data = await UserModel.findOne({ email });
    res.status(200).json(`user: ${data}`);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = loginUser;
