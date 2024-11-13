<?php
session_start();
require 'config.php';

// Check if the admin is logged in
if (!isset($_SESSION['admin_id'])) {
    header("Location: admin_login.php");
    exit();
}

// Fetch data for analytics cards
$total_students = $conn->query("SELECT COUNT(*) as count FROM students")->fetch_assoc()['count'];
$active_students = $conn->query("SELECT COUNT(*) as count FROM student_profile WHERE active_status = 1")->fetch_assoc()['count'];
$courses_completed = $conn->query("SELECT COUNT(*) as count FROM courses WHERE status = 'completed'")->fetch_assoc()['count'];
$average_progress = $conn->query("SELECT AVG(course_progress) as avg FROM student_profile")->fetch_assoc()['avg'];
$active_users = $conn->query("SELECT COUNT(*) as total FROM users WHERE last_login >= NOW() - INTERVAL 7 DAY")->fetch_assoc()['total'];
$upcoming_webinars = $conn->query("SELECT COUNT(*) as total FROM webinars WHERE date >= NOW()")->fetch_assoc()['total'];

// Fetch latest blog posts
$blogs = $conn->query("SELECT title, date FROM blog ORDER BY date DESC LIMIT 5")->fetch_all(MYSQLI_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GRACE Admin Dashboard</title>
    <link rel="stylesheet" href="admin_dashboard.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>

<!-- Sidebar -->
<div class="admin-sidebar">
    <h3>GRACE Admin</h3>
    <a href="admin_dashboard.php">Dashboard</a>
    <a href="manage_students.php">Manage Students</a>
    <a href="manage_jobs.php">Job Opportunities</a>
    <a href="manage_courses.php">Skill Development</a>
    <a href="manage_blog.php">Blog & News</a>
    <a href="reports.php">Reports</a>
    <a href="admin_settings.php">Settings</a>
    <a href="logout.php">Logout</a>
</div>

<!-- Main Content -->
<div class="admin-content">
    <h1>Welcome, Admin</h1>
    
    <!-- Analytics Section -->
    <div class="analytics">
        <div class="card">
            <h2>Total Students</h2>
            <p><?php echo $total_students; ?></p>
        </div>
        <div class="card">
            <h2>Active Students</h2>
            <p><?php echo $active_students; ?></p>
        </div>
        <div class="card">
            <h2>Courses Completed</h2>
            <p><?php echo $courses_completed; ?></p>
        </div>
        <div class="card">
            <h2>Avg. Course Progress</h2>
            <p><?php echo round($average_progress); ?>%</p>
        </div>
        <div class="card">
            <h2>Active Users (Last 7 Days)</h2>
            <p><?php echo $active_users; ?></p>
        </div>
        <div class="card">
            <h2>Upcoming Webinars</h2>
            <p><?php echo $upcoming_webinars; ?></p>
        </div>
    </div>
    
    <!-- Chart Section -->
    <div class="chart-section">
        <canvas id="studentChart"></canvas>
    </div>
    <script>
        const ctx = document.getElementById('studentChart').getContext('2d');
        const studentChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Total Students', 'Active Students', 'Courses Completed'],
                datasets: [{
                    label: 'Student Analytics',
                    data: [<?php echo $total_students; ?>, <?php echo $active_students; ?>, <?php echo $courses_completed; ?>],
                    backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
                }]
            }
        });
    </script>
    
    <!-- Latest Blog Posts Section -->
    <div class="latest-updates">
        <h2>Latest Blog Posts</h2>
        <?php if (!empty($blogs)) { 
            foreach ($blogs as $blog) { ?>
                <p><?php echo $blog['title']; ?> - <?php echo $blog['date']; ?></p>
        <?php } 
        } else { ?>
            <p>No recent blog posts available.</p>
        <?php } ?>
    </div>
</div>

</body>
</html>
