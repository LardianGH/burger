 drop database if exists burgers_db;
 
 create database burgers_db;

 use burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(30) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);