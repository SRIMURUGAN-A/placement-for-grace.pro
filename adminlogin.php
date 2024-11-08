<?php
session_start();
if (!isset($_SESSION['admin_id'])) {
    header("Location: admin_login.php");
    exit();
}
include 'db_connection.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GRACE Admin Dashboard</title>
    <link rel="stylesheet" href="admin_dashboard.css">
</head>
<body>

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

<div class="admin-content">
    <h1>Welcome, Admin</h1>

    <div class="analytics">
        <div class="card">
            <h2>Total Students</h2>
            <p><?php echo getTotalStudents($conn); ?></p>
        </div>
        <div class="card">
            <h2>Courses Completed</h2>
            <p><?php echo getCoursesCompleted($conn); ?></p>
        </div>
        <div class="card">
            <h2>Active Users</h2>
            <p><?php echo getActiveUsers($conn); ?></p>
        </div>
        <div class="card">
            <h2>Upcoming Webinars</h2>
            <p><?php echo getUpcomingWebinars($conn); ?></p>
        </div>
    </div>

    <div class="latest-updates">
        <h2>Latest Blog Posts</h2>
        <?php
        $blogs = getLatestBlogs($conn);
        foreach ($blogs as $blog) {
            echo "<p>{$blog['title']} - {$blog['date']}</p>";
        }
        ?>
    </div>
</div>

</body>
</html>

<?php
function getTotalStudents($conn) {
    $result = $conn->query("SELECT COUNT(*) as total FROM students");
    return $result->fetch_assoc()['total'];
}

function getCoursesCompleted($conn) {
    $result = $conn->query("SELECT COUNT(*) as total FROM courses WHERE status = 'completed'");
    return $result->fetch_assoc()['total'];
}

function getActiveUsers($conn) {
    $result = $conn->query("SELECT COUNT(*) as total FROM users WHERE last_login >= NOW() - INTERVAL 7 DAY");
    return $result->fetch_assoc()['total'];
}

function getUpcomingWebinars($conn) {
    $result = $conn->query("SELECT COUNT(*) as total FROM webinars WHERE date >= NOW()");
    return $result->fetch_assoc()['total'];
}

function getLatestBlogs($conn) {
    return $conn->query("SELECT title, date FROM blog ORDER BY date DESC LIMIT 5")->fetch_all(MYSQLI_ASSOC);
}
?>
