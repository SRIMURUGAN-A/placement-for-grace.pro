// Tool data
const toolsData = {
    // Design & Creativity Tools
    'canva': {
        name: 'Canva AI',
        icon: 'image/tool-icons/canva.png',
        rating: '4.8/5',
        users: '100M+',
        pricing: 'Freemium',
        description: 'Canva AI is a powerful design platform that uses artificial intelligence to help create professional designs quickly.',
        features: [
            'Magic Design - instantly create designs',
            'AI Text to Image generation',
            'Background removal',
            'Photo editing with AI',
            'Brand Kit automation'
        ],
        useCases: [
            'Social media graphics',
            'Presentations',
            'Marketing materials',
            'Educational content',
            'Personal projects'
        ],
        link: 'https://www.canva.com'
    },
    'midjourney': {
        name: 'Midjourney',
        icon: 'image/tool-icons/midjourney.png',
        rating: '4.9/5',
        users: '10M+',
        pricing: 'Paid',
        description: 'Create stunning AI-generated artwork and illustrations with natural language prompts.',
        features: [
            'High-quality image generation',
            'Custom art styles',
            'Variations and upscaling',
            'Community features',
            'Discord integration'
        ],
        useCases: [
            'Digital art creation',
            'Concept design',
            'Book illustrations',
            'Game assets',
            'Visual brainstorming'
        ],
        link: 'https://www.midjourney.com'
    },
    'runway': {
        name: 'Runway ML',
        icon: 'image/tool-icons/runway.png',
        rating: '4.7/5',
        users: '5M+',
        pricing: 'Freemium',
        description: 'Advanced AI video editing and content creation platform.',
        features: [
            'Video editing with AI',
            'Green screen removal',
            'Motion tracking',
            'Text to video',
            'Style transfer'
        ],
        useCases: [
            'Video production',
            'Special effects',
            'Content creation',
            'Motion graphics',
            'Film editing'
        ],
        link: 'https://runway.ml'
    },

    // Development Tools
    'github-copilot': {
        name: 'GitHub Copilot',
        icon: 'image/tool-icons/github-copilot.png',
        rating: '4.7/5',
        users: '1M+',
        pricing: 'Paid',
        description: 'GitHub Copilot is your AI pair programmer that helps you write better code faster.',
        features: [
            'Real-time code suggestions',
            'Multiple programming language support',
            'Context-aware completions',
            'Natural language to code',
            'Integration with popular IDEs'
        ],
        useCases: [
            'Software development',
            'Code automation',
            'Learning programming',
            'Project development',
            'Code documentation'
        ],
        link: 'https://github.com/features/copilot'
    },
    'codeium': {
        name: 'Codeium',
        icon: 'image/tool-icons/codeium.png',
        rating: '4.6/5',
        users: '500K+',
        pricing: 'Free',
        description: 'Free AI-powered code completion tool supporting multiple IDEs and languages.',
        features: [
            'Code completion',
            'Code explanation',
            'Bug detection',
            'Multi-language support',
            'IDE integration'
        ],
        useCases: [
            'Code development',
            'Learning to code',
            'Code review',
            'Debugging',
            'Code optimization'
        ],
        link: 'https://codeium.com'
    },

    // Learning Tools
    'chatgpt': {
        name: 'ChatGPT',
        icon: 'image/tool-icons/chatgpt.png',
        rating: '4.9/5',
        users: '100M+',
        pricing: 'Freemium',
        description: 'Advanced AI language model for learning, writing, and problem-solving.',
        features: [
            'Natural language interaction',
            'Homework help',
            'Essay writing assistance',
            'Code explanation',
            'Language learning'
        ],
        useCases: [
            'Academic research',
            'Learning concepts',
            'Writing assistance',
            'Problem-solving',
            'Language practice'
        ],
        link: 'https://chat.openai.com'
    },
    'quillbot': {
        name: 'QuillBot',
        icon: 'image/tool-icons/quillbot.png',
        rating: '4.7/5',
        users: '50M+',
        pricing: 'Freemium',
        description: 'AI-powered writing and paraphrasing tool for better content creation.',
        features: [
            'Paraphrasing',
            'Grammar checking',
            'Citation generator',
            'Summarizer',
            'Plagiarism checker'
        ],
        useCases: [
            'Academic writing',
            'Content creation',
            'Research papers',
            'Article writing',
            'Essay improvement'
        ],
        link: 'https://quillbot.com'
    },

    // Productivity Tools
    'notion': {
        name: 'Notion AI',
        icon: 'image/tool-icons/notion-ai.png',
        rating: '4.8/5',
        users: '20M+',
        pricing: 'Freemium',
        description: 'AI-enhanced workspace for notes, tasks, and collaboration.',
        features: [
            'AI writing assistance',
            'Task management',
            'Document organization',
            'Team collaboration',
            'Template library'
        ],
        useCases: [
            'Note-taking',
            'Project management',
            'Team collaboration',
            'Knowledge base',
            'Personal organization'
        ],
        link: 'https://notion.so'
    },
    'otter': {
        name: 'Otter.ai',
        icon: 'image/tool-icons/otter.png',
        rating: '4.6/5',
        users: '10M+',
        pricing: 'Freemium',
        description: 'AI-powered meeting notes and real-time transcription.',
        features: [
            'Real-time transcription',
            'Meeting summarization',
            'Voice recognition',
            'Collaboration tools',
            'Search functionality'
        ],
        useCases: [
            'Meeting notes',
            'Interviews',
            'Lectures',
            'Content creation',
            'Research documentation'
        ],
        link: 'https://otter.ai'
    },

    // Add Writing & Content Tools
    'grammarly': {
        name: 'Grammarly AI',
        category: 'writing',
        icon: 'image/tool-icons/grammarly.png',
        rating: '4.8/5',
        users: '30M+',
        pricing: 'Freemium',
        description: 'AI-powered writing assistant for grammar and style improvement.',
        features: [
            'Grammar checking',
            'Style suggestions',
            'Tone detection',
            'Plagiarism checker',
            'Browser extension'
        ],
        link: 'https://www.grammarly.com'
    },
    'copy-ai': {
        name: 'Copy.ai',
        category: 'writing',
        icon: 'image/tool-icons/copy-ai.png',
        rating: '4.7/5',
        pricing: 'Freemium',
        description: 'AI content generation for marketing and business.',
        features: [
            'Blog post generation',
            'Social media content',
            'Email writing',
            'Product descriptions',
            'Ad copy'
        ],
        link: 'https://www.copy.ai'
    },

    // Add Research & Study Tools
    'zotero': {
        name: 'Zotero AI',
        category: 'research',
        icon: 'image/tool-icons/zotero.png',
        rating: '4.6/5',
        pricing: 'Free',
        description: 'Reference management with AI capabilities.',
        features: [
            'Citation management',
            'PDF organization',
            'Collaborative research',
            'Web clipping',
            'Bibliography generation'
        ],
        link: 'https://www.zotero.org'
    },

    // Add Audio & Video Tools
    'descript': {
        name: 'Descript',
        category: 'audio',
        icon: 'image/tool-icons/descript.png',
        rating: '4.8/5',
        pricing: 'Freemium',
        description: 'AI-powered audio and video editing platform.',
        features: [
            'Transcription',
            'Voice cloning',
            'Video editing',
            'Screen recording',
            'Collaboration tools'
        ],
        link: 'https://www.descript.com'
    },
    'murf': {
        name: 'Murf AI',
        category: 'audio',
        icon: 'image/tool-icons/murf.png',
        rating: '4.7/5',
        pricing: 'Freemium',
        description: 'AI voice generation and studio.',
        features: [
            'Text to speech',
            'Voice cloning',
            'Multiple languages',
            'Voice editing',
            'Commercial usage'
        ],
        link: 'https://murf.ai'
    },

    // Design & Art Tools
    'photoshop': {
        name: 'Adobe Photoshop',
        category: 'creativity',
        icon: 'image/tool-icons/photoshop.png',
        rating: '4.9/5',
        users: '50M+',
        pricing: 'Paid',
        description: 'Industry-standard software for image editing and graphic design.',
        features: [
            'Advanced photo editing',
            'Layer-based editing',
            'Neural filters',
            'Smart objects',
            'Extensive plugin support'
        ],
        link: 'https://www.adobe.com/products/photoshop.html'
    },
    'figma': {
        name: 'Figma',
        category: 'creativity',
        icon: 'image/tool-icons/figma.png',
        rating: '4.8/5',
        users: '20M+',
        pricing: 'Freemium',
        description: 'Collaborative interface design tool for teams.',
        features: [
            'Real-time collaboration',
            'Component libraries',
            'Auto-layout',
            'Prototyping',
            'Plugin ecosystem'
        ],
        link: 'https://www.figma.com'
    },

    // Writing & Content Tools
    'hemingway': {
        name: 'Hemingway Editor',
        category: 'writing',
        icon: 'image/tool-icons/hemingway.png',
        rating: '4.6/5',
        users: '5M+',
        pricing: 'Free/Paid',
        description: 'Makes your writing bold and clear.',
        features: [
            'Readability analysis',
            'Writing suggestions',
            'Sentence structure',
            'Word choice help',
            'Format export'
        ],
        link: 'https://hemingwayapp.com'
    },

    // Development Tools
    'vscode': {
        name: 'Visual Studio Code',
        category: 'development',
        icon: 'image/tool-icons/vscode.png',
        rating: '4.9/5',
        users: '100M+',
        pricing: 'Free',
        description: 'Powerful and extensible code editor.',
        features: [
            'IntelliSense',
            'Debugging',
            'Git integration',
            'Extensions',
            'Live Share'
        ],
        link: 'https://code.visualstudio.com'
    },

    // Design & Art Tools (15)
    'illustrator': {
        name: 'Adobe Illustrator',
        category: 'creativity',
        icon: 'image/tool-icons/illustrator.png',
        rating: '4.8/5',
        pricing: 'Paid',
        features: ['Vector graphics', 'Logo design', 'Illustration tools']
    },
    'coreldraw': {
        name: 'CorelDRAW',
        category: 'creativity',
        pricing: 'Paid',
        features: ['Vector illustration', 'Page layout', 'Typography tools']
    },
    'inkscape': {
        name: 'Inkscape',
        category: 'creativity',
        pricing: 'Free',
        features: ['Vector graphics', 'Open source', 'Cross-platform']
    },
    'sketch': {
        name: 'Sketch',
        category: 'creativity',
        pricing: 'Paid',
        features: ['UI design', 'Prototyping', 'Collaboration']
    },
    'blender': {
        name: 'Blender',
        category: 'creativity',
        pricing: 'Free',
        features: ['3D modeling', 'Animation', 'Video editing']
    },
    'procreate': {
        name: 'Procreate',
        category: 'creativity',
        pricing: 'Paid',
        features: ['Digital painting', 'iPad exclusive', 'Brush studio']
    },
    'gimp': {
        name: 'GIMP',
        category: 'creativity',
        pricing: 'Free',
        features: ['Photo editing', 'Open source', 'Plugin support']
    },
    'affinity-designer': {
        name: 'Affinity Designer',
        category: 'creativity',
        pricing: 'Paid',
        features: ['Vector graphics', 'Professional tools', 'One-time purchase']
    },
    'krita': {
        name: 'Krita',
        category: 'creativity',
        pricing: 'Free',
        features: ['Digital painting', 'Animation', 'Open source']
    },
    'adobe-xd': {
        name: 'Adobe XD',
        category: 'creativity',
        pricing: 'Paid',
        features: ['UI/UX design', 'Prototyping', 'Adobe integration']
    },
    'vectornator': {
        name: 'Vectornator',
        category: 'creativity',
        pricing: 'Free',
        features: ['Vector design', 'iOS/macOS', 'Professional tools']
    },
    'davinci-resolve': {
        name: 'DaVinci Resolve',
        category: 'creativity',
        pricing: 'Freemium',
        features: ['Video editing', 'Color correction', 'Visual effects']
    },

    // Writing & Content Tools (15)
    'grammarly': {
        name: 'Grammarly',
        category: 'writing',
        pricing: 'Freemium',
        features: ['Grammar checking', 'Style suggestions', 'Plagiarism detection']
    },
    // Add remaining writing tools...

    // Development Tools (15)
    'vscode': {
        name: 'Visual Studio Code',
        category: 'development',
        pricing: 'Free',
        features: ['Code editing', 'Extensions', 'Debugging']
    },
    // Add remaining development tools...

    // Productivity Tools (15)
    'trello': {
        name: 'Trello',
        category: 'productivity',
        pricing: 'Freemium',
        features: ['Task management', 'Collaboration', 'Customization']
    },
    // Add remaining productivity tools...

    // Research & Study Tools (15)
    'google-scholar': {
        name: 'Google Scholar',
        category: 'research',
        pricing: 'Free',
        features: ['Academic search', 'Citation tracking', 'Library links']
    },
    // Add remaining research tools...

    // Audio & Video Tools (15)
    'premiere-pro': {
        name: 'Adobe Premiere Pro',
        category: 'audio',
        pricing: 'Paid',
        features: ['Video editing', 'Audio editing', 'Effects']
    }
    // Add remaining audio/video tools...
};

// DOM Elements
const toolSearch = document.getElementById('toolSearch');
const filterButtons = document.querySelectorAll('.filter-btn');
const toolCards = document.querySelectorAll('.tool-card');
const modal = document.getElementById('toolModal');
const closeModal = document.querySelector('.close-modal');
const learnMoreButtons = document.querySelectorAll('.learn-more-btn');

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter tools
        toolCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Search functionality
toolSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    toolCards.forEach(card => {
        const toolName = card.querySelector('h3').textContent.toLowerCase();
        const toolDescription = card.querySelector('p').textContent.toLowerCase();
        
        if (toolName.includes(searchTerm) || toolDescription.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Modal functionality
function openModal(toolId) {
    const toolData = toolsData[toolId];
    if (!toolData) return;
    
    const modal = document.getElementById('toolModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Update modal content
    modalContent.querySelector('.modal-tool-icon').src = toolData.icon;
    modalContent.querySelector('h2').textContent = toolData.name;
    modalContent.querySelector('.rating').textContent = toolData.rating;
    modalContent.querySelector('.users').textContent = toolData.users;
    modalContent.querySelector('.pricing').textContent = toolData.pricing;
    modalContent.querySelector('.description').textContent = toolData.description;
    
    // Update features
    const featuresList = modalContent.querySelector('.key-features ul');
    featuresList.innerHTML = toolData.features.map(feature => `<li>${feature}</li>`).join('');
    
    // Update use cases
    const useCasesList = modalContent.querySelector('.use-cases ul');
    useCasesList.innerHTML = toolData.useCases.map(useCase => `<li>${useCase}</li>`).join('');
    
    // Update try tool button
    modalContent.querySelector('.try-tool-btn').href = toolData.link;
    
    modal.style.display = 'block';
}

learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const toolId = button.dataset.tool;
        openModal(toolId);
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

// Bookmark functionality
let bookmarkedTools = JSON.parse(localStorage.getItem('bookmarkedTools')) || [];
const bookmarkCount = document.querySelector('.bookmark-count');

function updateBookmarkCount() {
    bookmarkCount.textContent = bookmarkedTools.length;
}

function toggleBookmark(toolId) {
    const index = bookmarkedTools.indexOf(toolId);
    if (index === -1) {
        bookmarkedTools.push(toolId);
    } else {
        bookmarkedTools.splice(index, 1);
    }
    localStorage.setItem('bookmarkedTools', JSON.stringify(bookmarkedTools));
    updateBookmarkCount();
}

// Initialize bookmark count
updateBookmarkCount();

// Add dark mode toggle functionality
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleTheme() {
    document.body.setAttribute('data-theme', 
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    
    const icon = themeToggle.querySelector('i');
    icon.className = document.body.getAttribute('data-theme') === 'dark' 
        ? 'fas fa-sun' 
        : 'fas fa-moon';
}

// Set initial theme
document.body.setAttribute('data-theme', 
    prefersDarkScheme.matches ? 'dark' : 'light'
);

themeToggle.addEventListener('click', toggleTheme);

// Scroll to Top functionality
const scrollTopBtn = document.getElementById('scrollTop');
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/Hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Share functionality
const shareBtn = document.getElementById('share');
shareBtn.addEventListener('click', async () => {
    try {
        if (navigator.share) {
            await navigator.share({
                title: 'GRACEUP AI Tools Hub',
                text: 'Check out this amazing collection of AI tools!',
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const dummy = document.createElement('input');
            document.body.appendChild(dummy);
            dummy.value = window.location.href;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
            alert('Link copied to clipboard!');
        }
    } catch (err) {
        console.error('Error sharing:', err);
    }
});

// Feedback form
const feedbackBtn = document.getElementById('feedback');
feedbackBtn.addEventListener('click', () => {
    const feedbackModal = document.createElement('div');
    feedbackModal.className = 'modal feedback-modal';
    feedbackModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Send Feedback</h2>
            <form id="feedbackForm">
                <div class="form-group">
                    <label for="feedbackType">Type of Feedback</label>
                    <select id="feedbackType" required>
                        <option value="suggestion">Suggestion</option>
                        <option value="bug">Bug Report</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="feedbackMessage">Your Message</label>
                    <textarea id="feedbackMessage" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Send Feedback</button>
            </form>
        </div>
    `;
    document.body.appendChild(feedbackModal);
    
    const closeBtn = feedbackModal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(feedbackModal);
    });
    
    const form = feedbackModal.querySelector('#feedbackForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle feedback submission here
        alert('Thank you for your feedback!');
        document.body.removeChild(feedbackModal);
    });
}); 