<?php
// Start the session
session_start();

// Include the database connection
require 'config.php'; // Assuming you have a config.php file for database connection

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect to login page if not logged in
    header("Location: login.php");
    exit;
}

// Fetch user data from the database
$user_id = $_SESSION['user_id'];
$query = "SELECT * FROM signup WHERE id = '$user_id'";
$result = mysqli_query($conn, $query);

if (!$result) {
    die("Database query failed: " . mysqli_error($conn));
}

$user = mysqli_fetch_assoc($result);

// Determine the greeting message based on the current time
date_default_timezone_set('Asia/Kolkata');
$hour = date('H');
if ($hour < 12) {
    $greeting = "Good Morning";
} elseif ($hour < 18) {
    $greeting = "Good Afternoon";
} else {
    $greeting = "Good Evening";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GRACE Student Dashboard</title>
    <link rel="stylesheet" href="dash_board.css"> <!-- Corrected CSS file name -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>

<body>
    <!-- Fixed Header Section -->
    <div class="fixed">
        <div class="first_line_logo">
            <img src="https://gracecoe.org/assets/img/g.png" alt="logo" id="image">
            <img src="https://gracecoe.org/assets/img/coe.png" alt="logo" id="image">
            <img src="https://gracecoe.org/assets/img/aicte_logo.png" alt="AICTE" class="imag">
            <p>Approved by <br> AICTE, New Delhi</p>
            <img src="https://gracecoe.org/assets/img/au_logo.png" alt="Anna University" class="imag">
            <p>Affiliated to ANNA <br> UNIVERSITY, Chennai</p>
            <img src="https://gracecoe.org/assets/img/iic_full_logo.png" alt="IIC" class="imag">
            <img src="https://gracecoe.org/assets/img/edii_logo.png" alt="EDII" class="imag">
        </div>

        <!-- Navigation Bar -->
        <div class="btn_navbar">
            <button type="button">HOME</button>
            <button type="button">ADMISSION</button>
            <button type="button">CONTACT US</button>
            <button type="button">ABOUT US</button>
            <button class="toggle-btn" onclick="toggleSidebar()"><i class="fa-solid fa-ellipsis-vertical"></i></button>
        </div>
    </div>

    <!-- Sidebar Menu -->
    <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick="closeSidebar()">×</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#training">Placement Training</a>
        <a href="#resources">Resources</a>
        <a href="#jobs">Job Opportunities</a>
        <a href="#skills">Skill Development</a>
        <a href="#news">News & Updates</a>
        <a href="#entrepreneurship">Entrepreneurship</a>
        <a href="#blog">Blog</a>
        <a href="logout.php">Logout</a>
    </div>

    <!-- Main Content Section -->
    <div class="not-fixed">
        <!-- Personalized Greeting & Motivational Quote -->
        <h1 class="welcome"><?php echo "$greeting, " . htmlspecialchars($user['email']) . "!"; ?></h1>
        <p class="quote">"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt</p>

        <!-- Search Bar -->
        <div class="search-container">
            <input type="text" placeholder="Search for free resources..." class="search-box">
            <button class="search-btn"><i class="fa fa-search"></i></button>
        </div>

        <!-- Skill Development Hub -->
        <div class="skill-development">
            <h1>Skill Development Hub</h1>
            <div class="skill-cards">
                <div class="skill-card">Python Programming</div>
                <div class="skill-card">Data Analysis</div>
                <div class="skill-card">Cybersecurity</div>
                <div class="skill-card">Machine Learning</div>
            </div>
        </div>

        <!-- Course and Training Progress -->
        <div class="fourth_container">
            <h1>Your Courses Progress</h1>
            <div class="progress-cards">
                <?php
                // Fetch user's enrolled courses
                $course_query = "SELECT * FROM courses WHERE user_id = '$user_id'";
                $course_result = mysqli_query($conn, $course_query);
                if ($course_result) {
                    while ($course = mysqli_fetch_assoc($course_result)) {
                        echo "<div class='course-card'>
                                <img src='https://via.placeholder.com/150' alt='Course'>
                                <p>{$course['course_name']}</p>
                              </div>";
                    }
                } else {
                    echo "Error fetching courses: " . mysqli_error($conn);
                }
                ?>
            </div>
        </div>

        <!-- Upcoming Webinars/Workshops -->
        <div class="webinars">
            <h1>Upcoming Webinars & Workshops</h1>
            <ul>
                <li>AI in Healthcare - Nov 15, 2024</li>
                <li>Cybersecurity Essentials - Nov 20, 2024</li>
                <li>Financial Planning for Students - Nov 25, 2024</li>
            </ul>
        </div>

        <!-- Career Path Exploration -->
        <div class="career-paths">
            <h1>Explore Career Paths</h1>
            <div class="career-card">
                <h2>Data Scientist</h2>
                <p>Skills: Python, Machine Learning, Data Visualization</p>
            </div>
            <div class="career-card">
                <h2>Web Developer</h2>
                <p>Skills: HTML, CSS, JavaScript, React</p>
            </div>
        </div>

        <!-- News and Updates Section -->
        <div class="news-container">
            <h1>Latest Industry News:</h1>
            <div class="news-carousel">
                <div class="news-item">
                    <h3>Finance</h3>
                    <p>Global markets rally amid economic optimism.</p>
                </div>
                <div class="news-item">
                    <h3>Tech</h3>
                    <p>New AI chip sets record for speed and efficiency.</p>
                </div>
                <div class="news-item">
                    <h3>Education</h3>
                    <p>Top universities partner for AI research initiatives.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- JavaScript for Sidebar -->
    <script src="dash_board.js"></script> <!-- Corrected JS file name -->
</body>

</html>
