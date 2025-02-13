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

    // Mobile menu handling
    document.addEventListener('click', (e) => {
        const sidebar = document.getElementById('sidebar');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

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
    
    // AI Assistant Toggle
    const aiToggle = document.querySelector('.ai-toggle');
    const chatContainer = document.querySelector('.chat-container');
    aiToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('active');
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Example of loading personalized content
    const studentName = document.querySelector('.student-name');
    // In a real application, this would come from your backend
    studentName.textContent = 'John Doe';
    
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

    // News Ticker Controls
    const newsTicker = document.getElementById('newsTicker');
    const pauseButton = document.getElementById('pauseNews');
    const nextButton = document.getElementById('nextNews');
    let isPaused = false;

    // Clone news items for continuous scroll
    const newsItems = newsTicker.innerHTML;
    newsTicker.innerHTML = newsItems + newsItems;

    pauseButton.addEventListener('click', function() {
        if (isPaused) {
            newsTicker.style.animationPlayState = 'running';
            pauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            newsTicker.style.animationPlayState = 'paused';
            pauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
        isPaused = !isPaused;
    });

    nextButton.addEventListener('click', function() {
        const firstItem = newsTicker.querySelector('.news-item');
        const itemWidth = firstItem.offsetWidth + 32; // Including gap
        newsTicker.style.transition = 'transform 0.5s ease';
        newsTicker.style.transform = `translateX(-${itemWidth}px)`;

        setTimeout(() => {
            newsTicker.style.transition = 'none';
            newsTicker.appendChild(firstItem);
            newsTicker.style.transform = 'translateX(0)';
        }, 500);
    });

    // AI Chat Widget Functionality
    const chatWidget = document.getElementById('aiChatWidget');
    const chatToggle = document.getElementById('chatToggle');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');
    const minimizeBtn = document.getElementById('minimizeChat');
    const voiceBtn = document.getElementById('voiceChat');

    // Initialize chat state
    let isChatOpen = false;

    // Chat Toggle Button
    if (chatToggle) {
        chatToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleChat();
        });
    }

    // Toggle chat function
    function toggleChat() {
        isChatOpen = !isChatOpen;
        chatWidget.classList.toggle('active');
        if (isChatOpen && chatInput) {
            chatInput.focus();
        }
    }

    // Minimize Button
    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeChat();
        });
    }

    // Close chat function
    function closeChat() {
        isChatOpen = false;
        chatWidget.classList.remove('active');
    }

    // Send Message Function
    function sendMessage(message, isUser = true) {
        if (!message.trim()) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        const sanitizedMessage = message.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas ${isUser ? 'fa-user' : 'fa-robot'}"></i>
            </div>
            <div class="message-content">
                <p>${sanitizedMessage}</p>
            </div>
        `;
        
        if (chatMessages) {
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Handle message sending
    if (sendButton && chatInput) {
        sendButton.addEventListener('click', function() {
            const message = chatInput.value.trim();
            if (message) {
                sendMessage(message, true);
                chatInput.value = '';
                
                // Bot response
                setTimeout(() => {
                    const response = getBotResponse(message.toLowerCase());
                    sendMessage(response, false);
                }, 500);
            }
        });

        // Enter key to send
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendButton.click();
            }
        });
    }

    // Close chat when clicking outside
    document.addEventListener('click', function(e) {
        if (isChatOpen && chatWidget && !chatWidget.contains(e.target) && !chatToggle.contains(e.target)) {
            closeChat();
        }
    });

    // Prevent closing when clicking inside chat
    if (chatWidget) {
        chatWidget.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Initialize suggestion handler
    window.sendSuggestion = function(suggestion) {
        if (chatWidget) {
            if (!isChatOpen) {
                toggleChat();
            }
            setTimeout(() => {
                sendMessage(suggestion, true);
                setTimeout(() => {
                    const response = getBotResponse(suggestion.toLowerCase());
                    sendMessage(response, false);
                }, 500);
            }, 100);
        }
    };

    // Enhanced Bot Responses
    function getBotResponse(message) {
        const responses = {
            'learning paths': `Here are some learning paths I recommend:
1. 🌟 Web Development Track:
   - HTML, CSS, JavaScript basics
   - Frontend frameworks (React/Vue)
   - Backend development (Node.js)
   - Database management

2. 🚀 Data Science Path:
   - Python programming
   - Data analysis with Pandas
   - Machine Learning basics
   - Data visualization

3. 📱 Mobile Development:
   - Flutter/React Native
   - iOS/Android development
   - Mobile UI/UX design

Which path interests you?`,

            'career advice': `Here's some career guidance:
1. 📝 Build Your Portfolio:
   - Create personal projects
   - Contribute to open source
   - Document your work

2. 🤝 Networking:
   - Join tech communities
   - Attend meetups/conferences
   - Connect with professionals

3. 💼 Job Search Strategy:
   - Update LinkedIn profile
   - Practice coding interviews
   - Research companies

Need specific advice about any of these areas?`,

            'technical help': `I can help with technical issues in:
1. 💻 Programming:
   - Debugging code
   - Best practices
   - Code optimization

2. 🛠️ Development Tools:
   - Git/GitHub
   - VS Code
   - Development environments

3. 🌐 Web Technologies:
   - Frontend frameworks
   - Backend services
   - APIs and databases

What specific help do you need?`,

            'study tips': `Here are effective study techniques:
1. 🎯 Active Learning:
   - Code along with tutorials
   - Build projects from scratch
   - Teach concepts to others

2. ⏰ Time Management:
   - Use Pomodoro Technique
   - Set specific learning goals
   - Take regular breaks

3. 📚 Resource Optimization:
   - Use documentation
   - Join study groups
   - Practice coding challenges

Would you like more details on any of these?`,

            'how to start coding': `Here's how to start your coding journey:
1. 🎓 Choose a Language:
   - Python (beginner-friendly)
   - JavaScript (web development)
   - Java (enterprise/Android)

2. 🔨 Practice Basics:
   - Variables and data types
   - Control structures
   - Functions and objects

3. 🏗️ Build Projects:
   - Start with small projects
   - Follow tutorials
   - Join coding challenges

Ready to start? I can guide you through any of these steps!`,

            'interview preparation': `Let's prepare for your interviews:
1. 📝 Technical Skills:
   - Data Structures & Algorithms
   - System Design basics
   - Coding challenges practice

2. 🤝 Soft Skills:
   - Communication
   - Problem-solving approach
   - Team collaboration

3. 🎯 Company Research:
   - Study company products
   - Understand culture
   - Prepare questions

Which area would you like to focus on?`
        };

        // Check for keywords in the message
        const messageLower = message.toLowerCase();
        for (let key in responses) {
            if (messageLower.includes(key)) {
                return responses[key];
            }
        }

        // Default response with suggestions
        return `I'm here to help! You can ask me about:
1. 📚 Learning paths and courses
2. 💼 Career guidance and job preparation
3. 🔧 Technical help and programming
4. 📝 Study tips and best practices

What would you like to know more about?`;
    }

    // Success Stories Carousel
    function initializeSuccessStories() {
        const carousel = document.getElementById('successCarousel');
        if (!carousel) return;

        const storyCards = carousel.getElementsByClassName('story-card');
        const prevBtn = document.getElementById('prevStory');
        const nextBtn = document.getElementById('nextStory');
        let currentIndex = 0;
        let interval;

        // Function to show specific story
        function showStory(index) {
            // Remove active class from all cards
            Array.from(storyCards).forEach(card => {
                card.classList.remove('active');
                card.style.opacity = '0';
            });
            
            // Add active class to current card with fade effect
            setTimeout(() => {
                storyCards[index].classList.add('active');
                storyCards[index].style.opacity = '1';
            }, 200);
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
        function startAutoRotation() {
            stopAutoRotation(); // Clear any existing interval
            interval = setInterval(nextStory, 15000); // Change story every 15 seconds
        }

        function stopAutoRotation() {
            if (interval) {
                clearInterval(interval);
            }
        }

        // Event listeners
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                prevStory();
                stopAutoRotation();
                startAutoRotation();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                nextStory();
                stopAutoRotation();
                startAutoRotation();
            });
        }

        // Pause rotation when hovering over carousel
        carousel.addEventListener('mouseenter', stopAutoRotation);
        carousel.addEventListener('mouseleave', startAutoRotation);

        // Initialize the first story and start rotation
        showStory(currentIndex);
        startAutoRotation();

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevStory();
                stopAutoRotation();
                startAutoRotation();
            } else if (e.key === 'ArrowRight') {
                nextStory();
                stopAutoRotation();
                startAutoRotation();
            }
        });
    }

    // Initialize the carousel
    initializeSuccessStories();
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