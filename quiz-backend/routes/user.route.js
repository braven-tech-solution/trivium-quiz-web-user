const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { verifyJWT } = require("../middlewares/verifyJWT.middleware");

router.route("/sign-up").post(userController.signUp);

router.route("/login").post(userController.logIn);
router.route("/me").get(verifyJWT, userController.getMe);
router.route("/me").patch(verifyJWT, userController.updateMe);
router.route("/").get(userController.getAllUser);
router.route("/").patch(userController.updateWithGmail);
// vendor
router.route("/pending-vendors").get(userController.getPendingVendors);
router.route("/approved-vendors").get(userController.getApprovedVendors);

module.exports = router;
