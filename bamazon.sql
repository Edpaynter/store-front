DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(75) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT(8) NOT NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Air Force 1', "Shoes",80, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Jordan Retro 1', "Shoes", 110, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Vans Old Skool' , "Shoes", 65, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Sweatshirt', "Clothing", 65, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Shirt', "Clothing", 45, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Jeans', "Clothing", 75, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Hat', "Accessories", 30, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Wallet', "Accessories", 45, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bag', "Accessories", 65, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Sticker', "Misc", 5, 90);



SELECT * FROM products;