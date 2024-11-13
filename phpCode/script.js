// script.js

// Add validation or other JS functionality here if needed
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button');

    form.addEventListener('submit', function (e) {
        // Simple validation check for required fields
        let isValid = true;

        form.querySelectorAll('input[required], select[required], textarea[required]').forEach(function (field) {
            if (!field.value) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '#ddd';
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Please fill all the required fields.');
        }
    });
});
