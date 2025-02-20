// Update course data with real images and content
const courses = [
    {
        title: 'Complete Python Programming Course',
        instructor: 'Dr. Sarah Johnson',
        thumbnail: 'https://www.gracecoe.org/assets/img/gcoe_logo.png', // Using Grace logo as placeholder
        rating: 4.8,
        students: '15,447',
        price: 'Free',
        originalPrice: '₹999',
        discount: '100% OFF',
        badge: 'Bestseller',
        category: 'Programming'
    },
    {
        title: 'Web Development Bootcamp',
        instructor: 'Prof. Michael Smith',
        thumbnail: 'https://www.gracecoe.org/assets/img/gcoe_logo.png',
        rating: 4.9,
        students: '12,234',
        price: 'Free',
        originalPrice: '₹1299',
        discount: '100% OFF',
        badge: 'New',
        category: 'Web Development'
    },
    {
        title: 'Machine Learning Fundamentals',
        instructor: 'Dr. Emily Chen',
        thumbnail: 'https://www.gracecoe.org/assets/img/gcoe_logo.png',
        rating: 4.7,
        students: '8,892',
        price: 'Free',
        originalPrice: '₹1499',
        discount: '100% OFF',
        badge: 'Popular',
        category: 'AI/ML'
    },
    {
        title: 'Cloud Computing with AWS',
        instructor: 'Alex Turner',
        thumbnail: 'https://www.gracecoe.org/assets/img/gcoe_logo.png',
        rating: 4.8,
        students: '10,123',
        price: 'Free',
        originalPrice: '₹1999',
        discount: '100% OFF',
        badge: 'Trending',
        category: 'Cloud Computing'
    }
];

// Enhanced course card creation
function createCourseCard(course) {
    return `
        <div class="course-card">
            <div class="course-thumbnail">
                <img src="${course.thumbnail}" alt="${course.title}">
                ${course.badge ? `<span class="course-badge">${course.badge}</span>` : ''}
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-instructor">by ${course.instructor}</p>
                <div class="course-stats">
                    <div class="course-rating">
                        <span>⭐ ${course.rating}</span>
                    </div>
                    <div class="course-students">
                        <i class="fas fa-user-friends"></i>
                        <span>${course.students} students</span>
                    </div>
                </div>
                <div class="course-price">
                    <span class="current-price">${course.price}</span>
                    <span class="original-price">${course.originalPrice}</span>
                    <span class="discount-badge">${course.discount}</span>
                </div>
                <button class="enroll-btn">Enroll Now</button>
            </div>
        </div>
    `;
}

// Initialize course carousel with proper filtering
function initializeCourseCarousel() {
    const slider = document.querySelector('.course-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Initially show all courses
    updateCourseDisplay('Trending');

    // Filter button functionality
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.textContent.trim();
            updateCourseDisplay(category);
        });
    });

    // Navigation buttons
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            slider.scrollLeft -= 320;
        });

        nextBtn.addEventListener('click', () => {
            slider.scrollLeft += 320;
        });
    }
}

// Function to update course display based on category
function updateCourseDisplay(category) {
    const slider = document.querySelector('.course-slider');
    if (!slider) return;

    slider.innerHTML = ''; // Clear current courses
    
    let filteredCourses = courses;
    if (category !== 'Trending') {
        filteredCourses = courses.filter(course => course.category === category);
    }

    filteredCourses.forEach(course => {
        slider.innerHTML += createCourseCard(course);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize course carousel
    const slider = document.querySelector('.course-slider');
    if (slider) {
        // Initially show all courses
        courses.forEach(course => {
            slider.innerHTML += createCourseCard(course);
        });
    }

    // Initialize filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const category = btn.textContent.trim();
            filterCourses(category);
        });
    });

    // Initialize navigation buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn && nextBtn && slider) {
        prevBtn.addEventListener('click', () => {
            slider.scrollLeft -= 320;
        });

        nextBtn.addEventListener('click', () => {
            slider.scrollLeft += 320;
        });
    }

    // Initialize scroll reveal
    revealOnScroll();
});

// Filter courses by category
function filterCourses(category) {
    const slider = document.querySelector('.course-slider');
    if (!slider) return;

    slider.innerHTML = '';
    const filteredCourses = category === 'Trending' 
        ? courses 
        : courses.filter(course => course.category === category);

    filteredCourses.forEach(course => {
        slider.innerHTML += createCourseCard(course);
    });
}

// Handle learning goal form submission
document.getElementById('goalForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Add logic to save learning goal
    console.log('Learning goal saved:', Object.fromEntries(formData));
});

// AI Assistant toggle
const aiToggle = document.querySelector('.ai-toggle');
const aiChatWindow = document.querySelector('.ai-chat-window');

aiToggle.addEventListener('click', () => {
    aiChatWindow.style.display = aiChatWindow.style.display === 'none' ? 'block' : 'none';
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // Add search logic here
    console.log('Searching for:', searchTerm);
});

// Save course functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('save-course')) {
        // Add logic to save course
        console.log('Course saved');
        e.target.textContent = 'Saved';
        e.target.disabled = true;
    }
});

// Category card click handlers
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.querySelector('h3').textContent;
        // Add logic to filter courses by category
        console.log('Selected category:', category);
    });
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle learning path start
document.querySelectorAll('.start-path-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const pathCard = this.closest('.path-card');
        const progressBar = pathCard.querySelector('.progress-bar');
        progressBar.style.width = '0%';
        
        // Animate progress
        let progress = 0;
        const interval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(interval);
            } else {
                progress += 1;
                progressBar.style.width = `${progress}%`;
            }
        }, 20);
    });
});

// Handle goal setting
document.querySelector('.set-goal-btn')?.addEventListener('click', function(e) {
    e.preventDefault();
    const formData = new FormData(this.closest('form'));
    const goalData = Object.fromEntries(formData);
    
    // Save goal data
    localStorage.setItem('learningGoal', JSON.stringify(goalData));
    
    // Show confirmation
    alert('Goal set successfully! We\'ll send you reminders to keep you on track.');
});

// Category card click handler
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.querySelector('h3').textContent;
        // Add navigation or filtering logic here
        console.log(`Selected category: ${category}`);
    });
});

// Add scroll reveal functionality
function revealOnScroll() {
    const sections = document.querySelectorAll('.courses-section, .categories-section, .learning-paths-section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
            section.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);

// Initial check for visible sections
document.addEventListener('DOMContentLoaded', revealOnScroll);

// Add click animation to filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
});

// Enhanced Dark Mode Toggle
function initializeDarkMode() {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to set theme
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme === 'dark');
        
        // Add or remove dark mode class from body
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    // Function to update theme icon
    function updateThemeIcon(isDark) {
        const icon = themeToggle.querySelector('i');
        if (isDark) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDarkScheme.matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        
        // Log theme change for debugging
        console.log('Theme changed to:', newTheme);
    });

    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
    });
}

// Initialize dark mode when DOM loads
document.addEventListener('DOMContentLoaded', initializeDarkMode);

// Learning Paths Carousel
const pathsGrid = document.querySelector('.learning-paths-grid');
const prevPath = document.querySelector('.prev-path');
const nextPath = document.querySelector('.next-path');

if (prevPath && nextPath && pathsGrid) {
    prevPath.addEventListener('click', () => {
        pathsGrid.scrollBy({
            left: -370,
            behavior: 'smooth'
        });
    });

    nextPath.addEventListener('click', () => {
        pathsGrid.scrollBy({
            left: 370,
            behavior: 'smooth'
        });
    });
}

// Enhanced Goal Form Validation
const goalForm = document.querySelector('.goal-form');
if (goalForm) {
    goalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(goalForm);
        const goalData = Object.fromEntries(formData);
        
        // Validate dates
        const startDate = new Date(goalData.startDate);
        const targetDate = new Date(goalData.targetDate);
        
        if (targetDate <= startDate) {
            alert('Target date must be after start date');
            return;
        }
        
        // Save goal
        saveGoal(goalData);
    });
}

function saveGoal(goalData) {
    const goals = JSON.parse(localStorage.getItem('learningGoals') || '[]');
    goals.push({
        ...goalData,
        id: Date.now(),
        progress: 0,
        createdAt: new Date().toISOString()
    });
    localStorage.setItem('learningGoals', JSON.stringify(goals));
    
    // Show success message
    showNotification('Goal set successfully! 🎯');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Feature card interactions
document.querySelectorAll('.try-feature-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const feature = btn.dataset.feature;
        switch(feature) {
            case 'ai-buddy':
                openAIBuddyChat();
                break;
            case 'style-test':
                startLearningStyleTest();
                break;
            case 'group-match':
                findStudyGroups();
                break;
            case 'resource-finder':
                openResourceFinder();
                break;
            case 'insights':
                showLearningInsights();
                break;
        }
    });
});

// YouTube Section Functionality
const youtubeData = [
    {
        title: 'Complete Python Programming Course 2024',
        thumbnail: 'https://img.youtube.com/vi/WFJUJKYOmQI/maxresdefault.jpg',
        duration: '12:45:30',
        channel: {
            name: 'CodeWithHarry',
            avatar: 'https://yt3.googleusercontent.com/ytc/APkrFKZGyiFNGBD9wvHAMxvVc4U3oNQJGh3cZuQHa_KJ=s176-c-k-c0x00ffffff-no-rj',
            verified: true
        },
        views: '1.2M',
        likes: '98K',
        category: 'programming'
    },
    // Add more video data...
];

function createYouTubeCard(video) {
    return `
        <div class="youtube-card" data-category="${video.category}">
            <div class="youtube-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <span class="duration-badge">${video.duration}</span>
                <div class="play-overlay">
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
            <div class="youtube-content">
                <h3 class="video-title">${video.title}</h3>
                <div class="channel-info">
                    <img src="${video.channel.avatar}" alt="${video.channel.name}" class="channel-avatar">
                    <span class="channel-name">
                        ${video.channel.name}
                        ${video.channel.verified ? '<i class="fas fa-check-circle verified-badge"></i>' : ''}
                    </span>
                </div>
                <div class="video-stats">
                    <span><i class="fas fa-eye"></i> ${video.views} views</span>
                    <span><i class="fas fa-thumbs-up"></i> ${video.likes}</span>
                </div>
                <button class="watch-now-btn">
                    <i class="fas fa-play-circle"></i>
                    Watch Now
                </button>
            </div>
        </div>
    `;
}

function initializeYouTubeSection() {
    const track = document.querySelector('.youtube-courses-track');
    const container = document.querySelector('.youtube-courses-container');
    const prevBtn = document.querySelector('.prev-yt');
    const nextBtn = document.querySelector('.next-yt');
    let scrollInterval;

    // Add videos to track
    youtubeData.forEach(video => {
        track.innerHTML += createYouTubeCard(video);
    });

    // Auto scroll functionality
    function startAutoScroll() {
        scrollInterval = setInterval(() => {
            const scrollAmount = 370; // card width + gap
            if (track.scrollLeft >= track.scrollWidth - container.clientWidth) {
                track.scrollLeft = 0;
            } else {
                track.scrollLeft += scrollAmount;
            }
        }, 3000);
    }

    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        clearInterval(scrollInterval);
        track.scrollLeft -= 370;
        startAutoScroll();
    });

    nextBtn.addEventListener('click', () => {
        clearInterval(scrollInterval);
        track.scrollLeft += 370;
        startAutoScroll();
    });

    // Filter functionality
    document.querySelectorAll('.yt-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            clearInterval(scrollInterval);
            const category = btn.dataset.category;
            
            document.querySelectorAll('.yt-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            track.scrollLeft = 0;
            filterYouTubeVideos(category);
            startAutoScroll();
        });
    });

    // Start auto scroll
    startAutoScroll();

    // Pause auto scroll on hover
    container.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    container.addEventListener('mouseleave', startAutoScroll);
}

function filterYouTubeVideos(category) {
    const track = document.querySelector('.youtube-courses-track');
    track.innerHTML = '';
    
    const filteredVideos = category === 'all' 
        ? youtubeData 
        : youtubeData.filter(video => video.category === category);

    filteredVideos.forEach(video => {
        track.innerHTML += createYouTubeCard(video);
    });
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', initializeYouTubeSection);

// Popup functionality
function openCategoryPopup() {
    console.log('Opening popup');
    const popup = document.getElementById('categoryPopup');
    popup.style.display = 'flex';
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCategoryPopup() {
    console.log('Closing popup');
    const popup = document.getElementById('categoryPopup');
    popup.style.display = 'none';
    popup.classList.remove('active');
    document.body.style.overflow = '';
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('categoryPopup');
    const closeBtn = document.getElementById('closePopup');

    // Close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCategoryPopup);
    }

    // Close on outside click
    if (popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                closeCategoryPopup();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCategoryPopup();
        }
    });
});
