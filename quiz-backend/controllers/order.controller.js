const Order = require("../models/order.model");
const {
  createOrderService,
  getSingleOrderbyIdFromDB,
  getSingleUserAllOrdersByUserIdService,
  addPaymentInfoInOrderById,
  getOrdersUnderVendorByIdService,
  deleteOrderByIdService,
} = require("../services/order.service");

exports.createOrder = async (req, res, next) => {
  try {
    const order = await createOrderService(req.body);

    res.status(200).send({
      status: "success",
      message: "Order Completed SuccessFully",
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

// exports.getOrders = async (req, res, next) => {
//   try {
//     const result = await Order.aggregate([
//       {
//         $unwind: "$items",
//       },
//       {
//         $lookup: {
//           from: "products", // replace with your actual products collection name
//           localField: "items.productId",
//           foreignField: "_id",
//           as: "items.product",
//         },
//       },
//       {
//         $unwind: "$items.product",
//       },
//       {
//         $lookup: {
//           from: "users", // replace with your actual users collection name
//           localField: "orderedBy.id",
//           foreignField: "_id",
//           as: "orderedBy.user",
//         },
//       },
//       {
//         $lookup: {
//           from: "users", // replace with your actual users collection name
//           localField: "items.product.postedBy.id",
//           foreignField: "_id",
//           as: "items.product.postedBy.owner",
//         },
//       },
//     ]);
//     res.status(200).send({
//       status: "Success",
//       message: "Orders",
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

exports.getOrders = async (req, res, next) => {
  try {
    const result = await Order.aggregate([
      {
        $lookup: {
          from: "products", // replace with your actual products collection name
          localField: "items.productId",
          foreignField: "_id",
          as: "productDetails",
        },
      },
      {
        $addFields: {
          items: {
            $map: {
              input: "$items",
              as: "item",
              in: {
                $mergeObjects: [
                  "$$item",
                  {
                    productId: {
                      $arrayElemAt: [
                        {
                          $filter: {
                            input: "$productDetails",
                            as: "product",
                            cond: {
                              $eq: ["$$product._id", "$$item.productId"],
                            },
                          },
                        },
                        0,
                      ],
                    },
                  },
                ],
              },
            },
          },
        },
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
        $unwind: {
          path: "$orderedBy.user",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          productDetails: 0,
        },
      },
    ]);

    res.status(200).send({
      status: "Success",
      message: "Orders",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSingleUserAllOrdersByUserId = async (req, res, next) => {
  try {
    const { UserId } = req.params;
    const result = await getSingleUserAllOrdersByUserIdService(UserId);
    res.status(200).send({
      status: "Success",
      message: "Order Found Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
exports.getOrdersUnderVendorById = async (req, res, next) => {
  try {
    const { OwnerId } = req.params;
    console.log(OwnerId);
    const result = await getOrdersUnderVendorByIdService(OwnerId);
    res.status(200).send({
      status: "Success",
      message: "Order Found Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSingleOrderbyId = async (req, res, next) => {
  try {
    const { orderedId } = req.params;
    const result = await getSingleOrderbyIdFromDB(orderedId);
    res.status(200).send({
      status: "Success",
      message: "Order Found Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
exports.addPaymentInfoInOrders = async (req, res, next) => {
  try {
    const { orderedId } = req.params;
    const paymentInfo = req.body;
    console.log({ orderedId, paymentInfo });

    const result = await addPaymentInfoInOrderById(orderedId, paymentInfo);
    res.status(200).json({
      success: true,
      message: "Payment Info Added Successfully.",
      data: result,
    });
  } catch (error) {
    //  unexpected Error

    next(error);
  }
};

exports.deleteOrderById = async (req, res, next) => {
  try {
    const { orderedId } = req.params;
    console.log(orderedId);
    const product = await getSingleOrderbyIdFromDB(orderedId);
    if (!product) {
      return res.status(400).send({
        status: "failed",
        message: "Order not found with this id",
      });
    }
    const result = await deleteOrderByIdService(orderedId);
    if (!result.deletedCount) {
      return res.status(400).send({
        status: "failed",
        message: "Order didn't delete",
      });
    }

    res.status(200).send({
      status: "success",
      message: "Order deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
