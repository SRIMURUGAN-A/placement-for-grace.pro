document.getElementById('student_profile_form').addEventListener('submit', function(event) {
    // Basic validation checks (can add more as needed)
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone_number').value;

    if (!email || !phone) {
        alert("Please fill all required fields.");
        event.preventDefault(); // Stop form submission if validation fails
    }
});
