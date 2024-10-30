<?php
include 'db.php'; // Include the database connection

// Prepare SQL statement to fetch all questions
$stmt = $pdo->query("SELECT * FROM questions");
$questions = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($questions as $question) {
    echo "ID: " . $question['id'] . " - Question: " . $question['question_text'] . "<br>";
}
?>
