const UserModel = require("../../schemas/userschemas");

const getUser = async (req, res) => {
  console.log(req, "request");
  const { id } = req.body;

  try {
    const data = await UserModel.findById(id);
    if (!data) {
      throw new Error("user not found");
    }
    res.status(200).json(`user: ${data}`);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = getUser;
