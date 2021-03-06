const express = require("express");
const burgers = require("../models/burgers.js");

const router = express.Router();
const columns = ["name", "patty_type", "has_lettuce", "has_tomato",
                "has_onion", "has_pickles", "has_bacon", "has_cheese",
                "has_ketchup", "has_mustard", "has_bbq", "price"];

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/orders", (req, res) => {
  burgers.selectAll(data => {
    res.render("orders", {orders: data});
  });
});

router.get("/create", (req, res) => {
  res.render("create");
});

router.get("/api/orders", (req, res) => {
  burgers.selectAll(data => {
    let ordersObject = {
      orders: data
    };
    console.log(ordersObject);
    res.json(ordersObject);
  });
});

router.post("/api/orders", (req, res) => {
  burgers.createOne(columns, [req.body.name, req.body.patty_type, req.body.has_lettuce,
    req.body.has_tomato, req.body.has_onion, req.body.has_pickles, req.body.has_bacon, 
    req.body.has_cheese, req.body.has_ketchup, req.body.has_mustard, req.body.has_bbq, 
    req.body.price], result => {
    res.json({id: result.insertId});
  });
});

router.delete("/api/orders/:orderNumber", (req, res) => {
  let condition = "order_number=" + req.params.orderNumber;
  burgers.delete(condition, result => {
    if(result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

module.exports = router;