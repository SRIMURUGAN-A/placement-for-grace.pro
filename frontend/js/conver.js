document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('lessonModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.close-modal');
    const searchInput = document.querySelector('.search-bar input');
    const topicCards = document.querySelectorAll('.topic-card');

    // Lesson content database
    const lessonContent = {
        selfIntro: {
            title: "Self Introduction Mastery",
            content: `
                <h3>Key Components of a Great Self Introduction</h3>
                <ul>
                    <li>Start with a friendly greeting</li>
                    <li>State your name clearly</li>
                    <li>Share relevant background</li>
                    <li>Express your goals or interests</li>
                    <li>End with a conversation opener</li>
                </ul>
                <h3>Practice Exercise</h3>
                <p>Write a 30-second introduction following the template below:</p>
                <textarea rows="4" placeholder="Hi, I'm [Name]. I'm a [Role/Position] with experience in [Field/Industry]..."></textarea>
                <button class="practice-btn">Save Progress</button>
            `
        },
        speaking: {
            title: "Public Speaking Essentials",
            content: `
                <h3>Fundamental Speaking Techniques</h3>
                <ul>
                    <li>Control your breathing</li>
                    <li>Maintain eye contact</li>
                    <li>Use appropriate gestures</li>
                    <li>Practice vocal variety</li>
                    <li>Structure your message</li>
                </ul>
                <h3>Recording Exercise</h3>
                <p>Record a 2-minute speech on a topic you're passionate about.</p>
                <button class="record-btn">Start Recording</button>
            `
        },
        negotiation: {
            title: "Negotiation Strategies",
            content: `
                <h3>Essential Negotiation Skills</h3>
                <ul>
                    <li>Research and preparation</li>
                    <li>Active listening</li>
                    <li>Understanding leverage</li>
                    <li>Creating win-win situations</li>
                    <li>Handling objections</li>
                </ul>
                <h3>Scenario Practice</h3>
                <p>Choose a scenario and practice your negotiation skills:</p>
                <select>
                    <option>Salary Negotiation</option>
                    <option>Business Deal</option>
                    <option>Resource Allocation</option>
                </select>
                <button class="scenario-btn">Start Scenario</button>
            `
        }
    };

    // Event Listeners
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', function() {
            const topicId = this.parentElement.id;
            openLesson(topicId);
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        topicCards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Function to open lesson modal
    function openLesson(topicId) {
        const lesson = lessonContent[topicId];
        if (lesson) {
            modalTitle.textContent = lesson.title;
            modalContent.innerHTML = lesson.content;
            modal.style.display = 'block';
        }
    }

    // Initialize progress circles
    const circles = document.querySelectorAll('.progress-circle');
    
    circles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        const radius = 52;
        const circumference = 2 * Math.PI * radius;
        
        const progressRing = circle.querySelector('.progress-ring-circle-fill');
        const offset = circumference - (progress / 100) * circumference;
        
        progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        progressRing.style.strokeDashoffset = circumference;
        
        // Animate the progress
        setTimeout(() => {
            progressRing.style.strokeDashoffset = offset;
        }, 100);
    });

    // Theme switching functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Apply theme to both html and body elements
        document.documentElement.setAttribute('data-theme', newTheme);
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Enhanced quotes functionality
    const quotes = [
        {
            text: "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
            author: "Tony Robbins"
        },
        {
            text: "Communication is not about speaking what we think. Communication is about ensuring others hear what we mean.",
            author: "Simon Sinek"
        },
        {
            text: "The single biggest problem in communication is the illusion that it has taken place.",
            author: "George Bernard Shaw"
        },
        {
            text: "To effectively communicate, we must realize that we are all different in the way we perceive the world.",
            author: "Tony Robbins"
        },
        {
            text: "Communication works for those who work at it.",
            author: "John Powell"
        }
    ];

    function updateQuote() {
        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');
        const progressBar = document.querySelector('.progress-bar');
        
        // Get random quote
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        
        // Fade out
        quoteText.style.opacity = '0';
        quoteAuthor.style.opacity = '0';
        
        setTimeout(() => {
            // Update content
            quoteText.textContent = quote.text;
            quoteAuthor.textContent = `- ${quote.author}`;
            
            // Reset and start progress bar
            progressBar.style.width = '0';
            setTimeout(() => {
                progressBar.style.width = '100%';
            }, 50);
            
            // Fade in
            quoteText.style.opacity = '1';
            quoteAuthor.style.opacity = '1';
        }, 500);
    }

    // Initialize quotes
    document.addEventListener('DOMContentLoaded', () => {
        updateQuote();
        // Change quote every 5 seconds
        setInterval(updateQuote, 5000);
    });

    // Add smooth dropdown animations
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.style.display = 'block';
            requestAnimationFrame(() => {
                dropdownContent.style.opacity = '1';
                dropdownContent.style.transform = 'translateY(0)';
            });
        });

        dropdown.addEventListener('mouseleave', function() {
            const dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.style.opacity = '0';
            dropdownContent.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                dropdownContent.style.display = 'none';
            }, 300);
        });
    });
});
