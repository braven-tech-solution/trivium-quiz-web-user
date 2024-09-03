const { mongoose } = require("mongoose");
const { ObjectId } = mongoose.Types;
const Order = require("../models/order.model");
const User = require("../models/user.model");
const Quotation = require("../models/Quotation");

exports.createQuotationService = async (quotationData) => {
  const quotation = new Quotation(quotationData);
  const result = await quotation.save();

  return result;
};

exports.getAllQuotationFromDB = async () => {
  const result = await Quotation.find();
  return result;
};

exports.getSingleQuotationByIdFromDB = async (id) => {
  const result = await Quotation.findById(id);
  return result;
};

exports.deleteQuotationByByIdService = async (id) => {
  console.log(id);
  const result = await Quotation.deleteOne({ _id: id });
  return result;
};
