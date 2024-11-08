<?php
// Include database connection
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    $role = $_POST['role'];

    // Check if passwords match
    if ($password !== $confirm_password) {
        echo "Passwords do not match.";
        exit();
    }

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Check if user already exists
    $sql = "SELECT * FROM signup WHERE email='$email'";
    $result = $conn->query($sql);

    if (!$result) {
        echo "Error: " . $conn->error;
        exit();
    }

    if ($result->num_rows > 0) {
        echo "User already exists.";
    } else {
        // Insert new user into the database
        $sql = "INSERT INTO signup (username, password, email, role) VALUES ('$username', '$hashed_password', '$email', '$role')";

        if ($conn->query($sql) === TRUE) {
            echo "Signup successful!";
            // Redirect based on role
            if ($role == 'admin') {
                header("Location: admin_page.php");
            } else {
                header("Location: home.php");
            }
        } else {
            echo "Error: " . $conn->error;
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=EDGE">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="register.css">
    <title>GRACE COLLEGE OF Engineering</title>
    <link rel="icon" href="https://www.gracecoe.org/assets/img/gcoe_logo.png" type="image/jpeg">
    <script>
        // Function to check the checkbox status before form submission
        function validateForm(event) {
            var checkbox = document.getElementById('check_box');
            if (!checkbox.checked) {
                event.preventDefault();  // Prevent form submission
                alert('You must agree to the terms and conditions.');
            }
        }
    </script>
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
        <h2>Register</h2>
        <form method="POST" action="signup.php" onsubmit="validateForm(event)">
            <div class="input">
                <label class="used_for_display" for="username">Enter Your Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input">
                <label class="used_for_display" for="email">Enter Your Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="input">
                <label class="used_for_display" for="password">Enter Your Password</label>
                <input type="password" name="password" id="password" required>
            </div>
            <div class="input">
                <label class="used_for_display" for="confirm_password">Confirm Your Password</label>
                <input type="password" name="confirm_password" id="confirm_password" required>
            </div>
            <div class="input">
                <label class="used_for_display" for="role">Select Your Role</label>
                <select id="role" name="role">
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div class="radio">
                <input type="checkbox" name="check_box" id="check_box">
                <label for="check_box">I agree <a href="terms.php" target="_blank"><span>TERMS AND CONDITIONS</span></a></label>
            </div>

            <div class="button">
                <button type="submit" class="used_for_display">Register</button>
                <button type="button" class="used_for_display" onclick="window.location.href='./login.php'" id="login-btn">Log In</button>
            </div>
        </form>
    </div>
</body>
</html>
