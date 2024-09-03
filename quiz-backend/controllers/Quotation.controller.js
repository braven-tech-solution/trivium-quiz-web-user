const {
  createQuotationService,
  getAllQuotationFromDB,
  getSingleQuotationByIdFromDB,
  deleteQuotationByByIdService,
} = require("../services/Quotation.service");

exports.createQuotation = async (req, res, next) => {
  try {
    console.log(req.body);
    const quotation = await createQuotationService(req.body);

    res.status(200).send({
      status: "success",
      message: "Quotation Completed SuccessFully",
      data: quotation,
    });
  } catch (error) {
    next(error);
  }
};

exports.getQuotation = async (req, res, next) => {
  try {
    const result = await getAllQuotationFromDB();
    res.status(200).send({
      status: "success",
      message: "All Quotation fetched SuccessFully",
      data: result,
    });
  } catch (error) {}
};

exports.getSIngleQuotation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getSingleQuotationByIdFromDB(id);
    res.status(200).send({
      status: "Success",
      message: "Quotation Found Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteQuotationById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await getSingleQuotationByIdFromDB(id);
    if (!product) {
      return res.status(400).send({
        status: "failed",
        message: "Quotation not found with this id",
      });
    }
    const result = await deleteQuotationByByIdService(id);
    if (!result.deletedCount) {
      return res.status(400).send({
        status: "failed",
        message: "Quotation didn't delete",
      });
    }

    res.status(200).send({
      status: "success",
      message: "Quotation deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
