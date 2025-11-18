const UserModel = require("../../schemas/userschemas");

const createUser = async (req, res) => {
  console.log(req, "request");
  const { password, email, phoneNumber, address } = req.body;

  console.log("create user working");
  try {
    const data = await UserModel.create({
      password: password,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
    });
    console.log(data);
    res.status(201).json(`createdUser: ${data}`);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = createUser;
