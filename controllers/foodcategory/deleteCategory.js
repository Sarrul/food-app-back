const CategoryModel = require("../../schemas/foodCategorySchemas");

const deleteCategory = async (req, res) => {
  console.log(req, "request");
  const { id } = req.body;

  try {
    await CategoryModel.findByIdAndDelete(id);
    res.status(200).json("category deleted");
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = deleteCategory;
