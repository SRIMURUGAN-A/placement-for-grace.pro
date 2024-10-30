<?php
// Database configuration
$host = 'localhost';  // your host
$dbname = 'loginpage';  // your database name
$username = 'root';  // your MySQL username (root for localhost)
$password = '';  // your MySQL password (leave empty if using XAMPP)

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
