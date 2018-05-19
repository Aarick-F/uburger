require("dotenv").config();
const mysql = require("mysql");

const connectionParams = {
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "burgers_db"
};

console.log(process.env.JAWS_DB);
let connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(connectionParams);
}

connection.connect(err => {
  if(err) {
    console.log(err);
    return;
  }
  console.log("Database connected on thread: " + connection.threadId);
});

module.exports = connection;