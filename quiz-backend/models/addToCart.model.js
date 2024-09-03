const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const addToCart = mongoose.Schema(
  {
    items: [
      {
        productId: {
          type: ObjectId, // products Id
          required: true,
          ref: "Product",
        },
        price: {
          type: Number,
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
        },
      },
    ],

    addToCartBy: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        required: true,
        ref: "User",
      },
    },
  },
  {
    timestamps: true,
  }
);

const AddToCart = mongoose.model("AddToCart", addToCart);

module.exports = AddToCart;
