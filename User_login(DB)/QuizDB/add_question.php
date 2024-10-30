<?php
include 'db.php'; // Include the database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $question_text = $_POST['question_text'];

    // Prepare SQL statement
    $stmt = $pdo->prepare("INSERT INTO questions (question_text) VALUES (:question_text)");
    $stmt->bindParam(':question_text', $question_text);
    
    // Execute the statement
    if ($stmt->execute()) {
        echo "New question added successfully!";
    } else {
        echo "Error adding question.";
    }
}
?>

<form method="POST">
    <label for="question_text">Question:</label>
    <textarea name="question_text" required></textarea>
    <input type="submit" value="Add Question">
</form>
