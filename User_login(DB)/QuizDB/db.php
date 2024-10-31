<?php
$host = 'localhost'; // Host name
$db = 'quiz_application'; // Database name
$user = 'root'; // Database username (default for XAMPP)
$pass = ''; // Database password (default is empty for XAMPP)

try {
    // Create a PDO connection
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
