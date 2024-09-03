const express = require("express");
const router = express.Router();
const settingController = require("../controllers/setting.controller");

router.route("/").post(settingController.createSetting);

router.route("/").get(settingController.getSetting);

module.exports = router;
