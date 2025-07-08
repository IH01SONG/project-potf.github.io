// script.js

// Placeholder for custom JS
console.log("Portfolio site loaded!");

// Typing Effect for EYEDOT
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = this.txt;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const words = ['EYEDOT', 'a Developer', 'a Designer', 'a Creator'];
        new TypeWriter(typingElement, words, 2000);
    }
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            
            // Reset hamburger
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        }
    });
});

// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(248, 250, 252, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(248, 250, 252, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe section headers for animation
document.addEventListener('DOMContentLoaded', () => {
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        observer.observe(header);
    });
});

// Tool cards hover effect with random colors
const toolCards = document.querySelectorAll('.tool-card');
const colors = [
    'linear-gradient(135deg, #6366f1, #8b5cf6)',
    'linear-gradient(135deg, #06b6d4, #3b82f6)',
    'linear-gradient(135deg, #10b981, #059669)',
    'linear-gradient(135deg, #f59e0b, #d97706)',
    'linear-gradient(135deg, #ef4444, #dc2626)',
    'linear-gradient(135deg, #8b5cf6, #7c3aed)'
];

toolCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('i');
        const colorIndex = index % colors.length;
        icon.style.background = colors[colorIndex];
        icon.style.webkitBackgroundClip = 'text';
        icon.style.webkitTextFillColor = 'transparent';
        icon.style.backgroundClip = 'text';
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('i');
        icon.style.background = 'var(--gradient-primary)';
        icon.style.webkitBackgroundClip = 'text';
        icon.style.webkitTextFillColor = 'transparent';
        icon.style.backgroundClip = 'text';
    });
});

// Portfolio items animation on scroll
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

// Initially hide portfolio items
portfolioItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'all 0.6s ease';
    portfolioObserver.observe(item);
});

// Stats counter animation
const stats = document.querySelectorAll('.stat h4');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = target.textContent;
            const numericValue = parseInt(finalValue.replace(/\D/g, ''));
            const suffix = finalValue.replace(/\d/g, '');
            
            let currentValue = 0;
            const increment = numericValue / 100;
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                target.textContent = Math.floor(currentValue) + suffix;
            }, 20);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => {
    statsObserver.observe(stat);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formFields = contactForm.querySelectorAll('input, textarea');
        
        // Simple validation
        let isValid = true;
        formFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#ef4444';
            } else {
                field.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }
        });
        
        if (isValid) {
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'var(--success-color)';
                
                // Reset form
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = 'var(--gradient-primary)';
                }, 2000);
            }, 1500);
        }
    });
}

// Floating cards animation enhancement
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.style.animationPlayState = 'paused';
        card.style.transform = 'scale(1.1) rotate(10deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.animationPlayState = 'running';
        card.style.transform = '';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (hero && scrolled < hero.offsetHeight) {
        floatingCards.forEach((card, index) => {
            const speed = 0.5 + (index * 0.2);
            card.style.transform += ` translateY(${scrolled * speed}px)`;
        });
    }
});

// Add loading animation
window.addEventListener('load', () => {
    const body = document.body;
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        body.style.opacity = '1';
    }, 100);
});

// Cursor trail effect (optional enhancement)
const createCursorTrail = () => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.7;
        transition: all 0.1s ease;
    `;
    document.body.appendChild(trail);
    
    return trail;
};

const trails = [];
for (let i = 0; i < 5; i++) {
    trails.push(createCursorTrail());
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

const animateTrails = () => {
    let x = mouseX;
    let y = mouseY;
    
    trails.forEach((trail, index) => {
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        trail.style.opacity = 0.7 - (index * 0.1);
        trail.style.transform = `scale(${1 - (index * 0.1)})`;
        
        const nextTrail = trails[index + 1] || trails[0];
        x += (nextTrail.offsetLeft - x) * 0.3;
        y += (nextTrail.offsetTop - y) * 0.3;
    });
    
    requestAnimationFrame(animateTrails);
};

// Only enable cursor trail on desktop
if (window.innerWidth > 768) {
    animateTrails();
}

// Theme toggle functionality (bonus feature)
const createThemeToggle = () => {
    const toggle = document.createElement('button');
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.className = 'theme-toggle';
    toggle.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: var(--gradient-primary);
        color: white;
        cursor: pointer;
        box-shadow: var(--shadow-medium);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = toggle.querySelector('i');
        icon.className = document.body.classList.contains('dark-theme') 
            ? 'fas fa-sun' 
            : 'fas fa-moon';
    });
    
    document.body.appendChild(toggle);
};

// Initialize theme toggle
createThemeToggle();
