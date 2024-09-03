const Setting = require("../models/setting.model");

exports.createSettingService = async (data) => {
  try {
    let setting = await Setting.findOne();

    if (setting) {
      // If setting exists, update it with the new data
      setting = Object.assign(setting, data);
    } else {
      // If setting does not exist, create a new one with the provided data
      setting = new Setting(data);
    }

    const result = await setting.save();
    return result;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error creating/updating setting:", error);
    throw error;
  }
};
exports.getSettingService = async () => {
  try {
    // Find the single setting document (assuming there's only one)
    const setting = await Setting.findOne();

    // If the setting is not found, return null
    if (!setting) {
      return null;
    }

    // If the setting is found, return it
    return setting;
  } catch (error) {
    // If an error occurs, handle it appropriately
    console.error("Error fetching setting:", error);
    throw error; // You can choose to handle or propagate the error as needed
  }
};
