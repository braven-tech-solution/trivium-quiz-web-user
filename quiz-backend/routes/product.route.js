const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

router.route("/cart").post(productController.getCartedProducts);

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router.route("/owner").get(productController.getAllProductByOwner);

router
  .route("/:id")
  .get(productController.getProductById)
  .delete(productController.deleteProductById)
  .patch(productController.updateProductById);

module.exports = router;
