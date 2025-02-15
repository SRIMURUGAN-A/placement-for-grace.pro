CREATE DATABASE courseDB;
USE courseDB;

CREATE TABLE enrollments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    course VARCHAR(255)
);
