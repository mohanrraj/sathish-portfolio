// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Mobile menu toggle and navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);

    // Toggle mobile menu
    function toggleMenu() {
        const isOpening = !hamburger.classList.contains('active');
        
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = isOpening ? 'hidden' : '';
        
        // Animate menu items
        if (isOpening) {
            navItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
                setTimeout(() => {
                    item.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 10);
            });
        } else {
            navItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
            });
        }
    }
    
    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', closeMenu);

    // Close mobile menu
    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset menu items animation
        navItems.forEach(item => {
            item.style.transition = 'none';
            item.style.opacity = '';
            item.style.transform = '';
        });
    }

    // Event listeners
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', toggleMenu);
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
                closeMenu();
            }
        });
        
        // Smooth scroll and close menu when clicking nav links
        navItems.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    closeMenu();
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Account for fixed header
                        behavior: 'smooth'
                    });
                    
                    // Update URL without page jump
                    history.pushState(null, '', targetId);
                }
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');

    // Show/hide back to top button
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('active');
            backToTop.style.visibility = 'visible';
            backToTop.style.opacity = '1';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    }

    // Smooth scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Event listeners for back to top
    if (backToTop) {
        // Initial check
        toggleBackToTop();
        
        // Scroll event
        window.addEventListener('scroll', toggleBackToTop);
        
        // Click event
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToTop();
        });
    }

    // Project data with all 10 projects
    const projects = {
        'kanchi-kanda-kottam': {
            title: 'Kanchi Kanda Kottam',
            location: 'Kanchipuram, Tamil Nadu',
            description: 'A premium residential project offering modern living spaces with all necessary amenities in the heart of Kanchipuram.',
            logo: 'projects/logos/project1.jpg',
            poster: 'projects/posters/project1.jpg',
            layout: 'projects/layouts/project1.jpg',
            features: [
                'Prime location in Kanchipuram',
                'Modern architectural design',
                'Spacious living areas',
                'Premium finishes',
                '24/7 security',
                'Landscaped gardens'
            ]
        },
        'railway-nagar': {
            title: 'Railway Nagar',
            location: 'Chengalpattu, Tamil Nadu',
            description: 'Strategically located residential plots with excellent connectivity to major transportation hubs.',
            logo: 'projects/logos/project2.jpg',
            poster: 'projects/posters/project2.jpg',
            layout: 'projects/layouts/project2.jpg',
            features: [
                'Prime location near railway station',
                'Well-planned layout',
                'Wide roads',
                'Drainage system',
                'Water supply',
                'Electricity connection'
            ]
        },
        'satellite-city': {
            title: 'Satellite City',
            location: 'Chengalpattu, Tamil Nadu',
            description: 'A well-planned township with modern amenities and excellent connectivity to major highways.',
            logo: 'projects/logos/project3.jpg',
            poster: 'projects/posters/project3.jpg',
            layout: 'projects/layouts/project3.jpg',
            features: [
                'Prime location near OMR',
                'Gated community',
                'Club house',
                'Children\'s play area',
                '24/7 security',
                'Power backup'
            ]
        },
        'green-valley': {
            title: 'Green Valley',
            location: 'Kanchipuram, Tamil Nadu',
            description: 'Eco-friendly residential plots surrounded by nature with all modern amenities.',
            logo: 'projects/logos/project4.jpg',
            poster: 'projects/posters/project4.jpg',
            layout: 'projects/layouts/project4.jpg',
            features: [
                'Picturesque location',
                'Eco-friendly development',
                'Well-planned layout',
                'Water harvesting',
                'Solar street lights',
                '24/7 security'
            ]
        },
        'royal-gardens': {
            title: 'Royal Gardens',
            location: 'Chengalpattu, Tamil Nadu',
            description: 'Luxury villas with modern amenities and beautiful landscaping.',
            logo: 'projects/logos/project5.jpg',
            poster: 'projects/posters/project5.jpg',
            layout: 'projects/layouts/project5.jpg',
            features: [
                'Luxury villas',
                'Landscaped gardens',
                'Swimming pool',
                'Club house',
                '24/7 security',
                'Power backup'
            ]
        },
        'oasis-residency': {
            title: 'Oasis Residency',
            location: 'Kanchipuram, Tamil Nadu',
            description: 'A peaceful residential community with modern amenities and green spaces.',
            logo: 'projects/logos/project6.jpg',
            poster: 'projects/posters/project6.jpg',
            layout: 'projects/layouts/project6.jpg',
            features: [
                'Tranquil environment',
                'Modern infrastructure',
                'Children\'s play area',
                'Jogging track',
                '24/7 security',
                'Power backup'
            ]
        },
        'vsr-nagar': {
            title: 'VSR Nagar',
            location: 'Chengalpattu, Tamil Nadu',
            description: 'A well-planned residential community with modern amenities and green spaces.',
            logo: 'projects/logos/project7.jpg',
            poster: 'projects/posters/project7.jpg',
            layout: 'projects/layouts/project7.jpg',
            features: [
                'Premium location',
                'Modern infrastructure',
                '24/7 security',
                'Underground drainage',
                'Water supply',
                'Electricity connection'
            ]
        },
        'vsr-nagar-2': {
            title: 'VSR Nagar Phase 2',
            location: 'Chengalpattu, Tamil Nadu',
            description: 'Second phase of the successful VSR Nagar project with improved amenities.',
            logo: 'projects/logos/project8.jpg',
            poster: 'projects/posters/project8.jpg',
            layout: 'projects/layouts/project8.jpg',
            features: [
                'Premium location',
                'Enhanced infrastructure',
                'Wider roads',
                'Better drainage system',
                '24/7 security',
                'Water supply'
            ]
        },
        'green-meadows': {
            title: 'Green Meadows',
            location: 'Kanchipuram, Tamil Nadu',
            description: 'A green residential community with modern amenities and open spaces.',
            logo: 'projects/logos/project9.jpg',
            poster: 'projects/posters/project9.jpg',
            layout: 'projects/layouts/project9.jpg',
            features: [
                'Eco-friendly development',
                'Lush green surroundings',
                'Children\'s play area',
                'Jogging track',
                '24/7 security',
                'Power backup'
            ]
        },
        'royal-palms': {
            title: 'Royal Palms',
            location: 'Chengalpattu, Tamil Nadu',
            description: 'Luxury apartments with premium amenities and beautiful landscaping.',
            logo: 'projects/logos/project10.jpg',
            poster: 'projects/posters/project10.jpg',
            layout: 'projects/layouts/project10.jpg',
            features: [
                'Luxury apartments',
                'Landscaped gardens',
                'Swimming pool',
                'Club house',
                '24/7 security',
                'Power backup',
                'Gymnasium',
                'Indoor games'
            ]
        }
    };

    // Load projects into the grid
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (portfolioGrid) {
        Object.entries(projects).forEach(([id, project]) => {
            const projectElement = document.createElement('div');
            projectElement.className = 'portfolio-item';
            projectElement.setAttribute('data-aos', 'fade-up');
            
            projectElement.innerHTML = `
                <div class="portfolio-image">
                    <img src="${project.logo}" alt="${project.title}" loading="lazy">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <div class="project-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${project.location}</span>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <a href="#" class="view-project" onclick="openProjectModal('${id}')">
                        View Project <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;
            
            portfolioGrid.appendChild(projectElement);
        });
    }

    // Project Modal Functionality
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-btn');

    // Open modal with project details
    window.openProjectModal = function(projectId) {
        const project = projects[projectId];
        if (!project) return;

        // Push state to history when opening modal
        history.pushState({ modal: true }, '', `#${projectId}`);
        
        // Store the current scroll position
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = `
            <div class="modal-gallery">
                <div class="gallery-slider">
                    <div class="slide active">
                        <img src="${project.poster}" alt="${project.title} Poster">
                        <div class="slide-caption">Project Overview</div>
                    </div>
                    <div class="slide">
                        <img src="${project.layout}" alt="${project.title} Layout">
                        <div class="slide-caption">Layout Plan</div>
                    </div>
                    <div class="slider-nav">
                        <button class="slider-arrow prev"><i class="fas fa-chevron-left"></i></button>
                        <div class="slider-dots">
                            <span class="dot active" data-slide="0"></span>
                            <span class="dot" data-slide="1"></span>
                        </div>
                        <button class="slider-arrow next"><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="modal-details">
                <h2>${project.title}</h2>
                <div class="modal-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${project.location}</span>
                </div>
                <p class="modal-description">${project.description}</p>
                
                <div class="modal-features">
                    <h3>Key Features</h3>
                    <div class="features-grid">
                        ${project.features.map(feature => `
                            <div class="feature-item">
                                <i class="fas fa-check-circle"></i>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="modal-actions">
                    <a href="https://wa.me/919367936748?text=Hi%20Sathish,%20I'm%20interested%20in%20${encodeURIComponent(project.title)}%20project" 
                       class="btn btn-primary" 
                       target="_blank">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href="tel:+919367936748" class="btn btn-outline">
                        <i class="fas fa-phone"></i> Call Now
                    </a>
                </div>
            </div>
        `;
        
        // Initialize slider
        initSlider();

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    };

    // Close modal
    window.closeModal = function() {
        // Restore the original URL without the hash
        if (window.location.hash) {
            history.pushState('', document.title, window.location.pathname + window.location.search);
        }
        
        // Close the modal with animation
        modal.classList.remove('active');
        
        // Restore body styles after animation
        setTimeout(() => {
            if (!modal.classList.contains('active')) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
                
                // Restore scroll position
                const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
                if (scrollY) {
                    window.scrollTo(0, parseInt(scrollY || '0'));
                }
            }
        }, 300);
    };

    // Close modal when clicking the overlay
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    function handleEscapeKey(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    }

    // Close modal when clicking outside content or close button
    function handleModalClick(e) {
        if (e.target === modal || e.target.closest('.close-btn')) {
            closeModal();
        }
    }

    // Handle browser back button
    function handlePopState() {
        if (modal.classList.contains('active')) {
            closeModal();
            // Push another state to prevent going back in history when modal is closed
            history.pushState(null, document.title, window.location.pathname);
        }
    }

    // Add event listeners
    document.addEventListener('keydown', handleEscapeKey);
    modal.addEventListener('click', handleModalClick);
    window.addEventListener('popstate', handlePopState);

    // Slider functionality
    function initSlider() {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.slider-arrow.prev');
        const nextBtn = document.querySelector('.slider-arrow.next');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentSlide = index;
        }

        function nextSlide() {
            showSlide((currentSlide + 1) % slides.length);
        }

        function prevSlide() {
            showSlide((currentSlide - 1 + slides.length) % slides.length);
        }

        // Event listeners
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Auto-advance slides every 5 seconds
        let slideInterval = setInterval(nextSlide, 5000);

        // Pause on hover
        const slider = document.querySelector('.gallery-slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
            slider.addEventListener('mouseleave', () => {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000);
            });
        }
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Typing animation
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const words = ['Senior Sales Manager', 'Real Estate Expert', 'Property Consultant'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100; // ms
        
        function type() {
            const currentWord = words[wordIndex];
            const currentChar = currentWord.substring(0, charIndex);
            
            typingText.textContent = currentChar;
            
            if (!isDeleting && charIndex < currentWord.length) {
                // Typing
                charIndex++;
                typingSpeed = 100;
            } else if (isDeleting && charIndex > 0) {
                // Deleting
                charIndex--;
                typingSpeed = 50;
            } else if (isDeleting) {
                // Switch to next word
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 500; // Pause before typing next word
            } else {
                // Start deleting
                isDeleting = true;
                typingSpeed = 1500; // Pause at end of word
            }
            
            setTimeout(type, typingSpeed);
        }
        
        // Start typing animation after a delay
        setTimeout(type, 1000);
    }
});
