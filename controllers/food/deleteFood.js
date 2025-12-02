const foodModel = require("../../schemas/foodSchemas");

const deleteFood = async (req, res) => {
  console.log(req, "request");
  const { id } = req.params;

  try {
    await foodModel.findByIdAndDelete(id);
    res.status(200).json("food deleted");
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = deleteFood;
