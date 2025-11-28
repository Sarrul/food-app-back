const foodModel = require("../../schemas/foodSchemas");

const getFoodByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await foodModel.find({ category: id });
    // if (data.length <= 0) {
    //   throw new Error("category not found");
    // }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = getFoodByCategory;
