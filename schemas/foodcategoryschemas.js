const { model, Schema } = require("mongoose");
const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const CategoryModel = model("foodcategory", categorySchema);

module.exports = CategoryModel;
