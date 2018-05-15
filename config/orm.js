const connection = require("./connection.js");

const orm = {
  selectAll: (table, cb) => {
    let queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, (err, result) => {
      if(err) throw err;
      cb(result);
    });
  }
}

module.exports = orm;