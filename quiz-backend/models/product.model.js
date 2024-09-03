const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      min: [3, "Product name min 3 char"],
      max: [150, "product name max 150 char "],
      required: [true, "provide a product name"],
    },

    img: [
      {
        type: String,
        validate: [validator.isURL, "Please provide a valid URL"],
        required: [true, "please provide a valid thumbnail URL"],
      },
    ],
    category: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        required: true,
      },
    },

    price: {
      type: Number,
      min: [0, "Price shouldn't be negative"],
      required: [true, "Please provide a valid price"],
    },

    discount: {
      type: Number,
      min: [0, "discount shouldn't be negative"],
      max: [100, "discount shouldn't more then 100%"],
      required: [true, "please provide a discount"],
    },

    status: {
      type: String,
      enum: {
        values: ["active", "in-active"],
        message: `{VALUE} shouldn't be stock`,
      },
      required: [true, "please provide status of Service"],
    },
    roadmap: String,
    materials: String,
    queries: String,
    features: String,
    importance: String,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
