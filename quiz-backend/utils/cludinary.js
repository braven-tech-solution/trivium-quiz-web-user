const cloudinary = require("cloudinary").v2;
cloudinary.config({
  // cloud_name: process.env.CLOUD_NAME,
  cloud_name: "dxiygdbvg",
  // api_key: process.env.API_KEY,
  api_key: "456391336346625",
  // api_secret: process.env.API_SECRET,
  api_secret: "8laT-oBziAiLjqBRWZvadx4K_Nk",
});

module.exports = cloudinary;
