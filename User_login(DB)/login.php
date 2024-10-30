<?php
session_start();
include 'config.php';  // Include the database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare and execute the SQL statement
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // Verify the password
        if (password_verify($password, $row['password'])) {
            // Store user information in session
            $_SESSION['username'] = $username;
            echo "Login successful! Welcome, " . $username;
            // Redirect to another page (optional)
            // header("Location: welcome.php");
            // exit();
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "No user found with that username.";
    }
    $stmt->close();
}
$conn->close();
?>
