<?php
// Include database connection
include('config.php');

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data
    $full_name = $_POST['full_name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $department = $_POST['department'];
    $year_of_study = $_POST['year_of_study'];
    $career_goal = $_POST['career_goal'];
    $interested_areas = $_POST['interested_areas'];
    $financial_goal = $_POST['financial_goal'];
    $job_interested = $_POST['job_interested'];
    $startup_interest = $_POST['startup_interest'];
    $skills = $_POST['skills'];
    $hobbies = $_POST['hobbies'];
    $project_interests = $_POST['project_interests'];
    $additional_notes = $_POST['additional_notes'];

    // Server-side validation (can be expanded as needed)
    if (empty($full_name) || empty($email) || empty($phone_number)) {
        echo "Please fill in all required fields.";
    } else {
        // Prepare the SQL query to insert data into the database
        $query = "INSERT INTO student_profiles 
                    (full_name, age, gender, email, phone_number, department, year_of_study, career_goal, 
                    interested_areas, financial_goal, job_interested, startup_interest, skills, hobbies, 
                    project_interests, additional_notes)
                  VALUES 
                    ('$full_name', '$age', '$gender', '$email', '$phone_number', '$department', 
                    '$year_of_study', '$career_goal', '$interested_areas', '$financial_goal', 
                    '$job_interested', '$startup_interest', '$skills', '$hobbies', '$project_interests', '$additional_notes')";

        // Execute the query and check for success
        if (mysqli_query($conn, $query)) {
            // Redirect to a new page and pass the name for the welcome message
            header("Location: welcome.php?name=" . urlencode($full_name));
            exit();
        } else {
            echo "Error: " . $query . "<br>" . mysqli_error($conn);
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
    <script src="register.js" defer></script>
    <title>Register</title>
</head>

<body>
    <div class="fixed">
        <div class="first_line_logo">
            <img src="https://gracecoe.org/assets/img/g.png" alt="logo" id="first_image">
            <img src="https://gracecoe.org/assets/img/coe.png" alt="logo" id="second_image">
            <img src="https://gracecoe.org/assets/img/aicte_logo.png" alt="logo" id="third_image">
            <p>Approved by <br> AICTE,New Delhi</p>
            <img src="https://gracecoe.org/assets/img/au_logo.png" alt="logo" id="fourth_image">
            <p>Affliate to <br>ANNA UNIVERSITY, Chennai</p>
            <img src="https://gracecoe.org/assets/img/iic_full_logo.png" alt="logo" id="fifth_image">
            <img src="https://gracecoe.org/assets/img/edii_logo.png" alt="logo" id="sixth_image">
        </div>
        <div class="btn_navbar">
            <button type="button">HOME</button>
            <button type="button">ADMISSION</button>
            <button type="button">ABOUT US</button>
        </div>
    </div>

    <div class="not_fixed">
        <div class="heading">
            <h4>WELCOME TO <span class="highlight">GRACE</span> PLACEMENT SITE...</h4>
            <h3>Welcome Roger</h3>
            <h4>Tell us more about yourself and your goals:</h4>
        </div>
        <form action="submit_profile.php" method="POST" id="student_profile_form">
            <div class="questions">
                <!-- Full Name -->
                <div class="question">
                    <label for="full_name">Full Name:</label>
                    <input type="text" id="full_name" name="full_name" placeholder="Enter your full name" required>
                </div>

                <!-- Age -->
                <div class="question">
                    <label for="age">Age:</label>
                    <input type="number" id="age" name="age" placeholder="Enter your age" required>
                </div>

                <!-- Gender -->
                <div class="question">
                    <label>Gender:</label>
                    <input type="radio" id="male" name="gender" value="Male" required> Male
                    <input type="radio" id="female" name="gender" value="Female"> Female
                    <input type="radio" id="other" name="gender" value="Other"> Other
                </div>

                <!-- Email -->
                <div class="question">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
                </div>

                <!-- Phone Number -->
                <div class="question">
                    <label for="phone_number">Phone Number:</label>
                    <input type="tel" id="phone_number" name="phone_number" placeholder="Enter your phone number" required>
                </div>

                <!-- Department -->
                <div class="question">
                    <label for="department">Department:</label>
                    <input type="text" id="department" name="department" placeholder="Enter your department" required>
                </div>

                <!-- Year of Study -->
                <div class="question">
                    <label for="year_of_study">Year of Study:</label>
                    <select id="year_of_study" name="year_of_study">
                        <option value="First Year">First Year</option>
                        <option value="Second Year">Second Year</option>
                        <option value="Third Year">Third Year</option>
                        <option value="Fourth Year">Fourth Year</option>
                    </select>
                </div>

                <!-- Career Goal -->
                <div class="question">
                    <label for="career_goal">Career Goal:</label>
                    <textarea id="career_goal" name="career_goal" placeholder="Describe your career goals" required></textarea>
                </div>

                <!-- Interested Areas -->
                <div class="question">
                    <label for="interested_areas">Areas you're interested in (comma-separated):</label>
                    <input type="text" id="interested_areas" name="interested_areas" placeholder="E.g., AI, Data Science" required>
                </div>

                <!-- Financial Goal -->
                <div class="question">
                    <label for="financial_goal">Financial Goal:</label>
                    <input type="text" id="financial_goal" name="financial_goal" placeholder="Enter your financial goal" required>
                </div>

                <!-- Job Interest -->
                <div class="question">
                    <label>Are you looking for a job?</label>
                    <input type="radio" id="job_yes" name="job_interested" value="Yes" required> Yes
                    <input type="radio" id="job_no" name="job_interested" value="No"> No
                </div>

                <!-- Startup Interest -->
                <div class="question">
                    <label>Are you interested in starting a startup?</label>
                    <input type="radio" id="startup_yes" name="startup_interest" value="Yes" required> Yes
                    <input type="radio" id="startup_no" name="startup_interest" value="No"> No
                </div>

                <!-- Skills -->
                <div class="question">
                    <label for="skills">Skills you want to develop (comma-separated):</label>
                    <input type="text" id="skills" name="skills" placeholder="E.g., Python, Data Analysis" required>
                </div>

                <!-- Hobbies -->
                <div class="question">
                    <label for="hobbies">Hobbies (comma-separated):</label>
                    <input type="text" id="hobbies" name="hobbies" placeholder="E.g., Reading, Hiking" required>
                </div>

                <!-- Project Interests -->
                <div class="question">
                    <label for="project_interests">Project Interests:</label>
                    <input type="text" id="project_interests" name="project_interests" placeholder="Enter your project interests" required>
                </div>

                <!-- Additional Notes -->
                <div class="question">
                    <label for="additional_notes">Additional Notes:</label>
                    <textarea id="additional_notes" name="additional_notes" placeholder="Any other details you want to share"></textarea>
                </div>

                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</body>

</html>
