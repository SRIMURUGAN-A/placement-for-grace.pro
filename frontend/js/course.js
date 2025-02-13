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

// Course recommendation system
class CourseRecommender {
    constructor() {
        this.userPreferences = this.loadUserPreferences();
        this.initializeRecommendations();
    }

    loadUserPreferences() {
        // Load from localStorage or API
        return JSON.parse(localStorage.getItem('userPreferences')) || {
            department: 'cse',
            interests: ['web_development', 'ai_ml'],
            completedCourses: []
        };
    }

    initializeRecommendations() {
        this.updateRecommendations();
        this.initializeFilters();
        this.initializeProgressTracking();
    }

    updateRecommendations() {
        // Update personalized recommendations based on user preferences
        const recommendationContainer = document.querySelector('.recommendation-cards');
        if (recommendationContainer) {
            // Add recommendation logic here
        }
    }

    initializeFilters() {
        const filterButton = document.querySelector('.filter');
        const filterContainer = document.querySelector('.filter-container');

        if (filterButton && filterContainer) {
            filterButton.addEventListener('click', () => {
                filterContainer.classList.toggle('show');
            });

            // Add filter change handlers
            const filterInputs = filterContainer.querySelectorAll('input');
            filterInputs.forEach(input => {
                input.addEventListener('change', () => this.handleFilterChange());
            });
        }
    }

    initializeProgressTracking() {
        // Initialize progress tracking functionality
        this.updateProgressStats();
        this.initializeBookmarks();
    }

    updateProgressStats() {
        // Update progress statistics
        const stats = {
            coursesInProgress: 5,
            skillsAcquired: 12
        };

        const statsElements = document.querySelectorAll('.stat-number');
        if (statsElements.length >= 2) {
            statsElements[0].textContent = stats.coursesInProgress;
            statsElements[1].textContent = stats.skillsAcquired;
        }
    }

    initializeBookmarks() {
        const bookmarkButtons = document.querySelectorAll('.btn button:first-child');
        bookmarkButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                button.classList.toggle('bookmarked');
            });
        });
    }

    handleFilterChange() {
        // Handle filter changes and update course list
        const selectedFilters = this.getSelectedFilters();
        this.filterCourses(selectedFilters);
    }

    getSelectedFilters() {
        // Get all selected filter values
        const filters = {
            department: document.querySelector('input[name="department"]:checked')?.value,
            tracks: Array.from(document.querySelectorAll('input[name="track"]:checked')).map(input => input.value),
            level: document.querySelector('input[name="level"]:checked')?.value,
            duration: document.querySelector('input[name="duration"]:checked')?.value,
            language: document.querySelector('input[name="language"]:checked')?.value
        };
        return filters;
    }

    filterCourses(filters) {
        // Apply filters to course list
        const courseCards = document.querySelectorAll('.coursce1');
        // Add filtering logic here
    }
}

class GameEngine {
    constructor() {
        this.xp = 0;
        this.level = 1;
        this.achievements = [];
        this.initializeGameElements();
    }

    initializeGameElements() {
        this.updateXPBar();
        this.initializeChallenges();
        this.initializeAchievements();
    }

    updateXPBar() {
        const xpBar = document.querySelector('.xp-bar');
        const xpText = document.querySelector('.xp-progress span');
        if (xpBar && xpText) {
            const progress = (this.xp % 1000) / 1000 * 100;
            xpBar.style.width = `${progress}%`;
            xpText.textContent = `${this.xp % 1000}/1000 XP`;
        }
    }

    awardXP(amount) {
        this.xp += amount;
        if (this.xp >= this.level * 1000) {
            this.levelUp();
        }
        this.updateXPBar();
    }

    levelUp() {
        this.level++;
        // Show level up animation
        this.showLevelUpAnimation();
    }

    showLevelUpAnimation() {
        const levelBadge = document.querySelector('.level-badge');
        if (levelBadge) {
            levelBadge.classList.add('level-up');
            setTimeout(() => levelBadge.classList.remove('level-up'), 2000);
        }
    }

    initializeChallenges() {
        const challengeButtons = document.querySelectorAll('.start-challenge');
        challengeButtons.forEach(button => {
            button.addEventListener('click', () => this.startChallenge());
        });
    }

    startChallenge() {
        // Implement challenge logic
    }

    initializeAchievements() {
        // Initialize achievement tracking
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const recommender = new CourseRecommender();
    const gameEngine = new GameEngine();
});
