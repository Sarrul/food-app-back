const foodModel = require("../../schemas/foodSchemas");

const createFood = async (req, res) => {
  // console.log(req, "request");
  const { foodName, price, image, ingredients, category } = req.body;

  console.log("create user working");
  try {
    const data = await foodModel.create({
      foodName,
      price,
      image,
      ingredients,
      category,
    });
    console.log(data);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = createFood;
