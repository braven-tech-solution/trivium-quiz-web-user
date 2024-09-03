const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const orderSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },

    items: [
      {
        productId: {
          type: ObjectId, // products Id
          required: true,
          ref: "Product",
        },
        price: {
          type: Number,
        },
      },
    ],
    totalPrice: {
      type: Number,
    },
    orderStatus: {
      type: String,
      enum: ["pending", "confirmed", "shipped", "delivered"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "paypal"],
      default: "credit_card",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    paymentInfo: {
      accountName: {
        type: String,
      },
      accountNumber: {
        type: String,
      },
      transactionId: {
        type: String,
      },
    },

    contactInfo: {
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: String,
      },
    },
    orderedBy: {
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

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
