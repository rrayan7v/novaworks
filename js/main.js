// No custom cursor - using default browser cursor
document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect - FINAL FIX
    const navbar = document.getElementById('navbar');
    
    function updateNavbar() {
        if (window.scrollY > 10) {
            // Keep white background when scrolling
            navbar.className = 'fixed top-0 z-50 w-full transition-all duration-500 bg-white/95 backdrop-blur-lg shadow-lg';
        } else {
            // Make transparent only at the very top
            navbar.className = 'fixed top-0 z-50 w-full transition-all duration-500 bg-transparent';
        }
    }
    
    // Run immediately
    updateNavbar();
    
    // Run on scroll
    window.addEventListener('scroll', updateNavbar);
    
    // Fade in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animate class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Desktop submenu toggle
function toggleSubmenu(menuName) {
    const dropdown = document.getElementById(menuName.toLowerCase() + '-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('opacity-0');
        dropdown.classList.toggle('invisible');
        dropdown.classList.toggle('opacity-100');
        dropdown.classList.toggle('visible');
    }
}

// Mobile submenu toggle
function toggleMobileSubmenu(menuName) {
    const dropdown = document.getElementById('mobile-' + menuName.toLowerCase() + '-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

