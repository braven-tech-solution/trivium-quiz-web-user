const express = require("express");
const quotationCOntroller = require("../controllers/Quotation.controller");
const router = express.Router();

router.route("/").post(quotationCOntroller.createQuotation);
router.route("/").get(quotationCOntroller.getQuotation);
router.route("/:id").get(quotationCOntroller.getSIngleQuotation);
router.route("/:id").delete(quotationCOntroller.deleteQuotationById);

module.exports = router;
