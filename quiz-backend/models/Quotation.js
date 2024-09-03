const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const quotationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    serviceTitle: {
      type: String,
      required: true,
    },
    serviceDetails: {
      type: String,
    },
    featureNeeded: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    quotedBy: {
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

const Quotation = mongoose.model("Quotation", quotationSchema);

module.exports = Quotation;
