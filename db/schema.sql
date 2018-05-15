DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE orders (
  order_number INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  patty_type VARCHAR(50) NOT NULL,
  has_lettuce BIT DEFAULT 0,
  has_tomato BIT DEFAULT 0,
  has_onion BIT DEFAULT 0,
  has_pickles BIT DEFAULT 0,
  has_bacon BIT DEFAULT 0,
  has_cheese BIT DEFAULT 0,
  has_ketchup BIT DEFAULT 0,
  has_mustard BIT DEFAULT 0,
  has_bbq BIT DEFAULT 0,
  price DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY(order_number)
);