const Product = require("../models/product.model");
const SubCategory = require("../models/subcategory.model");

exports.getAllProductService = async (filter, queryObject) => {
  // console.log({ filter, queryObject });
  const products = await Product.find(filter)
    // .populate({
    //   path: "postedBy.id",
    //   // match: { email: filter.email },
    // })
    .skip(queryObject.skip)
    .limit(queryObject.limit);
  const totalProducts = await Product.countDocuments(filter);
  const page = Math.ceil(totalProducts / queryObject.limit);

  return { totalProducts, page, products };
};

exports.createProductService = async (data) => {
  const product = new Product(data);
  const result = await product.save();

  // console.log(updateSubCategory);
  return result;
};

exports.getProductByIdService = async (id) => {
  const product = await Product.findById(id);
  return product;
};
exports.updateProductByIdServices = async (id, data) => {
  const product = await Product.findById(id);
  const result = await product.set(data).save();
  return result;
};

exports.deleteProductByIdService = async (product) => {
  // const { _id: productId, subCategory } = product;
  const result = await Product.deleteOne({ _id: product._id });
  return result;
  // const removeFromSub = await SubCategory.updateOne(
  //   { _id: subCategory.id },
  //   { $pull: { products: productId } },
  //   {
  //     runValidators: true,
  //   }
  // );
  // // console.log(removeFromSub);
  // if (removeFromSub.modifiedCount) {
  //   const result = await Product.deleteOne({ _id: product._id });
  //   return result;
  // }
  // throw new Error("Product not deleted");
};

exports.getCartedProductService = async (ids) => {
  const products = await Product.find({ _id: { $in: ids } });
  return products;
};

exports.getAllProductByOwnerService = async (email) => {
  console.log(email);
  const products = await Product.find();
  //   .populate({
  //     path: "postedBy.id",
  //   })
  //   .lean();
  // const result = products.filter(
  //   (product) => product.postedBy.id.email == email
  // );

  return products;
};
