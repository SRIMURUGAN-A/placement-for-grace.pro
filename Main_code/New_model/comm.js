document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-theme')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
        // Save theme preference
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    // Guidelines Popup Handler
    const guidelinesPopup = document.getElementById('guidelinesPopup');
    const acceptBtn = document.getElementById('acceptGuidelines');
    
    // Force show popup on every refresh (for testing)
    localStorage.removeItem('guidelinesAccepted');
    
    // Show popup with animation
    setTimeout(() => {
        guidelinesPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            const popupContent = guidelinesPopup.querySelector('.popup-content');
            popupContent.style.transform = 'translateY(0)';
            popupContent.style.opacity = '1';
        }, 100);
    }, 500);
    
    // Handle accept button click
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('guidelinesAccepted', 'true');
        guidelinesPopup.querySelector('.popup-content').style.transform = 'translateY(50px)';
        guidelinesPopup.querySelector('.popup-content').style.opacity = '0';
        
        setTimeout(() => {
            guidelinesPopup.classList.remove('active');
            document.body.style.overflow = '';
            showToast('Welcome to the community! 🎉', 'success');
        }, 300);
    });

    // Post Interaction Handlers
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.dataset.action;
            const count = this.querySelector('.count');
            
            switch(action) {
                case 'like':
                    this.classList.toggle('liked');
                    updateCount(count, this.classList.contains('liked'));
                    break;
                case 'bookmark':
                    this.classList.toggle('bookmarked');
                    break;
                case 'share':
                    sharePost(this.closest('.post').dataset.postId);
                    break;
            }
        });
    });

    // Create Post Modal Handler
    const createPostBtn = document.querySelector('.create-post-btn');
    const modal = document.getElementById('createPostModal');
    
    createPostBtn?.addEventListener('click', () => {
        modal.classList.add('active');
    });

    // Close modal when clicking outside
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Post Form Handling
    const postForm = document.getElementById('postForm');
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For now, we'll just close the modal
        modal.classList.remove('active');
    });

    // Category Selection
    const categoryItems = document.querySelectorAll('.categories li');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            // Here you would typically filter posts based on category
        });
    });

    // Search Functionality
    const searchInput = document.querySelector('.search-bar input');
    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase();
            // Here you would typically implement search functionality
            console.log('Searching for:', searchTerm);
        }, 300);
    });

    // Helper Functions
    function updateCount(element, increment) {
        let count = parseInt(element.textContent);
        element.textContent = increment ? count + 1 : count - 1;
    }

    function sharePost(postId) {
        // Implement sharing functionality
        const shareData = {
            title: 'Check out this post',
            text: 'Interesting discussion on education',
            url: `${window.location.origin}/post/${postId}`
        };

        if (navigator.share) {
            navigator.share(shareData);
        } else {
            // Fallback to copy link
            copyToClipboard(`${window.location.origin}/post/${postId}`);
            showToast('Link copied to clipboard!');
        }
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text);
    }

    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        // Enhanced toast content with icons
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            info: 'fa-info-circle',
            warning: 'fa-exclamation-triangle'
        };
        
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas ${icons[type]}"></i>
                <span>${message}</span>
            </div>
            <div class="toast-progress"></div>
        `;
        
        document.body.appendChild(toast);
        
        // Add progress bar animation
        const progress = toast.querySelector('.toast-progress');
        progress.style.width = '100%';
        
        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Enhanced Post Interactions
    function initializePostInteractions() {
        // Like animation
        document.querySelectorAll('.action-btn[data-action="like"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const icon = this.querySelector('i');
                icon.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 200);
            });
        });

        // Comment expansion
        document.querySelectorAll('.comments-toggle').forEach(btn => {
            btn.addEventListener('click', function() {
                const commentsSection = this.closest('.post').querySelector('.comments-section');
                commentsSection.classList.toggle('expanded');
                
                if (commentsSection.classList.contains('expanded')) {
                    loadComments(this.closest('.post').dataset.postId);
                }
            });
        });
    }

    // Dynamic Comment Loading
    function loadComments(postId) {
        const commentsSection = document.querySelector(`[data-post-id="${postId}"] .comments-section`);
        
        // Show loading state
        commentsSection.innerHTML = `
            <div class="comment loading-skeleton">
                <div class="comment-avatar"></div>
                <div class="comment-content">
                    <div class="comment-header"></div>
                    <div class="comment-text"></div>
                </div>
            </div>`.repeat(3);

        // Simulate API call
        setTimeout(() => {
            // Replace with actual comments
            renderComments(postId, getDummyComments());
        }, 1000);
    }

    // Render Comments
    function renderComments(postId, comments) {
        const commentsSection = document.querySelector(`[data-post-id="${postId}"] .comments-section`);
        
        commentsSection.innerHTML = comments.map(comment => `
            <div class="comment">
                <img src="${comment.avatar}" alt="${comment.author}" class="user-avatar">
                <div class="comment-content">
                    <div class="comment-header">
                        <span class="comment-author">${comment.author}</span>
                        <span class="comment-time">${formatTimestamp(comment.timestamp)}</span>
                    </div>
                    <p>${comment.content}</p>
                    <div class="comment-actions">
                        <button class="action-btn" data-action="like">
                            <i class="fas fa-heart"></i>
                            <span class="count">${comment.likes}</span>
                        </button>
                        <button class="action-btn" data-action="reply">
                            <i class="fas fa-reply"></i>
                            Reply
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Enhanced Create Post
    function initializePostCreation() {
        const createPostBtn = document.querySelector('.create-post-btn');
        const modal = document.getElementById('createPostModal');
        const postTypeButtons = document.querySelectorAll('.type-btn');
        const postContents = document.querySelectorAll('.post-type-content');
        const mediaUploadArea = document.querySelector('.media-upload-area');
        const fileInput = mediaUploadArea?.querySelector('input[type="file"]');
        const advancedToggle = document.querySelector('.toggle-advanced');
        const tagInput = document.getElementById('postTags');
        const tagList = document.querySelector('.tag-list');
        const tags = new Set();

        // Open modal
        createPostBtn?.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Close modal
        document.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Post Type Switching
        postTypeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.dataset.type;
                
                // Update active button
                postTypeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Show corresponding content
                postContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === `${type}Post`) {
                        content.classList.add('active');
                    }
                });
            });
        });

        // Rich Text Editor
        const editorButtons = document.querySelectorAll('.editor-toolbar button');
        const textarea = document.getElementById('postContent');
        const preview = document.querySelector('.preview-content');

        editorButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const format = btn.dataset.format;
                const selection = {
                    start: textarea.selectionStart,
                    end: textarea.selectionEnd,
                    text: textarea.value.substring(textarea.selectionStart, textarea.selectionEnd)
                };

                let replacement = '';
                switch(format) {
                    case 'bold':
                        replacement = `**${selection.text}**`;
                        break;
                    case 'italic':
                        replacement = `*${selection.text}*`;
                        break;
                    case 'heading':
                        replacement = `\n# ${selection.text}`;
                        break;
                    case 'list-ul':
                        replacement = `\n- ${selection.text}`;
                        break;
                    case 'list-ol':
                        replacement = `\n1. ${selection.text}`;
                        break;
                    case 'link':
                        replacement = `[${selection.text}](url)`;
                        break;
                    case 'code':
                        replacement = `\`${selection.text}\``;
                        break;
                    case 'quote':
                        replacement = `\n> ${selection.text}`;
                        break;
                }

                textarea.value = textarea.value.substring(0, selection.start) + 
                               replacement + 
                               textarea.value.substring(selection.end);
                
                updatePreview();
            });
        });

        // Media Upload
        if (mediaUploadArea) {
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                mediaUploadArea.addEventListener(eventName, preventDefaults);
            });

            ['dragenter', 'dragover'].forEach(eventName => {
                mediaUploadArea.addEventListener(eventName, () => {
                    mediaUploadArea.classList.add('drag-over');
                });
            });

            ['dragleave', 'drop'].forEach(eventName => {
                mediaUploadArea.addEventListener(eventName, () => {
                    mediaUploadArea.classList.remove('drag-over');
                });
            });

            mediaUploadArea.addEventListener('drop', handleDrop);
            mediaUploadArea.addEventListener('click', () => fileInput.click());
            fileInput.addEventListener('change', handleFiles);
        }

        // Poll Options
        const addOptionBtn = document.querySelector('.add-option-btn');
        addOptionBtn?.addEventListener('click', () => {
            const pollOptions = document.querySelector('.poll-options');
            const newOption = document.createElement('div');
            newOption.className = 'poll-option';
            newOption.innerHTML = `
                <input type="text" placeholder="Option ${pollOptions.children.length + 1}" required>
                <button type="button" class="remove-option"><i class="fas fa-times"></i></button>
            `;
            pollOptions.appendChild(newOption);
        });

        // Link Preview
        const linkInput = document.getElementById('linkUrl');
        const fetchPreviewBtn = document.querySelector('.fetch-preview');
        
        fetchPreviewBtn?.addEventListener('click', async () => {
            const url = linkInput.value;
            if (!url) return;

            fetchPreviewBtn.disabled = true;
            fetchPreviewBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Fetching...';

            try {
                // Simulate API call for link preview
                await new Promise(resolve => setTimeout(resolve, 1000));
                const previewHtml = `
                    <div class="link-preview-card">
                        <img src="https://via.placeholder.com/300x200" alt="Preview">
                        <div class="preview-content">
                            <h3>Link Title</h3>
                            <p>Link description goes here...</p>
                            <span class="preview-url">${url}</span>
                        </div>
                    </div>
                `;
                document.querySelector('.link-preview').innerHTML = previewHtml;
            } catch (error) {
                showToast('Failed to fetch link preview', 'error');
            } finally {
                fetchPreviewBtn.disabled = false;
                fetchPreviewBtn.innerHTML = '<i class="fas fa-magic"></i> Fetch Preview';
            }
        });

        // Tag Management
        tagInput?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const tag = e.target.value.trim();
                if (tag && !tags.has(tag)) {
                    tags.add(tag);
                    const tagElement = document.createElement('div');
                    tagElement.className = 'tag-item';
                    tagElement.innerHTML = `
                        #${tag}
                        <button type="button" onclick="removeTag(this, '${tag}')">×</button>
                    `;
                    tagList.appendChild(tagElement);
                    e.target.value = '';
                }
            }
        });

        // Advanced Settings Toggle
        advancedToggle?.addEventListener('click', () => {
            const advancedOptions = document.querySelector('.advanced-options');
            advancedOptions.classList.toggle('active');
            advancedToggle.querySelector('i').classList.toggle('fa-rotate-180');
        });
    }

    // Category Filter Animation
    function initializeCategoryFilter() {
        const pills = document.querySelectorAll('.category-pill');
        const posts = document.querySelectorAll('.post');
        
        pills.forEach(pill => {
            pill.addEventListener('click', function() {
                const category = this.dataset.category;
                
                // Update active state
                pills.forEach(p => p.classList.remove('active'));
                this.classList.add('active');
                
                // Animate posts
                posts.forEach(post => {
                    if (category === 'all' || post.dataset.category === category) {
                        post.style.opacity = '0';
                        setTimeout(() => {
                            post.style.display = 'block';
                            post.style.opacity = '1';
                        }, 300);
                    } else {
                        post.style.opacity = '0';
                        setTimeout(() => {
                            post.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Enhanced Contribute Section
    function initializeContributeSection() {
        const contributeOptions = [
            {
                icon: 'fa-lightbulb',
                title: 'Share Knowledge',
                description: 'Create educational content, tutorials, or study guides',
                points: 50
            },
            {
                icon: 'fa-question-circle',
                title: 'Answer Questions',
                description: 'Help fellow students with their queries',
                points: 30
            },
            {
                icon: 'fa-book',
                title: 'Study Resources',
                description: 'Share helpful learning materials and resources',
                points: 40
            },
            {
                icon: 'fa-project-diagram',
                title: 'Project Collaboration',
                description: 'Start or join student projects',
                points: 60
            }
        ];

        const contributeSection = document.createElement('div');
        contributeSection.className = 'contribute-section';
        contributeSection.innerHTML = `
            <div class="contribute-header">
                <h2>Ways to Contribute</h2>
                <p>Join our community and earn reputation points!</p>
            </div>
            <div class="contribute-grid">
                ${contributeOptions.map(option => `
                    <div class="contribute-card">
                        <div class="contribute-icon">
                            <i class="fas ${option.icon}"></i>
                        </div>
                        <h3>${option.title}</h3>
                        <p>${option.description}</p>
                        <div class="points-badge">
                            <i class="fas fa-star"></i>
                            ${option.points} points
                        </div>
                        <button class="contribute-btn" onclick="startContribution('${option.title.toLowerCase()}')">
                            Get Started
                        </button>
                    </div>
                `).join('')}
            </div>
        `;

        // Insert after the create post button
        const createPostBtn = document.querySelector('.create-post');
        createPostBtn.parentNode.insertBefore(contributeSection, createPostBtn.nextSibling);
    }

    // Initialize contribute section
    initializeContributeSection();

    // Add this to your existing window object
    window.startContribution = function(type) {
        const modal = document.getElementById('createPostModal');
        const form = document.getElementById('postForm');
        
        // Pre-select category based on contribution type
        const categoryMap = {
            'share knowledge': 'tech',
            'answer questions': 'discussion',
            'study resources': 'study',
            'project collaboration': 'career'
        };

        modal.classList.add('active');
        
        // Pre-select the appropriate category
        const category = categoryMap[type];
        if (category) {
            document.querySelectorAll('.category-option').forEach(opt => {
                opt.classList.toggle('selected', opt.dataset.category === category);
            });
        }

        // Add contribution type as a tag
        const tagList = document.querySelector('.tag-list');
        const tagElement = document.createElement('div');
        tagElement.className = 'tag-item';
        tagElement.innerHTML = `
            #${type.replace(/\s+/g, '')}
            <button type="button" onclick="removeTag(this, '${type}')">×</button>
        `;
        tagList.appendChild(tagElement);
    };

    // Initialize all enhancements
    initializePostInteractions();
    initializePostCreation();
    initializeCategoryFilter();
    
    // Initialize tooltips
    tippy('[data-tippy-content]', {
        theme: 'custom',
        animation: 'scale',
        duration: 200
    });

    // Enhanced Search Functionality
    function initializeSearch() {
        const searchInput = document.getElementById('globalSearch');
        const searchResults = document.getElementById('searchResults');
        let searchTimeout;

        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim();

            if (query.length > 2) {
                searchTimeout = setTimeout(() => {
                    performSearch(query);
                }, 300);
            } else {
                searchResults.classList.remove('active');
            }
        });

        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim().length > 2) {
                searchResults.classList.add('active');
            }
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });
    }

    function performSearch(query) {
        const searchResults = document.getElementById('searchResults');
        
        // Simulate API call
        setTimeout(() => {
            // Example results
            const results = [
                {
                    category: 'Tech Jobs',
                    title: 'Summer Internship Opportunities 2024',
                    preview: 'List of top tech companies offering summer internships...'
                },
                {
                    category: 'AI/ML',
                    title: 'Getting Started with Machine Learning',
                    preview: 'A comprehensive guide for beginners in ML...'
                }
            ];

            searchResults.innerHTML = results.map(result => `
                <div class="result-item">
                    <div class="result-category">${result.category}</div>
                    <div class="result-title">${result.title}</div>
                    <div class="result-preview">${result.preview}</div>
                </div>
            `).join('');

            searchResults.classList.add('active');
        }, 500);
    }

    // Category Selection
    function initializeCategories() {
        const categoryItems = document.querySelectorAll('.category-item');
        
        categoryItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all items
                categoryItems.forEach(i => i.classList.remove('active'));
                
                // Add active class to clicked item
                item.classList.add('active');
                
                // Filter posts based on category
                filterPosts(item.dataset.category);
            });
        });
    }

    function filterPosts(category) {
        const posts = document.querySelectorAll('.post');
        
        posts.forEach(post => {
            if (category === 'all' || post.dataset.category === category) {
                post.style.display = 'block';
                setTimeout(() => {
                    post.style.opacity = '1';
                    post.style.transform = 'translateY(0)';
                }, 100);
            } else {
                post.style.opacity = '0';
                post.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    post.style.display = 'none';
                }, 300);
            }
        });
    }

    // Initialize new features
    initializeSearch();
    initializeCategories();

    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const leftSidebar = document.getElementById('leftSidebar');
    const forumContainer = document.querySelector('.forum-container');
    
    if (sidebarToggle && leftSidebar) {
        sidebarToggle.addEventListener('click', function(e) {
            e.preventDefault();
            leftSidebar.classList.toggle('collapsed');
            forumContainer.classList.toggle('sidebar-collapsed');
            
            // Update icon
            const icon = this.querySelector('i');
            if (leftSidebar.classList.contains('collapsed')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }
    
    // Restore sidebar state on page load
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (sidebarCollapsed) {
        leftSidebar.classList.add('collapsed');
        forumContainer.classList.add('sidebar-collapsed');
        const icon = sidebarToggle.querySelector('i');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }

    // Profile Menu Toggle
    const profileMenu = document.querySelector('.profile-menu');
    const profileTrigger = document.querySelector('.profile-trigger');
    const profileDropdown = document.querySelector('.profile-dropdown');

    if (profileTrigger && profileMenu) {
        profileTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            profileMenu.classList.toggle('active');
        });
    }

    // Close profile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (profileMenu && !profileMenu.contains(e.target)) {
            profileMenu.classList.remove('active');
        }
    });

    // Prevent dropdown from closing when clicking inside it
    if (profileDropdown) {
        profileDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

// Utility Functions
function createPostElement(postData) {
    // Function to create new post HTML
    const postElement = document.createElement('article');
    postElement.className = 'post';
    // Add post content
    return postElement;
}

function formatTimestamp(date) {
    // Convert timestamp to relative time (e.g., "2 hours ago")
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} days ago`;
    if (hours > 0) return `${hours} hours ago`;
    if (minutes > 0) return `${minutes} minutes ago`;
    return 'Just now';
}

// Add smooth scrolling for comments
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add infinite scroll
let isLoading = false;
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000 && !isLoading) {
        isLoading = true;
        loadMorePosts();
    }
});

function loadMorePosts() {
    // Show loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.innerHTML = `
        <div class="loading-spinner"></div>
        <p>Loading more posts...</p>
    `;
    document.querySelector('.posts-feed').appendChild(loadingIndicator);

    // Simulate API call
    setTimeout(() => {
        // Remove loading indicator and add new posts
        loadingIndicator.remove();
        // Add new posts here
        isLoading = false;
    }, 1500);
}

// Helper function to remove tags
window.removeTag = function(button, tag) {
    tags.delete(tag);
    button.closest('.tag-item').remove();
};

// Helper function to close modal
function closeModal() {
    document.getElementById('createPostModal').classList.remove('active');
    document.getElementById('postForm').reset();
    document.querySelector('.tag-list').innerHTML = '';
    document.querySelector('.preview-content').innerHTML = '';
    document.querySelectorAll('.category-option').forEach(opt => 
        opt.classList.remove('selected'));
}

// Helper Functions
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

function handleFiles(files) {
    files = files.files || files;
    const mediaPreview = document.querySelector('.media-preview');
    
    [...files].forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const div = document.createElement('div');
                div.className = 'media-item';
                div.innerHTML = `
                    <img src="${e.target.result}" alt="Uploaded media">
                    <button class="remove-media" onclick="this.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                mediaPreview.appendChild(div);
            };
            reader.readAsDataURL(file);
        }
    });
}

function updatePreview() {
    const content = document.getElementById('postContent').value;
    const preview = document.querySelector('.preview-content');
    // Here you would typically convert markdown to HTML
    preview.innerHTML = content;
}