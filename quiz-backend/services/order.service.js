const { mongoose } = require("mongoose");
const { ObjectId } = mongoose.Types;
const Order = require("../models/order.model");
const User = require("../models/user.model");

exports.createOrderService = async (orderData) => {
  const count = await Order.countDocuments();
  orderData.id = Number("2023000" + (count + 1)).toString();
  const order = new Order(orderData);
  const result = await order.save();
  //orderedId to set on user model,
  // const { _id: orderedId } = result;
  //   const updateUserWithOrderInfo = await User.updateOne(
  //     { _id: orderedBy.id },
  //     {
  //       $push: { orders: orderedId },
  //     }
  //   );
  return result;
};

exports.getSingleUserAllOrdersByUserIdService = async (UserId) => {
  console.log("User Id");
  console.log(UserId);
  const result = await Order.find({ "orderedBy.id": UserId }).populate(
    "items.productId"
  );
  console.log();
  return result;
};
exports.getOrdersUnderVendorByIdService = async (ownerId) => {
  console.log("ownerId");
  console.log(ownerId);
  const ownerObjectId = new ObjectId(ownerId);
  const result = await Order.aggregate([
    {
      $unwind: "$items",
    },
    {
      $lookup: {
        from: "products", // replace with your actual products collection name
        localField: "items.productId",
        foreignField: "_id",
        as: "items.product",
      },
    },
    {
      $unwind: "$items.product",
    },
    {
      $lookup: {
        from: "users", // replace with your actual users collection name
        localField: "orderedBy.id",
        foreignField: "_id",
        as: "orderedBy.user",
      },
    },
    {
      $lookup: {
        from: "users", // replace with your actual users collection name
        localField: "items.product.postedBy.id",
        foreignField: "_id",
        as: "items.product.postedBy.owner",
      },
    },
    {
      $match: {
        "items.product.postedBy.owner._id": ownerObjectId,
      },
    },
  ]);
  return result;
};

exports.getSingleOrderbyIdFromDB = async (id) => {
  const result = await Order.findById(id);
  return result;
};
exports.deleteOrderByIdService = async (id) => {
  console.log(id);
  const result = await Order.deleteOne({ _id: id });
  return result;
};

exports.addPaymentInfoInOrderById = async (id, paymentBody) => {
  console.log("object", id);
  console.log("object", paymentBody.paymentInfo);
  return await Order.updateOne(
    { id },
    {
      $set: {
        paymentMethod: paymentBody.paymentMethod,
        paymentInfo: paymentBody.paymentInfo,
        paymentStatus: paymentBody.paymentStatus,
      },
    },
    { upsert: true }
  );
};
