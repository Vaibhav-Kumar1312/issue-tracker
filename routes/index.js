const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send("<h1>homepage</h1>");
});

module.exports = router;
