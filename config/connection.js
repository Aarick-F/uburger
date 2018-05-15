require("dotenv").config();
const mysql = require("mysql");

const connectionParams = {
  port: process.env.DB_PORT,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
};

const connection = mysql.createConnection(connectionParams);

connection.connect(err => {
  if(err) {
    console.log(err);
    return;
  }
  console.log("Database connected on thread: " + connection.threadId);
});

module.exports = connection;