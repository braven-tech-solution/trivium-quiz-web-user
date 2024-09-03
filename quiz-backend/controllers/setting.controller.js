const {
  createSettingService,
  getSettingService,
} = require("../services/setting.service");

exports.createSetting = async (req, res, next) => {
  try {
    console.log(req.body);
    const setting = await createSettingService(req.body);
    res.status(200).send({
      status: "success",
      message: "Setting created successfully",
      data: setting,
    });
  } catch (err) {
    next(err);
  }
};
exports.getSetting = async (req, res, next) => {
  try {
    const setting = await getSettingService();
    res.status(200).send({
      status: "success",
      message: "Setting retrieve successfully",
      data: setting,
    });
  } catch (err) {
    next(err);
  }
};
