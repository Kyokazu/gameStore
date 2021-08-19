const express = require("express");
const router = express.Router();
const Sales = require("../controllers/sales");

router.post("/create", Sales.create);
router.get("/list", Sales.list);

module.exports = router;
