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
    function initializeCreatePost() {
        const createPostBtn = document.querySelector('.create-post-btn');
        const modal = document.getElementById('createPostModal');
        const closeBtn = document.getElementById('closePostModal');
        const typeButtons = document.querySelectorAll('.type-btn');
        const postContents = document.querySelectorAll('.post-type-content');
        
        // Open modal
        createPostBtn?.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Close modal
        closeBtn?.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close on outside click
        modal?.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Post type switching
        typeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.dataset.type;
                
                // Update buttons
                typeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update content sections
                postContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === `${type}Post`) {
                        content.classList.add('active');
                    }
                });
            });
        });

        // Tag input handling
        const tagInput = document.getElementById('postTags');
        const tagList = document.querySelector('.tag-list');
        const tags = new Set();

        tagInput?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.value.trim()) {
                e.preventDefault();
                const tag = e.target.value.trim();
                if (!tags.has(tag)) {
                    tags.add(tag);
                    const tagElement = document.createElement('span');
                    tagElement.className = 'tag-item';
                    tagElement.innerHTML = `
                        ${tag}
                        <button onclick="removeTag(this, '${tag}')">
                            <i class="fas fa-times"></i>
                        </button>
                    `;
                    tagList.appendChild(tagElement);
                }
                e.target.value = '';
            }
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
    initializeCreatePost();
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

    // Initialize feed filters
    initializeFeedFilters();
    
    // Initialize view options
    initializeViewOptions();

    // Initialize Masonry Layout for card view
    function initializeMasonryLayout() {
        const grid = document.querySelector('.posts-feed.card-view');
        if (grid) {
            new Masonry(grid, {
                itemSelector: '.post',
                columnWidth: '.post',
                gutter: 24
            });
        }
    }

    // Enhanced Post Loading
    function loadPosts(filter = 'latest') {
        const postsContainer = document.querySelector('.posts-feed');
        
        // Show loading skeletons
        postsContainer.innerHTML = Array(6).fill(0).map(() => `
            <article class="post loading">
                <div class="post-header loading-skeleton">
                    <div class="avatar-placeholder"></div>
                    <div class="meta-placeholder">
                        <div class="title-placeholder"></div>
                        <div class="subtitle-placeholder"></div>
                    </div>
                </div>
                <div class="content-placeholder loading-skeleton"></div>
            </article>
        `).join('');

        // Simulate API call
        setTimeout(() => {
            // Replace with actual posts
            fetchPosts(filter).then(renderPosts);
        }, 1000);
    }

    // Enhanced Post Interactions
    function initializePostInteractions() {
        document.querySelectorAll('.post').forEach(post => {
            // Like Animation
            const likeBtn = post.querySelector('.action-btn[data-action="like"]');
            if (likeBtn) {
                likeBtn.addEventListener('click', () => {
                    likeBtn.classList.toggle('active');
                    const count = likeBtn.querySelector('.count');
                    const currentCount = parseInt(count.textContent);
                    count.textContent = likeBtn.classList.contains('active') ? 
                        currentCount + 1 : currentCount - 1;
                    
                    // Add heart animation
                    const heart = document.createElement('div');
                    heart.className = 'floating-heart';
                    likeBtn.appendChild(heart);
                    setTimeout(() => heart.remove(), 1000);
                });
            }

            // Share functionality
            const shareBtn = post.querySelector('.action-btn[data-action="share"]');
            if (shareBtn) {
                shareBtn.addEventListener('click', () => {
                    if (navigator.share) {
                        navigator.share({
                            title: post.querySelector('.post-title').textContent,
                            text: post.querySelector('.post-content').textContent,
                            url: window.location.href
                        });
                    } else {
                        // Fallback to copy link
                        copyToClipboard(window.location.href);
                        showToast('Link copied to clipboard!', 'success');
                    }
                });
            }
        });
    }

    // Initialize Infinite Scroll
    function initializeInfiniteScroll() {
        let isLoading = false;
        let page = 1;
        
        window.addEventListener('scroll', () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000) {
                if (!isLoading) {
                    isLoading = true;
                    loadMorePosts(page++).then(() => {
                        isLoading = false;
                    });
                }
            }
        });
    }

    // Initialize Search with Typeahead
    function initializeSearch() {
        const searchInput = document.querySelector('.search-wrapper input');
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results';
        searchInput.parentNode.appendChild(resultsContainer);
        
        let debounceTimer;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const query = e.target.value.trim();
                if (query.length > 2) {
                    performSearch(query, resultsContainer);
                } else {
                    resultsContainer.style.display = 'none';
                }
            }, 300);
        });
    }

    // Add these to your DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', function() {
        // ... existing code ...

        // Initialize new features
        initializeMasonryLayout();
        initializeInfiniteScroll();
        initializeSearch();
        
        // Add Grace College logo
        const logo = document.querySelector('.logo');
        logo.innerHTML = `
            <img src="https://www.gracecoe.org/assets/img/gcoe_logo.png" alt="Grace College Logo" class="logo-image">
            <div class="logo-text">Student Hub</div>
        `;
    });
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

function initializeFeedFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Here you would typically filter the posts based on the selected filter
            const filter = btn.textContent.trim().toLowerCase();
            filterPosts(filter);
        });
    });
}

function filterPosts(filter) {
    const posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
        // Add animation for smooth transition
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            // Here you would typically check if the post matches the filter
            // For now, we'll just show all posts
            post.style.display = 'block';
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }, 300);
    });
}

function initializePostInteractions() {
    // Initialize reaction buttons
    const reactionButtons = document.querySelectorAll('.reaction-btn');
    
    reactionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const count = btn.querySelector('.count');
            if (count) {
                const currentCount = parseInt(count.textContent);
                count.textContent = btn.classList.contains('active') ? 
                    currentCount + 1 : currentCount - 1;
            }
        });
    });
    
    // Initialize quick reply
    const quickReplyForms = document.querySelectorAll('.quick-reply');
    
    quickReplyForms.forEach(form => {
        const input = form.querySelector('input');
        const button = form.querySelector('.quick-reply-btn');
        
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (input.value.trim()) {
                // Here you would typically handle the comment submission
                console.log('Quick reply:', input.value);
                input.value = '';
                
                // Show success message
                showToast('Comment posted successfully!', 'success');
            }
        });
        
        // Allow submitting with Enter key
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
                e.preventDefault();
                button.click();
            }
        });
    });
}

function initializeViewOptions() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const postsContainer = document.querySelector('.posts-feed');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            viewButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Change posts layout based on selected view
            const view = btn.dataset.view;
            postsContainer.className = `posts-feed ${view}-view`;
        });
    });
}

// Initialize trending topics scroll
function initializeTrendingTopics() {
    const topicsContainer = document.querySelector('.trending-topics');
    let isScrolling = false;
    
    topicsContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(() => {
                topicsContainer.scrollLeft += e.deltaY;
                isScrolling = false;
            });
        }
    });
}

// Call this function when the page loads
initializeTrendingTopics();