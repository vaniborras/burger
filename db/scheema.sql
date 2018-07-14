DROP DATABASE arepa_db;
CREATE DATABASE arepa_db;
USE arepa_db;

CREATE TABLE arepa (
	id INT NOT NULL AUTO_INCREMENT,
	arepa_ingredient VARCHAR (255) NOT NULL,
	ordered BOOL DEFAULT false,
	PRIMARY KEY (id)
);

