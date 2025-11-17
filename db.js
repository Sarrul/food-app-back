const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://saruul_db:99Luna03.@food-delivery.xl8bghu.mongodb.net/"
    );
    console.log("DATABASE  connection success");
  } catch (err) {
    console.log("DATABASE  connection fail", err);
  }
};
module.exports = connectToDB;
