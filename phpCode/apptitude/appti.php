<?php
// Start session to handle user login
session_start();

// Database connection (adjust these parameters as needed)
$servername = "localhost";
$username = "root";
$password = "";
$database = "userlogin"; // replace with your database name

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if user is logged in
$isLoggedIn = isset($_SESSION['email']);
?>

<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=EDGE">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="appti.css">
    <title>APPTITUDE</title>
    <link rel="icon" href="https://www.gracecoe.org/assets/img/gcoe_logo.png" type="image/jpeg">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>

<body>
    <div class="fixed">
        <div class="first_line_logo">
            <img src="https://gracecoe.org/assets/img/g.png" alt="logo" id="image">
            <img src="https://gracecoe.org/assets/img/coe.png" alt="logo" id="image">
            <img src="https://gracecoe.org/assets/img/aicte_logo.png" alt="logo" class="imag">
            <p>Approved by <br> AICTE, New Delhi</p>
            <img src="https://gracecoe.org/assets/img/au_logo.png" alt="logo" class="imag">
            <p>Affiliated to ANNA <br> UNIVERSITY, Chennai</p>
            <img src="https://gracecoe.org/assets/img/iic_full_logo.png" alt="logo" class="imag">
            <img src="https://gracecoe.org/assets/img/edii_logo.png" alt="logo" class="imag">
        </div>

        <div class="second_container">
            <div class="second-container-nav">
                <nav>
                    <ul>
                        <li><a href="#" class="courses-link">Courses</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </nav>
            </div>
            
            <div class="second-container-icons-and-button">
                <div class="second-container-icons">
                    <a href="mailto:info@example.com"><i class="fa-solid fa-envelope"></i></a>
                    <a href="#"><i class="fa-solid fa-bell"></i></a>
                    <?php if ($isLoggedIn): ?>
                        <a href="profile.php"><i class="fa-solid fa-user"></i> Welcome, <?php echo $_SESSION['email']; ?></a>
                    <?php else: ?>
                        <a href="login.php"><i class="fa-solid fa-sign-in-alt"></i> Login</a>
                    <?php endif; ?>
                </div>
                <button class="second-toggle-btn" onclick="secondtoggleSidebar()">☰</button>
            </div>
        </div>
    </div>

    <div class="not-fixed">
        <div class="appti_heading_column" id="sidebar">
            <button class="close-btn" id="close-btn">&times;</button>
            <h4>APPTITUDE</h4>
            <ul>
                <li><a href="javascript:void(0)" class="info-link" data-info="q_and_a">Arithmetic Aptitude</a></li>
                <div class="sub_heading_apptitude" id="q_and_a">
                    <ul>
                        <li><a href="javascript:void(0)" onclick="loadContent('./content/Problems_on_Train')">Problems on Train</a></li>
                        <li><a href="javascript:void(0)" onclick="loadContent('./content/Time_and_Distance')">Time and Distance</a></li>
                        <li><a href="javascript:void(0)" onclick="loadContent('./content/Profit_and_Loss')">Profit and Loss</a></li>
                    </ul>
                </div>
            </ul>
        </div>
    </div>

    <?php
    // Display a welcome message if the user is logged in
    if ($isLoggedIn) {
        echo "<p>Welcome back, " . $_SESSION['email'] . "!</p>";
    }
    ?>
</body>

</html>
