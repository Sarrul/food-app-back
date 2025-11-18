const UserModel = require("../../schemas/userschemas");

const deleteUser = async (req, res) => {
  console.log(req, "request");
  const { id } = req.body;

  try {
    await UserModel.findByIdAndDelete(id);
    res.status(200).json("user deleted");
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = deleteUser;
