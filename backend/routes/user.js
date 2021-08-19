const express = require("express");
const router = express.Router();
const User = require("../controllers/user");

router.post("/create", User.create);
router.get("/list", User.list);

module.exports = router;