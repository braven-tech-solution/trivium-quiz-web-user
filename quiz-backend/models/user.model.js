const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = mongoose.Schema.Types;
// const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ACCESS_TOKEN = `15917f03c85d0a59aec931265fccfcbf879a23b5b58a6b91cd565fe65eac6286f5d0f4ca593f8079f846dfb1d4c19349e2c71099aaf6cc1280cab347e2c7ebf1`;

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, "Please provide your first name."],
  },
  lastName: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, "Please provide your last name"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
    unique: true,
    required: [true, "Please provide your email"],
  },
  phone: {
    type: String,
    trim: true,
    lowercase: true,
    validate: [validator.isMobilePhone, "Please provide a valid phone"],
    required: [true, "Please provide your phone number"],
  },
  password: {
    type: String,
    trim: true,
    // validate: {

    //   validator: (value) => {
    //     return validator.isStrongPassword(value, {
    //       minLength: 6,
    //     });
    //   },
    // },
  },

  address: {
    type: String,
  },

  image: String,

  role: {
    type: String,
    enum: {
      values: ["admin", "user"],
      message: "Invalid role value",
    },
    default: "user",
  },
  status: {
    type: String,
    enum: {
      values: ["active", "in-active"],
      message: "Invalid status value",
    },
    default: "active",
  },
});

userSchema.pre("save", async function (next) {
  // console.log("hittedd ", this.password);
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (password, hash) {
  try {
    const isPasswordValid = await bcrypt.compare(password, hash);
    return isPasswordValid;
  } catch (err) {}
};

userSchema.methods.createJWT = async function () {
  try {
    const payload = { email: this.email, role: this.role, phone: this.phone };
    // console.log(payload, ACCESS_TOKEN)
    const accessToken = jwt.sign(payload, ACCESS_TOKEN, { expiresIn: "7d" });

    return accessToken;
  } catch (err) {
    throw new Error("accessToken not generated");
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
