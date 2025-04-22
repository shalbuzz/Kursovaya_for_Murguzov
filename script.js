// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize date range picker if it exists
    if (document.getElementById('daterange')) {
        // Date Range Picker initialization
        $('#daterange').daterangepicker({
            opens: 'left',
            minDate: new Date(),
            locale: {
                format: 'MM/DD/YYYY'
            }
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server here
            // For this example, we'll just show the success message
            
            // Hide the form
            contactForm.style.display = 'none';
            
            // Show success message
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.classList.remove('d-none');
            }
        });
        
        // Handle "Send Another Message" button
        const sendAnotherBtn = document.getElementById('sendAnother');
        if (sendAnotherBtn) {
            sendAnotherBtn.addEventListener('click', function() {
                // Reset the form
                contactForm.reset();
                
                // Show the form
                contactForm.style.display = 'block';
                
                // Hide success message
                const successMessage = document.getElementById('successMessage');
                if (successMessage) {
                    successMessage.classList.add('d-none');
                }
            });
        }
    }

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current nav item based on URL
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation.includes(linkPath) && linkPath !== 'index.html') {
            link.classList.add('active');
        } else if (currentLocation.endsWith('/') && linkPath === 'index.html') {
            link.classList.add('active');
        }
    });

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});