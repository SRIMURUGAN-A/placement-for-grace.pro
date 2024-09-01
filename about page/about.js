function toggleSidebar() {
    const sidebar = document.getElementById("firstmySidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
     }
}


function firstcloseSidebar() {
const sidebar = document.getElementById("firstmySidebar");
sidebar.style.width = "0";  // Set the width to 0 to close the sidebar
}


function secondtoggleSidebar() {
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

function toggleDropdown(dropdownId) {
var dropdown = document.getElementById(dropdownId);
var isOpen = dropdown.style.display === "block";

// Close all open dropdowns
var dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function(d) {
    d.style.display = 'none';
});

// Toggle the selected dropdown
dropdown.style.display = isOpen ? "none" : "block";
}

// Optional: Close the dropdown if clicked outside
document.addEventListener('click', function(event) {
var isClickInside = event.target.closest('nav');
if (!isClickInside) {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(d) {
        d.style.display = 'none';
    });
}
});


// used for sefito

document.getElementById('main-link').addEventListener('click', function(e) {
e.preventDefault();
var container = document.getElementById('toggle-container');
var firstToggle = document.getElementById('first-toggle');

container.style.display = (container.style.display === 'block') ? 'none' : 'block';
firstToggle.style.display = 'block'; // Ensure first toggle bar is visible when container opens
});

document.getElementById('sub-link-1').addEventListener('click', function(e) {
e.preventDefault();
toggleDisplay('right-toggle-container-1', 'second-toggle-1');
});

document.getElementById('sub-link-2').addEventListener('click', function(e) {
e.preventDefault();
toggleDisplay('right-toggle-container-2', 'second-toggle-2');
});

document.getElementById('sub-link-3').addEventListener('click', function(e) {
e.preventDefault();
toggleDisplay('right-toggle-container-3', 'second-toggle-3');
});

document.addEventListener('click', function(e) {
var toggleContainer = document.getElementById('toggle-container');
var rightToggleContainers = [
document.getElementById('right-toggle-container-1'),
document.getElementById('right-toggle-container-2'),
document.getElementById('right-toggle-container-3')
];

if (!toggleContainer.contains(e.target) && !document.getElementById('main-link').contains(e.target)) {
closeAllToggles();
}

rightToggleContainers.forEach(function(container, index) {
if (!container.contains(e.target) && !document.getElementById('sub-link-' + (index + 1)).contains(e.target)) {
    closeRightToggle(container.id);
}
});
});

function toggleDisplay(containerId, toggleId) {
var container = document.getElementById(containerId);
var toggle = document.getElementById(toggleId);
container.style.display = (container.style.display === 'block') ? 'none' : 'block';
toggle.style.display = 'block';
}

function closeAllToggles() {
document.getElementById('toggle-container').style.display = 'none';
document.getElementById('first-toggle').style.display = 'none';
}

function closeRightToggle(containerId) {
var container = document.getElementById(containerId);
container.style.display = 'none';
}

