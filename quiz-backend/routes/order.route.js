const express = require("express");
const orderController = require("../controllers/order.controller");
const router = express.Router();

router.route("/create-Order").post(orderController.createOrder);
router.route("/").get(orderController.getOrders);
router.route("/:orderedId").get(orderController.getSingleOrderbyId);
router.route("/:orderedId").delete(orderController.deleteOrderById);
router
  .route("/user/:UserId")
  .get(orderController.getSingleUserAllOrdersByUserId);
router
  .route("/user/:OwnerId/Orders")
  .get(orderController.getOrdersUnderVendorById);
router
  .route("/:orderedId/paymentInfo")
  .put(orderController.addPaymentInfoInOrders);

module.exports = router;
