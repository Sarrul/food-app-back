const foodModel = require("../../schemas/foodSchemas");

const getFood = async (req, res) => {
  try {
    const data = await foodModel.find();
    // if (data.length <= 0) {
    //   throw new Error("category not found");
    // }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = getFood;
