document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        const icon = themeToggle.querySelector('i');
        icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        
        // Add animation effect
        document.body.style.transition = 'background-color 0.3s ease';
        
        // Trigger animation for cards
        document.querySelectorAll('.dashboard-card').forEach(card => {
            card.style.animation = 'none';
            card.offsetHeight; // Trigger reflow
            card.style.animation = 'slideIn 0.3s ease-out';
        });
    }
    
    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    html.setAttribute('data-theme', savedTheme);
    
    // Set initial icon
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Add click event listener
    themeToggle.addEventListener('click', toggleTheme);

    // Profile Dropdown
    const profileMenu = document.querySelector('.profile-menu');
    profileMenu.addEventListener('click', () => {
        profileMenu.classList.toggle('active');
    });

    // Close profile dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!profileMenu.contains(e.target)) {
            profileMenu.classList.remove('active');
        }
    });
 // Close profile dropdown when clicking outside
 document.addEventListener('click', (e) => {
    if (!profileMenu.contains(e.target)) {
        profileMenu.classList.remove('active');
    }
});

// // Mobile menu handling
// document.addEventListener('click', (e) => {
//     const sidebar = document.getElementById('sidebar');
//     const menuToggle = document.querySelector('.menu-toggle');
    
//     if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
//         sidebar.classList.remove('active');
//     }
// });

// Initialize sidebar
const sidebar = document.getElementById('mySidebar');
const menuToggle = document.querySelector('.menu-toggle');
let overlay;

function createOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', () => {
        closeSidebar();
    });
}

// Create overlay on load
createOverlay();

// Update toggle function
window.toggleSidebar = function() {
    if (sidebar) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Update ARIA attributes
        const isExpanded = sidebar.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    }
}

// Update close function
window.closeSidebar = function() {
    if (sidebar) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (sidebar && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        closeSidebar();
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});

// Initialize menu items hover effect
document.querySelectorAll('.menu-section a').forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (!item.classList.contains('active')) {
            item.style.transform = 'translateX(4px)';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});

// Active menu item handling
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
});


// // Smooth scroll for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Add animation classes on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});
    
   

    // Update the Success Stories Carousel functionality
    function initializeSuccessStories() {
        const carousel = document.getElementById('successCarousel');
        if (!carousel) return;

        const storyCards = Array.from(carousel.getElementsByClassName('story-card'));
        const prevBtn = document.getElementById('prevStory');
        const nextBtn = document.getElementById('nextStory');
        let currentIndex = 0;

        // Function to show specific story
        function showStory(index) {
            // Hide all stories first with opacity transition
            storyCards.forEach(card => {
                card.classList.remove('active');
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            });
            
            // Show and fade in the current story
            const currentCard = storyCards[index];
            currentCard.style.display = 'block';
            // Force reflow
            currentCard.offsetHeight;
            setTimeout(() => {
                currentCard.classList.add('active');
                currentCard.style.opacity = '1';
            }, 50);
        }

        // Function to show next story
        function nextStory() {
            currentIndex = (currentIndex + 1) % storyCards.length;
            showStory(currentIndex);
        }

        // Function to show previous story
        function prevStory() {
            currentIndex = (currentIndex - 1 + storyCards.length) % storyCards.length;
            showStory(currentIndex);
        }

        // Set up auto-rotation
        let autoRotateInterval;

        function startAutoRotate() {
            stopAutoRotate(); // Clear any existing interval
            autoRotateInterval = setInterval(nextStory, 5000); // Change story every 5 seconds
        }

        function stopAutoRotate() {
            if (autoRotateInterval) {
                clearInterval(autoRotateInterval);
            }
        }

        // Add event listeners
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                prevStory();
                stopAutoRotate();
                startAutoRotate();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                nextStory();
                stopAutoRotate();
                startAutoRotate();
            });
        }

        // Initialize the first story and start rotation
        showStory(currentIndex);
        startAutoRotate();

        // Add hover pause
        carousel.addEventListener('mouseenter', stopAutoRotate);
        carousel.addEventListener('mouseleave', startAutoRotate);
    }

    // Make sure to call initializeSuccessStories after DOM is loaded
    initializeSuccessStories();

    // Add this to your existing DOMContentLoaded event listener
    function initializeProgressRing() {
        const circle = document.querySelector('.progress-ring-circle');
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        
        function setProgress(percent) {
            const offset = circumference - (percent / 100 * circumference);
            circle.style.strokeDashoffset = offset;
        }
        
        // Animate progress from 0 to 85
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            setProgress(progress);
            if (progress >= 85) clearInterval(interval);
        }, 20);
    }

    initializeProgressRing();

    // Background Slider with smooth transitions
    const slides = document.querySelectorAll('.bg-slide');
    let currentSlide = 0;
    let isTransitioning = false;

    function changeBackground() {
        if (isTransitioning) return;
        isTransitioning = true;

        // Fade out current slide
        slides[currentSlide].style.opacity = '0';
        
        // Update current slide index
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Fade in next slide
        setTimeout(() => {
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.opacity = '0';
            });
            slides[currentSlide].classList.add('active');
            slides[currentSlide].style.opacity = '1';
            isTransitioning = false;
        }, 1000);
    }

    // Initialize first slide
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.opacity = '1';

    // Change background every 20 seconds
    setInterval(changeBackground, 20000);

    // Add parallax effect
    document.addEventListener('mousemove', function(e) {
        if (isTransitioning) return;
        
        const moveX = (e.clientX * 0.05) / 8;
        const moveY = (e.clientY * 0.05) / 8;

        slides.forEach(slide => {
            slide.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        });
    });

    // Add ripple effect to buttons
    document.addEventListener('click', function(e) {
        const target = e.target;
        if (target.classList.contains('btn') || 
            target.classList.contains('card-link') || 
            target.classList.contains('view-btn')) {
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            target.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });

    
    

    // Handle quick suggestions
    window.sendSuggestion = function(suggestion) {
        addMessage('user', suggestion);
        processUserMessage(suggestion);
    };
});

// Example of notification handling
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Example of handling search
const searchInput = document.querySelector('.search-container input');
searchInput.addEventListener('input', debounce(function(e) {
    // Implement search logic here
    console.log('Searching:', e.target.value);
}, 300));

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Progress tracking
function updateProgress(goalId, progress) {
    const progressBar = document.querySelector(`#${goalId} .progress`);
    const progressText = document.querySelector(`#${goalId} .progress-text`);
    
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}% Complete`;
}

// Gamification features
class AchievementSystem {
    constructor() {
        this.achievements = new Map();
        this.points = 0;
    }
    
    addAchievement(id, title, points, condition) {
        this.achievements.set(id, {
            title,
            points,
            condition,
            earned: false
        });
    }
    
    checkAchievements() {
        this.achievements.forEach((achievement, id) => {
            if (!achievement.earned && achievement.condition()) {
                this.earnAchievement(id);
            }
        });
    }
    
    earnAchievement(id) {
        const achievement = this.achievements.get(id);
        if (achievement && !achievement.earned) {
            achievement.earned = true;
            this.points += achievement.points;
            this.showAchievementNotification(achievement);
        }
    }
    
    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <i class="fas fa-trophy"></i>
            <div>
                <h4>Achievement Unlocked!</h4>
                <p>${achievement.title}</p>
                <span>+${achievement.points} points</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }
}

// Initialize achievement system
const achievements = new AchievementSystem();

// Add some example achievements
achievements.addAchievement(
    'first_login',
    'First Steps',
    100,
    () => true // Always earned on first login
);

achievements.addAchievement(
    'course_complete',
    'Course Champion',
    500,
    () => document.querySelectorAll('.course-completed').length >= 1
);

// Add click handlers for menu items
document.querySelectorAll('.menu-section a').forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (!item.classList.contains('active')) {
            item.style.transform = 'translateX(4px)';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});