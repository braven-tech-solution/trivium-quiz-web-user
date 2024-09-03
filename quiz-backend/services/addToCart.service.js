const AddToCart = require("../models/addToCart.model");

exports.createAddToCartService = async (data) => {
  const result = await AddToCart.create(data);
  return result;
};
exports.getSingleCartByIdFromDB = async (id) => {
  const result = await AddToCart.findOne({ "addToCartBy.id": id });
  return result;
};
exports.updateSingleCartByIdIntoDB = async (id, data) => {
  const result = await AddToCart.findOneAndUpdate(
    { "addToCartBy.id": id },
    data,
    { new: true }
  );
  return result;
};
