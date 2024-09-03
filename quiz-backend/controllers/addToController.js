const addToCartServices = require("../services/addToCart.service");

exports.createAddToCart = async (req, res, next) => {
  try {
    const cart = await addToCartServices.createAddToCartService(req.body);

    res.status(200).send({
      status: "success",
      message: "Added To Cart Successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSingleCartById = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await addToCartServices.getSingleCartByIdFromDB(userId);
    res.status(200).send({
      status: "Success",
      message: "Cart Found Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
exports.updateSingleCartById = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const updatedData = req.body;
    const result = await addToCartServices.updateSingleCartByIdIntoDB(
      userId,
      updatedData
    );
    res.status(200).send({
      status: "Success",
      message: "Update Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
exports.deleteCartById = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const result = await addToCartServices.deleteCartByIdFromDB(userId);
    res.status(200).send({
      status: "Success",
      message: "Cart Deleted Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
