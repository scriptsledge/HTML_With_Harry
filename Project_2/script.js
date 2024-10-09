// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', function(event) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    
    // Basic validation
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill out all the fields.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    } else {
        alert('Message sent successfully!');
    }
});

// Email validation helper function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Progress Bar Animation on Scroll
const progressBars = document.querySelectorAll('.progress-bar span');

function checkScroll() {
    const triggerPoint = window.innerHeight / 1.2;
    
    progressBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        
        if (barPosition < triggerPoint) {
            const width = bar.style.width;
            bar.style.transition = 'width 2s ease-in-out';
            bar.style.width = width;
        }
    });
}

window.addEventListener('scroll', checkScroll);

// Portfolio Image Hover Effect
const portfolioItems = document.querySelectorAll('.portfolio-item img');

portfolioItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease-in-out';
    });
    
    item.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Show "Back to Top" button on scroll
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '⬆ Back to Top';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.padding = '10px 20px';
backToTopBtn.style.border = 'none';
backToTopBtn.style.backgroundColor = '#45A29E';
backToTopBtn.style.color = '#fff';
backToTopBtn.style.borderRadius = '30px';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.display = 'none';
backToTopBtn.style.zIndex = '1000';
backToTopBtn.style.fontSize = '16px';

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
