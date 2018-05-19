const orm = require("../config/orm.js");

const burger = {
  selectAll: cb => {
    orm.selectAll("orders", res => {
      cb(res);
    });
  },
  createOne: (cols, vals, cb) => {
    orm.createOne("orders", cols, vals, res => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("orders", condition, res => {
      cb(res);
    });
  }
}

module.exports = burger;