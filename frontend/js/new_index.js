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

        const stories = carousel.getElementsByClassName('story-card');
        const prevBtn = document.getElementById('prevStory');
        const nextBtn = document.getElementById('nextStory');
        let currentIndex = 0;

        // Show initial story
        showStory(currentIndex);

        function showStory(index) {
            // Hide all stories
            for(let story of stories) {
                story.classList.remove('active');
            }
            // Show current story
            stories[index].classList.add('active');
        }

        function nextStory() {
            currentIndex = (currentIndex + 1) % stories.length;
            showStory(currentIndex);
        }

        function prevStory() {
            currentIndex = (currentIndex - 1 + stories.length) % stories.length;
            showStory(currentIndex);
        }

        // Add event listeners
        nextBtn.addEventListener('click', nextStory);
        prevBtn.addEventListener('click', prevStory);
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

    // Add this to your existing DOMContentLoaded event listener
    function initializeCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // The lower the faster

        const animateCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            
            const updateCount = () => {
                const increment = target / speed;
                
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        };

        // Intersection Observer for counters
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // Initialize counters
    initializeCounters();

    // Add confetti effect for achievements
    function triggerConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    // Add this to your achievement notification
    function showAchievementNotification(achievement) {
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
        triggerConfetti();
        setTimeout(() => notification.remove(), 3000);
    }

    // Add to your existing DOMContentLoaded event listener
    function initializeCarousels() {
        const carousels = document.querySelectorAll('.highlights-carousel');
        const viewBtns = document.querySelectorAll('.view-btn');

        // Show initial view
        document.querySelector('.courses-view').classList.add('active');
        document.querySelector('[data-view="courses"]').classList.add('active');

        // Handle view switching
        viewBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const viewType = btn.getAttribute('data-view');
                
                // Remove active class from all buttons and views
                viewBtns.forEach(b => b.classList.remove('active'));
                carousels.forEach(v => v.classList.remove('active'));
                
                // Add active class to selected button and view
                btn.classList.add('active');
                const selectedView = document.querySelector(`.${viewType}-view`);
                if (selectedView) {
                    selectedView.classList.add('active');
                    // Reset carousel position
                    const track = selectedView.querySelector('.carousel-track');
                    if (track) {
                        track.style.transition = 'none';
                        track.style.transform = 'translateX(0)';
                        // Force reflow
                        track.offsetHeight;
                        track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                    }
                }
            });
        });

        // Initialize each carousel
        carousels.forEach(carousel => {
            const track = carousel.querySelector('.carousel-track');
            const prevBtn = carousel.querySelector('.prev');
            const nextBtn = carousel.querySelector('.next');
            
            if (!track || !prevBtn || !nextBtn) return;

            // Add your existing carousel functionality here
            // (Keep the rest of your carousel initialization code)
        });
    }

    // Initialize carousels
    initializeCarousels();
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

// Add this function to reset carousel position
function resetCarousel(carousel) {
    const track = carousel.querySelector('.carousel-track');
    const cards = track.querySelectorAll('.highlight-card');
    
    // Reset to first card
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
    
    // Force reflow
    track.offsetHeight;
    
    // Restore transition
    track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
}

// Modify the view switching event listener
viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const viewType = btn.getAttribute('data-view');
        
        // Remove active classes
        viewBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.highlights-carousel').forEach(view => {
            view.classList.remove('active');
            resetCarousel(view); // Reset carousel position
        });
        
        // Add active classes
        btn.classList.add('active');
        const selectedView = document.querySelector(`.${viewType}-view`);
        if (selectedView) {
            selectedView.classList.add('active');
            // Reinitialize carousel for the active view
            initializeCarousel(selectedView);
        }
    });
});