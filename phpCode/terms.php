<?php
// Include database connection
require 'config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms and Conditions - GRACE PLACEMENT.CLUB</title>
    <!-- Link to the terms.css for styling the terms page -->
    <link rel="stylesheet" href="terms.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            // Open the modal when the Terms link is clicked
            $('#terms-link').click(function(e) {
                e.preventDefault();
                $('#terms-modal').fadeIn();
            });

            // Close the modal when the close button is clicked
            $('#close-modal').click(function() {
                $('#terms-modal').fadeOut();
            });
        });
    </script>
    <style>
        /* General body styling */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f7fa;
            color: #333;
            margin: 0;
            padding: 0;
        }

        /* Header styling */
        h1 {
            text-align: center;
            color: #007BFF;
            margin-top: 30px;
        }

        /* Styling for the terms content */
        .terms-container {
            width: 80%;
            margin: 30px auto;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .terms-container h3 {
            color: #007BFF;
            font-size: 20px;
            margin-top: 20px;
        }

        .terms-container p {
            line-height: 1.6;
            font-size: 16px;
        }

        .back-button {
            background-color: #28a745;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            display: inline-block;
            margin-top: 20px;
            font-size: 16px;
        }

        .back-button:hover {
            background-color: #218838;
        }

        .terms-container .modal-header {
            font-size: 22px;
            color: #007BFF;
        }

        /* Modal styling */
        #terms-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            overflow-y: auto;
        }

        #modal-content {
            background-color: white;
            padding: 20px;
            margin: 50px auto;
            width: 80%;
            max-width: 800px;
            border-radius: 8px;
            overflow: auto;
            height: 80%;
        }

        #close-modal {
            background-color: #f44336;
            color: white;
            padding: 10px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            float: right;
        }

        /* Style for terms and conditions */
        #terms-modal h2 {
            margin-top: 0;
        }
    </style>
</head>
<body>

    <div class="terms-container">
        <h1>Terms and Conditions - GRACE PLACEMENT.CLUB</h1>

        <p><strong>Last Updated: <?php echo date("d/m/Y"); ?></strong></p>
        <p>Welcome to GRACE PLACEMENT.CLUB! These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our website.</p>
        
        <h3>1. Acceptance of Terms:</h3>
        <p>By accessing and using our website, you accept and agree to be bound by these terms and conditions, as well as our privacy policy. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the new terms.</p>

        <h3>2. User Eligibility:</h3>
        <p>Our services are intended for college students and recent graduates seeking placement opportunities and skill development resources. By using our website, you confirm that you meet these eligibility requirements.</p>

        <h3>3. Use of Website:</h3>
        <p>You may use our website for lawful purposes only. You agree not to use the website in any way that violates any applicable laws, regulations, or third-party rights. You also agree not to engage in any activity that disrupts or interferes with the website’s functionality.</p>

        <h3>4. Account Registration:</h3>
        <p>To access certain features of our website, you may be required to create an account. You agree to provide accurate, complete, and up-to-date information during the registration process. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>

        <h3>5. Placement Policy:</h3>
        <p>Once you have been successfully placed at a company through our platform, you agree not to apply for positions at other companies using the same account. This policy is in place to ensure that other users have equal opportunities to secure placement positions.</p>
        <p><strong>5.1:</strong> Users who violate this policy by applying for another company after being placed may have their accounts suspended or terminated.</p>
        <p><strong>5.2:</strong> Exceptions to this policy may be considered on a case-by-case basis at the discretion of the website administrators.</p>

        <h3>6. Intellectual Property Rights:</h3>
        <p>The content, materials, and resources provided on our website, including text, graphics, logos, and videos, are protected by intellectual property rights. You agree not to copy, reproduce, distribute, or create derivative works from any content on our website without our prior written consent.</p>

        <h3>7. Third-Party Links:</h3>
        <p>Our website may contain links to third-party websites that are not owned or controlled by us. We are not responsible for the content or privacy practices of these third-party sites. You acknowledge and agree that we are not liable for any loss or damage arising from your use of any third-party websites.</p>

        <h3>8. Limitation of Liability:</h3>
        <p>We strive to provide accurate and up-to-date information on our website, but we make no warranties or representations regarding the completeness, accuracy, or reliability of any content. You use our website at your own risk. In no event shall we be liable for any direct, indirect, incidental, or consequential damages arising from your use of the website.</p>

        <h3>9. Termination:</h3>
        <p>We reserve the right to suspend or terminate your account and access to our website at any time, without prior notice, for any reason, including if you violate these terms and conditions.</p>

        <h3>10. Governing Law:</h3>
        <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms shall be resolved in the courts of [Your Jurisdiction].</p>

        <h3>11. Contact Us:</h3>
        <p>If you have any questions or concerns about these terms and conditions, please contact us at <a href="mailto:gracecoe.org">@gracecoe.org</a>.</p>

        <!-- Back button to signup.php -->
        <a href="signup.php" class="back-button">Back to Signup</a>
    </div>

</body>
</html>
