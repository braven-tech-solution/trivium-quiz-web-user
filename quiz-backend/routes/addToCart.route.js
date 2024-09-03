const express = require("express");
const router = express.Router();
const bannerController = require("../controllers/banner.controller");
const addToCartController = require("../controllers/addToController");

router
  .route("/")
  //   .get(bannerController.getAllBanners)
  .post(addToCartController.createAddToCart);

router
  .route("/:userId")
  .get(addToCartController.getSingleCartById)
  .patch(addToCartController.updateSingleCartById)
  .delete(addToCartController.deleteCartById);
module.exports = router;
