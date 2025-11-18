const UserModel = require("../../schemas/userschemas");

const updateUser = async (req, res) => {
  console.log(req, "request");
  const { id, email, password, phoneNumber, address } = req.body;

  try {
    const data = await UserModel.findByIdAndUpdate(
      id,
      {
        email,
        password,
        phoneNumber,
        address,
      },
      { new: true }
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = updateUser;
