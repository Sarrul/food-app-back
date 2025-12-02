const foodModel = require("../../schemas/foodSchemas");

const updateFood = async (req, res) => {
  console.log(req, "request");
  const { foodName, price, image, ingredients, category } = req.body;
  const { id } = req.params;

  try {
    const data = await foodModel.findByIdAndUpdate(
      id,
      {
        foodName,
        price,
        image,
        ingredients,
        category,
      },
      { new: true }
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = updateFood;
