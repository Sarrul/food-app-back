const CategoryModel = require("../../schemas/foodcategoryschemas");

const updateCategory = async (req, res) => {
  console.log(req, "request");
  const { categoryName } = req.body;

  console.log("create user working");
  try {
    const data = await CategoryModel.findByIdAndUpdate(
      id,
      {
        categoryName: categoryName,
      },
      { new: true }
    );
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = updateCategory;
