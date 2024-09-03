const mongoose = require("mongoose");
const { Schema } = mongoose;

const settingSchema = new Schema({
  location: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  officeTime: {
    type: String,
  },
  aboutUS: {
    type: String,
  },
  logo: {
    type: String,
  },
});

const Setting = mongoose.model("Setting", settingSchema);

module.exports = Setting;
