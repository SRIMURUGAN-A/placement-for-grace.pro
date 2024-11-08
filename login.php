<?php
// Include database connection
require 'config.php';

session_start();

// Function to prevent session fixation attacks
function regenerateSession() {
    if (session_status() === PHP_SESSION_ACTIVE) {
        session_regenerate_id(true);
    }
}

// Check if the request is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    // Prepared statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM signup WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if user exists
    if ($result && $result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify password
        if (password_verify($password, $user['password'])) {
            // Regenerate session ID
            regenerateSession();

            // Store user data in session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['role'] = $user['role'];

            // Store user login details in the `login` table
            $loginStmt = $conn->prepare("INSERT INTO login (user_id, username, login_time) VALUES (?, ?, NOW())");
            $loginStmt->bind_param("is", $user['id'], $user['username']);
            $loginStmt->execute();
            $loginStmt->close();

           // Role-based redirection
if ($user['role'] == 'admin') {
    header("Location: adminlogin.php"); // Corrected redirection for admin
    exit(); // Ensure no further code is executed
} else {
    header("Location: home.php");
    exit();
}

        } else {
            echo "<script>alert('Incorrect password.');</script>";
        }
    } else {
        echo "<script>alert('User not found.');</script>";
    }
    $stmt->close();
}
$conn->close();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login_page.css">
    <title>GRACE COLLEGE OF Engineering</title>
    <link rel="icon" href="https://www.gracecoe.org/assets/img/gcoe_logo.png" type="image/jpeg">
</head>
<body>
    <div class="login-page-navbar">
        <div class="first_line_logo">
            <img src="https://gracecoe.org/assets/img/g.png" alt="logo" id="image">
            <img src="https://gracecoe.org/assets/img/coe.png" alt="logo" id="image">
            <img src="https://gracecoe.org/assets/img/aicte_logo.png" alt="logo" class="imag">
            <p>Approved by <br> AICTE, New Delhi</p>
            <img src="https://gracecoe.org/assets/img/au_logo.png" alt="logo" class="imag">
            <p>Affiliated to ANNA <br>UNIVERSITY, Chennai</p>
            <img src="https://gracecoe.org/assets/img/iic_full_logo.png" alt="logo" class="imag">
            <img src="https://gracecoe.org/assets/img/edii_logo.png" alt="logo" class="imag">
        </div>
    </div>
    <div class="login_page">
        <h2>Login</h2>
        <form method="POST" action="login.php">
            <div class="input">
                <label class="used_for_display" for="username">Enter Your Username or Email</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input">
                <label class="used_for_display" for="password">Enter Your Password</label>
                <input type="password" name="password" id="password" required>
            </div>
            <div class="radio">
                <input type="checkbox" name="check_box" id="check_box">
                <label for="check_box">Keep me signed in</label>
            </div>
            <div class="link">
                <a href="/forget-password">Forgot Password?</a>
                <a href="/register" class="dont_have_account">Don't Have an Account?</a>
            </div>
            <div class="button">
                <button type="submit" class="used_for_display">Log In</button> 
                <button type="button" class="used_for_display" onclick="window.location.href='signup.php'" id="register-btn">Register</button>
            </div>
        </form>
    </div>
</body>
</html>
