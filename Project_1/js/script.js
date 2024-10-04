// Script for handling search functionality and adding animations

// Animate input box when typing
const searchInput = document.querySelector('main input');

searchInput.addEventListener('focus', () => {
    searchInput.style.transition = 'all 0.3s ease';
    searchInput.style.transform = 'scale(1.05)';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.transform = 'scale(1)';
});

// Example Search Functionality (this can be extended later)
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query !== "") {
            alert(`Searching for: ${query}`);
            // In a real-world scenario, you can use this query to fetch results
        }
    }
});

// Smooth scrolling for header links (if needed in the future)
document.querySelectorAll('header ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
