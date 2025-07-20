// Simple animation trigger
        document.addEventListener('DOMContentLoaded', function() {
            const wowElements = document.querySelectorAll('.wow');
            
            const animateOnScroll = function() {
                wowElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight - 100) {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // Run once on load
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Function to toggle the mobile menu
        function toggleMobileMenu() {
            const menu = document.querySelector('.mobile-menu');
            menu.classList.toggle('active');
        }

        // Function to close the mobile menu when a link is clicked
        function closeMobileMenu() {
            const menu = document.querySelector('.mobile-menu');
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        }

        // Add event listeners for mobile menu toggle and close
        document.querySelector('.mobile-menu-toggle').addEventListener('click', toggleMobileMenu);
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('messageForm');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;
                
                // Reset error messages
                document.querySelectorAll('.error-message').forEach(el => {
                    el.style.display = 'none';
                });
                
                // Validate name
                const name = document.getElementById('name');
                if (!name.value.trim()) {
                    document.getElementById('nameError').style.display = 'block';
                    isValid = false;
                }
                
                // Validate email
                const email = document.getElementById('email');
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value)) {
                    document.getElementById('emailError').style.display = 'block';
                    isValid = false;
                }
                
                // Validate subject
                const subject = document.getElementById('subject');
                if (!subject.value.trim()) {
                    document.getElementById('subjectError').style.display = 'block';
                    isValid = false;
                }
                
                // Validate message
                const message = document.getElementById('message');
                if (!message.value.trim()) {
                    document.getElementById('messageError').style.display = 'block';
                    isValid = false;
                }
                
                if (isValid) {
                    // In a real application, you would send the form data to a server here
                    // For demonstration, we'll just show a success message
                    document.getElementById('successMessage').style.display = 'block';
                    form.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        document.getElementById('successMessage').style.display = 'none';
                    }, 5000);
                }
            });
            
            // Add click-to-call functionality for phone numbers
            document.querySelectorAll('a[href^="tel:"]').forEach(link => {
                link.addEventListener('click', function(e) {
                    if (window.innerWidth >= 768) { // Only show alert on desktop
                        e.preventDefault();
                        alert(`Calling ${this.textContent.trim()}`);
                    }
                });
            });
        });
