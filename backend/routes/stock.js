const express = require("express");
const router = express.Router();
const Stock = require("../controllers/stock");

router.post("/create", Stock.create);
router.get("/list", Stock.list);

module.exports = router;
