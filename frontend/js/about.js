// Example script to handle any dynamic behavior or interactivity for the page
document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to GRACEUP Placement Club!");
    // You can add any dynamic interactivity or event listeners here as needed
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 200;
    
    function updateCount() {
        const count = parseInt(counter.innerText);
        if(count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    }
    
    updateCount();
});

// Success Stories Carousel
const storyCards = document.querySelectorAll('.story-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentStory = 0;

function showStory(index) {
    storyCards.forEach(card => card.classList.remove('active'));
    storyCards[index].classList.add('active');
}

if(prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentStory = (currentStory + 1) % storyCards.length;
        showStory(currentStory);
    });

    prevBtn.addEventListener('click', () => {
        currentStory = (currentStory - 1 + storyCards.length) % storyCards.length;
        showStory(currentStory);
    });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    const scrolled = window.pageYOffset;
    heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
});
