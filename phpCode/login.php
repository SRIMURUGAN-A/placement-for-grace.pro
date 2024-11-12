<?php
// Include database connection
require 'config.php'; // Assuming your DB connection file is named 'db_connection.php'

session_start();

// Function to regenerate session ID to prevent session fixation
function regenerateSession() {
    if (session_status() === PHP_SESSION_ACTIVE) {
        session_regenerate_id(true);
    }
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    // Prepared statement to fetch user details
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if user exists
    if ($result && $result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify the password
        if (password_verify($password, $user['password'])) {
            // Regenerate session to prevent session fixation
            regenerateSession();

            // Store user data in session variables
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['email'];
            $_SESSION['role'] = $user['role'];
            $_SESSION['last_login'] = $user['last_login'];

            // Update last login time
            $updateStmt = $conn->prepare("UPDATE users SET last_login = NOW() WHERE id = ?");
            $updateStmt->bind_param("i", $user['id']);
            $updateStmt->execute();

            // Log user login details (Optional logging table)
            $loginStmt = $conn->prepare("INSERT INTO login (user_id, username, login_time) VALUES (?, ?, NOW())");
            $loginStmt->bind_param("is", $user['id'], $user['email']);
            $loginStmt->execute();

            // Role-based redirection
            if ($user['role'] === 'admin') {
                header("Location: admin_dashboard.php");
                exit();
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

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
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
            <img src="https://gracecoe.org/assets/img/g.png" alt="Grace Logo" id="image">
            <img src="https://gracecoe.org/assets/img/coe.png" alt="College Logo" id="image">
            <img src="https://gracecoe.org/assets/img/aicte_logo.png" alt="AICTE Logo" class="imag">
            <p>Approved by <br> AICTE, New Delhi</p>
            <img src="https://gracecoe.org/assets/img/au_logo.png" alt="AU Logo" class="imag">
            <p>Affiliated to ANNA <br> UNIVERSITY, Chennai</p>
            <img src="https://gracecoe.org/assets/img/iic_full_logo.png" alt="IIC Logo" class="imag">
            <img src="https://gracecoe.org/assets/img/edii_logo.png" alt="EDII Logo" class="imag">
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
