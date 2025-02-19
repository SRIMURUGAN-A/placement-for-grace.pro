// Sample data - In a real application, this would come from a backend
const studentData = {
    name: "John Doe",
    id: "ST12345",
    overallProgress: 75,
    courses: [
        {
            name: "Mathematics",
            progress: 85,
            totalModules: 10,
            completedModules: 8
        },
        {
            name: "Physics",
            progress: 70,
            totalModules: 12,
            completedModules: 8
        },
        {
            name: "Computer Science",
            progress: 90,
            totalModules: 8,
            completedModules: 7
        }
    ],
    tasks: [
        {
            title: "Math Assignment",
            dueDate: "2024-03-25",
            priority: "High"
        },
        {
            title: "Physics Lab Report",
            dueDate: "2024-03-28",
            priority: "Medium"
        },
        {
            title: "Programming Project",
            dueDate: "2024-04-01",
            priority: "High"
        }
    ],
    achievements: [
        {
            title: "Perfect Score",
            icon: "fas fa-star",
            description: "Achieved 100% in Mathematics Quiz"
        },
        {
            title: "Fast Learner",
            icon: "fas fa-bolt",
            description: "Completed 5 modules ahead of schedule"
        },
        {
            title: "Team Player",
            icon: "fas fa-users",
            description: "Helped 10 classmates with their studies"
        }
    ],
    technicalSkills: [
        {
            name: "HTML/CSS",
            level: 90,
            projects: 15,
            status: "Advanced"
        },
        {
            name: "JavaScript",
            level: 85,
            projects: 12,
            status: "Advanced"
        },
        {
            name: "Python",
            level: 75,
            projects: 8,
            status: "Intermediate"
        },
        {
            name: "Database Management",
            level: 70,
            projects: 5,
            status: "Intermediate"
        }
    ],
    learningPaths: [
        {
            title: "Full Stack Development",
            progress: 75,
            modules: ["Web Basics", "Frontend", "Backend", "Database"],
            completed: 3,
            total: 4
        },
        {
            title: "Data Science",
            progress: 40,
            modules: ["Statistics", "Python", "Machine Learning"],
            completed: 1,
            total: 3
        }
    ],
    certifications: [
        {
            name: "Web Development Fundamentals",
            issuer: "CodeAcademy",
            date: "2024-01-15",
            badge: "fas fa-certificate"
        },
        {
            name: "JavaScript Advanced",
            issuer: "Udemy",
            date: "2024-02-20",
            badge: "fas fa-award"
        }
    ],
    communityEngagement: {
        points: 750,
        helpedStudents: 25,
        projectCollaborations: 8,
        forumPosts: 45
    }
};

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    updateStudentInfo();
    updateOverallProgress();
    createCourseCards();
    createTasksList();
    createAchievements();
    createTechnicalSkills();
    createLearningPaths();
    createCertifications();
    createCommunityEngagement();
    initializeCharts();
    initializeFocusTimer();
});

function updateStudentInfo() {
    document.getElementById('studentName').textContent = studentData.name;
    document.getElementById('studentId').textContent = `Student ID: ${studentData.id}`;
}

function updateOverallProgress() {
    const progressBar = document.getElementById('overallProgress');
    progressBar.style.width = `${studentData.overallProgress}%`;
    document.querySelector('.progress-text').textContent = `${studentData.overallProgress}% Complete`;
}

function createCourseCards() {
    const coursesGrid = document.querySelector('.courses-grid');
    studentData.courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <div class="progress-bar-container">
                <div class="progress-bar">
                    <div class="progress" style="width: ${course.progress}%"></div>
                </div>
                <span class="progress-text">${course.progress}%</span>
            </div>
            <p>Modules: ${course.completedModules}/${course.totalModules}</p>
        `;
        coursesGrid.appendChild(courseCard);
    });
}

function createTasksList() {
    const tasksList = document.querySelector('.tasks-list');
    studentData.tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <div>
                <h4>${task.title}</h4>
                <p>Due: ${task.dueDate}</p>
            </div>
            <span class="priority ${task.priority.toLowerCase()}">${task.priority}</span>
        `;
        tasksList.appendChild(taskItem);
    });
}

function createAchievements() {
    const achievementsGrid = document.querySelector('.achievements-grid');
    studentData.achievements.forEach(achievement => {
        const achievementBadge = document.createElement('div');
        achievementBadge.className = 'achievement-badge';
        achievementBadge.innerHTML = `
            <i class="${achievement.icon}"></i>
            <h4>${achievement.title}</h4>
            <p>${achievement.description}</p>
        `;
        achievementsGrid.appendChild(achievementBadge);
    });
}

function createTechnicalSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    studentData.technicalSkills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <h3>${skill.name}</h3>
            <p class="skill-status">${skill.status}</p>
            <div class="skill-level">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
            <p class="projects-count">Projects: ${skill.projects}</p>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

function createLearningPaths() {
    const pathsContainer = document.querySelector('.paths-container');
    studentData.learningPaths.forEach(path => {
        const pathCard = document.createElement('div');
        pathCard.className = 'path-card';
        pathCard.innerHTML = `
            <h3>${path.title}</h3>
            <div class="progress-bar-container">
                <div class="progress-bar">
                    <div class="progress" style="width: ${path.progress}%"></div>
                </div>
                <span class="progress-text">${path.progress}%</span>
            </div>
            <p>Modules: ${path.completed}/${path.total}</p>
            <ul class="modules-list">
                ${path.modules.map(module => `<li>${module}</li>`).join('')}
            </ul>
        `;
        pathsContainer.appendChild(pathCard);
    });
}

function createCertifications() {
    const certGrid = document.querySelector('.cert-grid');
    studentData.certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'cert-card';
        certCard.innerHTML = `
            <i class="${cert.badge} cert-icon"></i>
            <h3>${cert.name}</h3>
            <p>Issued by: ${cert.issuer}</p>
            <p>Date: ${new Date(cert.date).toLocaleDateString()}</p>
        `;
        certGrid.appendChild(certCard);
    });
}

function createCommunityEngagement() {
    const engagementStats = document.querySelector('.engagement-stats');
    const stats = studentData.communityEngagement;
    engagementStats.innerHTML = `
        <div class="stat-card">
            <i class="fas fa-star"></i>
            <h3>Community Points</h3>
            <p>${stats.points}</p>
        </div>
        <div class="stat-card">
            <i class="fas fa-hands-helping"></i>
            <h3>Students Helped</h3>
            <p>${stats.helpedStudents}</p>
        </div>
        <div class="stat-card">
            <i class="fas fa-project-diagram"></i>
            <h3>Project Collaborations</h3>
            <p>${stats.projectCollaborations}</p>
        </div>
        <div class="stat-card">
            <i class="fas fa-comments"></i>
            <h3>Forum Posts</h3>
            <p>${stats.forumPosts}</p>
        </div>
    `;
}

// Scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const scrollTriggers = document.querySelectorAll('.scroll-trigger');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    scrollTriggers.forEach(trigger => observer.observe(trigger));

    // Initialize strength bars
    document.querySelectorAll('.strength-bar').forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.setProperty('--value', value + '%');
    });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effects for cards
document.querySelectorAll('.stat-box, .analytics-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Initialize Charts
function initializeCharts() {
    // Wait for DOM to be fully loaded
    setTimeout(() => {
        try {
            createSkillsChart();
            createActivityChart();
            createGradesChart();
            createTimeDistributionChart();
        } catch (error) {
            console.error('Error initializing charts:', error);
        }
    }, 100);
}

function createSkillsChart() {
    const ctx = document.getElementById('skillsChart');
    if (!ctx) {
        console.error('Skills chart canvas not found');
        return;
    }

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Programming', 'Problem Solving', 'Database', 'Web Dev', 'Algorithms', 'Soft Skills'],
            datasets: [{
                label: 'Current Level',
                data: [85, 75, 70, 90, 65, 80],
                fill: true,
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: 'rgba(52, 152, 219, 1)',
                pointBackgroundColor: 'rgba(52, 152, 219, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}

function createActivityChart() {
    const ctx = document.getElementById('activityChart');
    if (!ctx) {
        console.error('Activity chart canvas not found');
        return;
    }
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Study Hours',
                data: [4, 6, 5, 8, 7, 3, 2],
                borderColor: 'rgba(46, 204, 113, 1)',
                backgroundColor: 'rgba(46, 204, 113, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Weekly Study Activity'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Hours'
                    }
                }
            }
        }
    });
}

function createGradesChart() {
    const ctx = document.getElementById('gradesChart');
    if (!ctx) {
        console.error('Grades chart canvas not found');
        return;
    }
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'F'],
            datasets: [{
                label: 'Grade Distribution',
                data: [12, 8, 3, 1, 0],
                backgroundColor: [
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(241, 196, 15, 0.7)',
                    'rgba(230, 126, 34, 0.7)',
                    'rgba(231, 76, 60, 0.7)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Course Grades'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Courses'
                    }
                }
            }
        }
    });
}

function createTimeDistributionChart() {
    const ctx = document.getElementById('timeChart');
    if (!ctx) {
        console.error('Time distribution chart canvas not found');
        return;
    }
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Lectures', 'Practice', 'Projects', 'Reading', 'Group Study'],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.8)',
                    'rgba(46, 204, 113, 0.8)',
                    'rgba(155, 89, 182, 0.8)',
                    'rgba(241, 196, 15, 0.8)',
                    'rgba(230, 126, 34, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                },
                title: {
                    display: true,
                    text: 'Time Distribution'
                }
            }
        }
    });
}
