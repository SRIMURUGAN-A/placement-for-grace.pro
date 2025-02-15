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

});