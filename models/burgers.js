const orm = require("../config/orm.js");

const burger = {
  selectAll: cb => {
    orm.selectAll("orders", res => {
      cb(res);
    });
  }
}

module.exports = burger;