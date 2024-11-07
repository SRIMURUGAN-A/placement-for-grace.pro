<?php
// Include database connection
require 'config.php';

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if user exists
    $sql = "SELECT * FROM signup WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify password
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['role'] = $user['role'];
            echo "Login successful!";

            // Redirect based on role
            if ($user['role'] == 'admin') {
                header("Location: admin_page.php");
            } else {
                header("Location: home.php");
            }
        } else {
            echo "Incorrect password.";
        }
    } else {
        echo "User not found.";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=EDGE">
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
            <p>Approved by <br> AICTE,New Delhi</p>
            <img src="https://gracecoe.org/assets/img/au_logo.png" alt="logo" class="imag">
            <p>Affliate to ANNA <br>UNIVERSITY, Chennai</p>
            <img src="https://gracecoe.org/assets/img/iic_full_logo.png" alt="logo" class="imag">
            <img src="https://gracecoe.org/assets/img/edii_logo.png" alt="logo" class="imag">
        </div>
    </div>
    <div class="login_page">
        <h2>Login</h2>
        <form method="POST" action="login.php">
            <div class="input">
                <label class="used_for_display" for="username">Enter Your Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input">
                <label class="used_for_display" for="password">Enter Your Password</label>
                <input type="password" name="password" id="password" required>
            </div>
            <div class="radio">
                <input type="checkbox" name="check_box" id="check_box">
                <label for="check_box">Keep Sign in</label>
            </div>
            <div class="link">
               <a href="/forget-password">Forgot Password?</a>
               <a href="/register" class="dont_have_account">Don't Have Account?</a>
            </div>
            <div class="button">
                <button type="submit" class="used_for_display">Log In</button> 
                <button type="button" class="used_for_display" onclick="window.location.href='signup.php'" id="register-btn">Register</button>
            </div>
        </form>
    </div>
</body>
</html>
