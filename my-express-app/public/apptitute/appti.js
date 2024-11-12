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
    dropdowns.forEach(function (d) {
        d.style.display = 'none';
    });

    // Toggle the selected dropdown
    dropdown.style.display = isOpen ? "none" : "block";
}

// Optional: Close the dropdown if clicked outside
document.addEventListener('click', function (event) {
    var isClickInside = event.target.closest('nav');
    if (!isClickInside) {
        var dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(function (d) {
            d.style.display = 'none';
        });
    }
});


// used for sefito

document.getElementById('main-link').addEventListener('click', function (e) {
    e.preventDefault();
    var container = document.getElementById('toggle-container');
    var firstToggle = document.getElementById('first-toggle');

    container.style.display = (container.style.display === 'block') ? 'none' : 'block';
    firstToggle.style.display = 'block'; // Ensure first toggle bar is visible when container opens
});

document.getElementById('sub-link-1').addEventListener('click', function (e) {
    e.preventDefault();
    toggleDisplay('right-toggle-container-1', 'second-toggle-1');
});

document.getElementById('sub-link-2').addEventListener('click', function (e) {
    e.preventDefault();
    toggleDisplay('right-toggle-container-2', 'second-toggle-2');
});

document.getElementById('sub-link-3').addEventListener('click', function (e) {
    e.preventDefault();
    toggleDisplay('right-toggle-container-3', 'second-toggle-3');
});

document.addEventListener('click', function (e) {
    var toggleContainer = document.getElementById('toggle-container');
    var rightToggleContainers = [
        document.getElementById('right-toggle-container-1'),
        document.getElementById('right-toggle-container-2'),
        document.getElementById('right-toggle-container-3')
    ];

    if (!toggleContainer.contains(e.target) && !document.getElementById('main-link').contains(e.target)) {
        closeAllToggles();
    }

    rightToggleContainers.forEach(function (container, index) {
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





// Select the sidebar and buttons
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const toggleSidebarBtn = document.getElementById('toggle-sidebar');

// Function to check screen width and automatically open sidebar at 900px or more
function checkScreenWidth() {
    if (window.innerWidth >= 900) {
        sidebar.classList.remove('hidden-sidebar'); // Open sidebar
    }
}

// Close sidebar when the X button is clicked
closeBtn.addEventListener('click', function () {
    sidebar.classList.add('hidden-sidebar');
});

// Open sidebar when the toggle button is clicked
toggleSidebarBtn.addEventListener('click', function () {
    sidebar.classList.remove('hidden-sidebar');
});

// Rotate icon on link click
const links = document.querySelectorAll('.info-link');
links.forEach(link => {
    link.addEventListener('click', function () {
        const icon = this.querySelector('i');
        icon.classList.toggle('rotate-180');

        const info = this.getAttribute('data-info');
        const id_info = document.getElementById(info);
        id_info.style.display = (id_info.style.display === 'none' || id_info.style.display === '') ? 'block' : 'none';
    });
});

// Highlight clicked link
const pinks = document.querySelectorAll('.link');
pinks.forEach(pink => {
    pink.addEventListener('click', function () {
        pinks.forEach(l => l.classList.remove('clicked'));
        this.classList.add('clicked');
    });
});

// Check the screen width initially and when the window is resized
window.addEventListener('resize', checkScreenWidth);
checkScreenWidth(); // Initial check on page load







// used to main content

let currentTopic = ""; // To track the current topic
let isTextContent = true; // Track whether we're showing text or video content

function loadContent(topic) {
    currentTopic = topic;
    isTextContent = true; // Reset to text content when a new topic is loaded
    updateContent();
}   

function updateContent() {
    const contentDisplay = document.getElementById("contentDisplay");
    const fileToLoad = isTextContent ? `${currentTopic}_text.html` : `${currentTopic}_video.html`;

    fetch(fileToLoad)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.text();
        })
        .then(html => {
            contentDisplay.innerHTML = html;
        })
        .catch(error => {
            contentDisplay.innerHTML = '<p style="color: #1a73e8; font-size: 50px; text-align: center; font-weight: 900; ">Select a topic to display the content</p>';
            console.error("There was a problem loading the content:", error);
        });
}



function toggleContent() {
    isTextContent = !isTextContent;
    const toggleButton = document.getElementById("toggleContentButton");
    toggleButton.textContent = isTextContent ? "Switch to Video" : "Switch to Text";
    updateContent();
}

