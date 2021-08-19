const express = require("express");
const router = express.Router();
const Product = require("../controllers/product");

router.post("/create", Product.create);
router.get("/list", Product.list);

module.exports = router;
