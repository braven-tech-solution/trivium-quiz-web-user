const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const bannerSchema = mongoose.Schema(
  {
    ques: {
      type: String,
      trim: true,
      lowercase: true,
    },
    ans: {
      type: String,
      trim: true,
      lowercase: true,
    },

    banner: {
      type: String,
      validate: [validator.isURL, "Please provide valid URL"],
      required: [true, "please provide an URL"],
    },

    status: {
      type: String,
      enum: {
        values: ["active", "in-active"],
        message: "{VALUE} shouldn't banner",
      },
    },
    createdBy: {
      name: {
        type: String,
        required: [true, "Please provide a user name"],
      },
    },
    updatedBy: {
      name: String,
    },
  },
  {
    timestamps: true,
  }
);

const BannerModel = mongoose.model("BannerModel", bannerSchema);

module.exports = BannerModel;
