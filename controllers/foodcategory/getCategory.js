const CategoryModel = require("../../schemas/foodcategoryschemas");

const getCategory = async (req, res) => {
  console.log(req, "request");
  const { id } = req.body;

  try {
    const data = await CategoryModel.findById(id);
    if (!data) {
      throw new Error("category not found");
    }
    res.status(200).json(`category: ${data}`);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = getCategory;
