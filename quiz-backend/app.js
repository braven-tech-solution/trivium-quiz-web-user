const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();

//  require routes:
const userRouter = require("./routes/user.route");
const imageRouter = require("./routes/imageupload.route");
const categoryRouter = require("./routes/category.route");
const subCategoryRoute = require("./routes/subCategory.route");
const productRouter = require("./routes/product.route");
const bannerRoute = require("./routes/banner.rotue");
const orderRoute = require("./routes/order.route");
const addTocartRoute = require("./routes/addToCart.route");
const settingROute = require("./routes/setting.route");
const quotationRoute = require("./routes/quotation.route");

//  use middlewares :
app.use(cors());
app.use(express.json());

//  use route middlewares:
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/v1/user", userRouter);
app.use("/api/v1/image", imageRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/sub-category", subCategoryRoute);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/banner", bannerRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/cart", addTocartRoute);
app.use("/api/v1/setting", settingROute);
app.use("/api/v1/quotation", quotationRoute);

// export app:
module.exports = app;
