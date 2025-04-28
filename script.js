// When DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Sticky header with scroll effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            header.style.backgroundColor = 'rgba(11, 13, 28, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = 'rgba(11, 13, 28, 0.8)';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ accordions
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other open FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const icon = otherItem.querySelector('.faq-toggle i');
                    icon.className = 'fas fa-plus';
                }
            });

            // Toggle current FAQ
            item.classList.toggle('active');
            const icon = item.querySelector('.faq-toggle i');
            if (item.classList.contains('active')) {
                icon.className = 'fas fa-minus';
            } else {
                icon.className = 'fas fa-plus';
            }
        });
    });

    // Pricing toggle
    const billingToggle = document.getElementById('billingToggle');
    const monthlyPrices = document.querySelectorAll('.price.monthly');
    const annualPrices = document.querySelectorAll('.price.annual');

    if (billingToggle) {
        billingToggle.addEventListener('change', function() {
            if (this.checked) {
                // Show annual prices
                monthlyPrices.forEach(price => price.style.display = 'none');
                annualPrices.forEach(price => price.style.display = 'inline-block');
            } else {
                // Show monthly prices
                monthlyPrices.forEach(price => price.style.display = 'inline-block');
                annualPrices.forEach(price => price.style.display = 'none');
            }
        });
    }

    // Animation on scroll using Intersection Observer API
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add custom animation class based on data-aos value
                const animation = entry.target.getAttribute('data-aos');
                if (animation === 'fade-up') {
                    entry.target.style.animation = `fadeInUp 0.8s forwards`;
                } else if (animation === 'fade-right') {
                    entry.target.style.animation = `fadeInRight 0.8s forwards`;
                }
                
                // Handle delay
                const delay = entry.target.getAttribute('data-aos-delay');
                if (delay) {
                    entry.target.style.animationDelay = `${parseInt(delay)/1000}s`;
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        if (element.getAttribute('data-aos') === 'fade-up') {
            element.style.transform = 'translateY(50px)';
        } else if (element.getAttribute('data-aos') === 'fade-right') {
            element.style.transform = 'translateX(-50px)';
        }
        
        observer.observe(element);
    });

    // Mobile navigation toggle (for smaller screens)
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('nav');
    const headerContainer = document.querySelector('.header-container');
    
    if (window.innerWidth <= 768) {
        headerContainer.insertBefore(navToggle, nav);
        
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            if (nav.classList.contains('active')) {
                nav.style.display = 'flex';
                setTimeout(() => {
                    nav.style.opacity = '1';
                    nav.style.transform = 'translateY(0)';
                }, 10);
            } else {
                nav.style.opacity = '0';
                nav.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    nav.style.display = 'none';
                }, 300);
            }
        });
    }

    // Add CSS for mobile nav if needed
    if (window.innerWidth <= 768) {
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .nav-toggle {
                    display: block;
                    background: transparent;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
                
                nav {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    flex-direction: column;
                    background: var(--card-bg);
                    padding: 20px;
                    display: none;
                    opacity: 0;
                    transform: translateY(-20px);
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }
                
                nav a {
                    padding: 15px 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
});

// Add custom CSS animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(styleSheet);

// Handle form submission and redirect
document.querySelector('form[name="lead-capture"]').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
    .then(response => {
        if (response.ok) {
            // Redirect to affiliate link after successful form submission
            window.location.href = 'https://affiliates.gohighlevel.com/?fp_ref=1lj1q';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
