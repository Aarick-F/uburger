const express = require("express");
const burgers = require("../models/burgers.js");

const router = express.Router();

router.get("/", (req, res) => {
  burgers.selectAll(data => {
    let ordersObject = {
      orders: data
    };
    console.log(ordersObject);
    res.render("index", ordersObject);
  });
});

module.exports = router;