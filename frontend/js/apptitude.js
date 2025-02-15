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
    const dropdown = document.getElementById(dropdownId);
    const allDropdowns = document.querySelectorAll('.dropdown');
    
    // Close all other dropdowns
    allDropdowns.forEach(d => {
        if (d.id !== dropdownId) {
            d.style.display = 'none';
        }
    });

    // Toggle the clicked dropdown
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.dropdown').forEach(d => {
            d.style.display = 'none';
        });
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelector('.main-nav').classList.remove('active');
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

function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
}

// Update the profile menu functionality
const userLink = document.getElementById('user_link');
const profileMenu = document.getElementById('profile-menu');

userLink.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    profileMenu.classList.toggle('active');
});

// Close profile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!profileMenu.contains(e.target) && !userLink.contains(e.target)) {
        profileMenu.classList.remove('active');
    }
});

// Prevent menu from closing when clicking inside
profileMenu.addEventListener('click', function(e) {
    e.stopPropagation();
});

// Update sidebar functionality
document.addEventListener('DOMContentLoaded', function() {
    const infoLinks = document.querySelectorAll('.info-link');
    
    infoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target dropdown
            const targetId = this.getAttribute('data-info');
            const targetDropdown = document.getElementById(targetId);
            
            // Toggle active class on the clicked link
            this.classList.toggle('active');
            
            // Toggle the dropdown
            if (targetDropdown) {
                // If dropdown is not visible (max-height is 0 or not set)
                if (!targetDropdown.style.maxHeight || targetDropdown.style.maxHeight === "0px") {
                    // Get the actual height of the content
                    targetDropdown.style.maxHeight = targetDropdown.scrollHeight + "px";
                } else {
                    // Close the dropdown
                    targetDropdown.style.maxHeight = "0px";
                }
            }
            
            // Rotate arrow
            const arrow = this.querySelector('i');
            arrow.style.transform = this.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
});

// Add initial state for submenus
document.addEventListener('DOMContentLoaded', function() {
    const subMenus = document.querySelectorAll('.sub_heading_apptitude');
    subMenus.forEach(menu => {
        menu.style.maxHeight = null;
    });
});

// Sidebar Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const toggleIcon = sidebarToggle.querySelector('i');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
        
        // Update toggle icon
        if (sidebar.classList.contains('collapsed')) {
            toggleIcon.classList.remove('fa-chevron-left');
            toggleIcon.classList.add('fa-chevron-right');
        } else {
            toggleIcon.classList.remove('fa-chevron-right');
            toggleIcon.classList.add('fa-chevron-left');
        }
    });

    // Handle window resize
    let timeout;
    window.addEventListener('resize', function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            if (window.innerWidth > 992) {
                sidebar.classList.remove('collapsed');
                mainContent.classList.remove('expanded');
                toggleIcon.classList.remove('fa-chevron-right');
                toggleIcon.classList.add('fa-chevron-left');
            }
        }, 250);
    });
});

// Add smooth scrolling to prevent jarring content shifts
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Section Animation on Scroll
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Add loading animation
const loadingBar = document.createElement('div');
loadingBar.className = 'loading-animation';
document.body.appendChild(loadingBar);

// Remove loading animation after page load
window.addEventListener('load', () => {
    loadingBar.style.display = 'none';
});

// Timer Variables
let timer;
let isRunning = false;
let seconds = 0;
let studyGoal = 60; // Default goal: 60 minutes
let studyTime = 0;
let timerDuration = 1800; // Default timer: 30 minutes

// Timer Controls
document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('pauseTimer').addEventListener('click', pauseTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        document.getElementById('startTimer').disabled = true;
        document.getElementById('pauseTimer').disabled = false;
        timer = setInterval(updateTimer, 1000);
        showNotification('Timer Started', 'Your study session has begun!');
    }
}

function pauseTimer() {
    isRunning = false;
    document.getElementById('startTimer').disabled = false;
    document.getElementById('pauseTimer').disabled = true;
    clearInterval(timer);
    showNotification('Timer Paused', 'Take a short break and resume when ready.');
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    updateTimerDisplay();
    document.getElementById('startTimer').disabled = false;
    document.getElementById('pauseTimer').disabled = true;
    showNotification('Timer Reset', 'Timer has been reset to 00:00:00');
}

function updateTimer() {
    seconds++;
    updateTimerDisplay();
    
    // Update study time and progress
    studyTime = Math.floor(seconds / 60);
    updateGoalProgress();
    
    // Check if timer duration is reached
    if (seconds >= timerDuration) {
        pauseTimer();
        showNotification('Time\'s Up!', 'You\'ve completed your study session!');
    }
    
    // Check if goal is reached
    if (studyTime >= studyGoal && studyTime - 1 < studyGoal) {
        showNotification('Goal Reached! 🎉', 'Congratulations! You\'ve reached your study goal!');
    }
}

function updateTimerDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(secs).padStart(2, '0');
}

// Goal Setting
function openGoalModal() {
    document.getElementById('goalModal').style.display = 'flex';
    document.getElementById('studyGoal').value = studyGoal;
}

function closeGoalModal() {
    document.getElementById('goalModal').style.display = 'none';
}

function setGoal() {
    const newGoal = parseInt(document.getElementById('studyGoal').value);
    if (newGoal > 0) {
        studyGoal = newGoal;
        updateGoalProgress();
        closeGoalModal();
        showNotification(`New study goal set: ${studyGoal} minutes`, 'Study goal updated successfully!');
    }
}

function updateGoalProgress() {
    const progress = Math.min((studyTime / studyGoal) * 100, 100);
    document.getElementById('goalProgress').style.width = `${progress}%`;
    document.getElementById('goalText').textContent = `${studyTime}/${studyGoal} minutes`;
}

// Time Setting Functions
function openTimeModal() {
    const modal = document.getElementById('timeModal');
    const hours = Math.floor(timerDuration / 3600);
    const minutes = Math.floor((timerDuration % 3600) / 60);
    
    document.getElementById('timerHours').value = hours;
    document.getElementById('timerMinutes').value = minutes;
    modal.style.display = 'flex';
}

function closeTimeModal() {
    document.getElementById('timeModal').style.display = 'none';
}

function setTimer() {
    const hours = parseInt(document.getElementById('timerHours').value) || 0;
    const minutes = parseInt(document.getElementById('timerMinutes').value) || 0;
    
    if (hours === 0 && minutes === 0) {
        showNotification('Invalid Time', 'Please set a valid duration.');
        return;
    }
    
    timerDuration = (hours * 3600) + (minutes * 60);
    closeTimeModal();
    showNotification('Timer Set', `Timer set for ${hours}h ${minutes}m`);
}

// Notification Function
function showNotification(title, message) {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('notificationMessage');
    messageElement.innerHTML = `<strong>${title}</strong><br>${message}`;
    notification.classList.add('show');
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Close modals when clicking outside
window.onclick = function(event) {
    const timeModal = document.getElementById('timeModal');
    const goalModal = document.getElementById('goalModal');
    
    if (event.target === timeModal) {
        closeTimeModal();
    }
    if (event.target === goalModal) {
        closeGoalModal();
    }
}


