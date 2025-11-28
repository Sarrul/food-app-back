const CategoryModel = require("../../schemas/foodCategorySchemas");

const createCategory = async (req, res) => {
  // console.log(req, "request");
  const { categoryName } = req.body;

  console.log("create user working");
  try {
    const data = await CategoryModel.create({
      categoryName: categoryName,
    });
    console.log(data);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = createCategory;
