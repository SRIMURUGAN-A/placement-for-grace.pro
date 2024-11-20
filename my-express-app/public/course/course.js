
// toogle bar
function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

function closeSidebar() {
    const sidebar = document.getElementById("mySidebar");
    sidebar.style.width = "0";  // Set the width to 0 to close the sidebar
}

document.querySelectorAll('.courses-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the corresponding dropdown menu
        const dropdown = this.nextElementSibling;

        // Determine if the clicked dropdown is currently visible
        const isDropdownVisible = dropdown.style.display === 'block';

        // Close all dropdowns
        document.querySelectorAll('.dropdown').forEach(function (dropdown) {
            dropdown.style.display = 'none';
        });

        // If the clicked dropdown was not visible, open it
        if (!isDropdownVisible) {
            dropdown.style.display = 'block';
        }
    });
    // Close the dropdown when clicking anywhere on the screen
    document.addEventListener('click', function (event) {
        const isClickInsideDropdown = event.target.closest('.courses-link, .dropdown');

        // If the click is outside the dropdown and the link, close all dropdowns
        if (!isClickInsideDropdown) {
            document.querySelectorAll('.dropdown').forEach(function (dropdown) {
                dropdown.style.display = 'none';
            });
        }
    });

});


//use to profile dashboard
const user_link = document.getElementById('user_link')
const toggleBar_profile = document.getElementById('toggleBar_profile')

user_link.addEventListener('click', function () {
    if (toggleBar_profile.style.display === "none" || toggleBar_profile.style.display === "") {
        toggleBar_profile.style.display = "block";
    } else {
        toggleBar_profile.style.display = "none";
    }
});
document.addEventListener('click', function (event) {
    if (!toggleBar.contains(event.target) && !userLink.contains(event.target)) {
        toggleBar.style.display = "none";
    }
});
