const connection = require("./connection.js");

makeQuestions = (num) => {
  let arr = [];
  for(let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

const orm = {
  selectAll: (table, cb) => {
    let queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, (err, result) => {
      if(err) throw err;
      cb(result);
    });
  },
  createOne: (table, cols, vals, cb) => {
    let queryString = "INSERT INTO " + table + " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += makeQuestions(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, (err, result) => {
      if(err) throw err;
      cb(result);
    });
  },
  delete: (table, condition, cb) => {
    let queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;
    connection.query(queryString, (err, result) => {
      if(err) throw err;
      cb(result);
    });
  }
}

module.exports = orm;