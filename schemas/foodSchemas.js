const { model, Schema } = require("mongoose");
const foodSchema = new Schema(
  {
    foodName: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      //   required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "foodcategory",
      //   required: true,
    },
  },
  {
    timestamps: true,
  }
);

const foodModel = model("Food", foodSchema);

module.exports = foodModel;
