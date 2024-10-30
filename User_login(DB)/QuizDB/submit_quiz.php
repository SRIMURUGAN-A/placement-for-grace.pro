<?php
include 'db.php'; // Include the database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_POST['user_id']; // Get user ID
    $responses = $_POST['responses']; // Assuming responses is an array of question_id => selected_answer_id

    foreach ($responses as $question_id => $selected_answer_id) {
        // Prepare SQL statement to insert quiz results
        $stmt = $pdo->prepare("INSERT INTO quiz_results (user_id, question_id, selected_answer_id) VALUES (:user_id, :question_id, :selected_answer_id)");
        $stmt->bindParam(':user_id', $user_id);
        $stmt->bindParam(':question_id', $question_id);
        $stmt->bindParam(':selected_answer_id', $selected_answer_id);
        $stmt->execute();
    }
    echo "Quiz results submitted successfully!";
}
?>

<form method="POST">
    <input type="hidden" name="user_id" value="1"> <!-- Replace with actual user ID -->
    <!-- Here you would dynamically generate the questions and their answer options -->
    <input type="submit" value="Submit Quiz">
</form>
