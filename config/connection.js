require("dotenv").config();
const mysql = require("mysql");

const connectionParams = {
  host: "localhost",
  user: "root"
  password: "pleasework",
  database: "burgers_db"
};

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection(connectionParams);
}

connection.connect(err => {
  if(err) {
    console.log(err);
    return;
  }
  console.log("Database connected on thread: " + connection.threadId);
});

module.exports = connection;