// // Navbar scroll effect
// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

// // Mobile menu toggle
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');
// const navLinksItems = document.querySelectorAll('.nav-links li');

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     hamburger.classList.toggle('active');
//     document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
// });

// // Close mobile menu when clicking on a link
// navLinksItems.forEach(item => {
//     item.addEventListener('click', () => {
//         navLinks.classList.remove('active');
//         hamburger.classList.remove('active');
//         document.body.style.overflow = '';
//     });
// });

// // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         if (targetId === '#') return;
        
//         const targetElement = document.querySelector(targetId);
//         if (targetElement) {
//             window.scrollTo({
//                 top: targetElement.offsetTop - 80,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // Tab functionality
// function initTabs() {
//     const tabBtns = document.querySelectorAll('.tab-btn');
//     const tabPanes = document.querySelectorAll('.tab-pane');

//     function setActiveTab(btn) {
//         // Remove active class from all buttons and panes
//         tabBtns.forEach(b => b.classList.remove('active'));
//         tabPanes.forEach(p => p.classList.remove('active'));
        
//         // Add active class to clicked button
//         btn.classList.add('active');
        
//         // Find and activate corresponding pane
//         const tabId = btn.getAttribute('data-tab');
//         const targetPane = document.getElementById(tabId);
//         if (targetPane) {
//             targetPane.classList.add('active');
//         }
//     }

//     // Add click event to each tab button
//     tabBtns.forEach(btn => {
//         btn.addEventListener('click', function(e) {
//             e.preventDefault();
//             setActiveTab(this);
//         });
        
//         // Make sure buttons are clickable
//         btn.style.cursor = 'pointer';
//     });

//     // Set first tab as active by default
//     if (tabBtns.length > 0) {
//         // Only set if no tab is already active
//         if (!document.querySelector('.tab-btn.active')) {
//             setActiveTab(tabBtns[0]);
//         }
//     }
// }

// // Initialize tabs when the DOM is fully loaded
// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', initTabs);
// } else {
//     // In case the document is already loaded
//     initTabs();
// }

// // Add animation to elements when they come into view
// const animateOnScroll = () => {
//     const elements = document.querySelectorAll('.timeline-item, .portfolio-item, .testimonial-slide');
    
//     elements.forEach(element => {
//         const elementTop = element.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
        
//         if (elementTop < windowHeight - 100) {
//             element.style.opacity = '1';
//             element.style.transform = 'translateY(0)';
//         }
//     });
// };

// // Initialize animations
// window.addEventListener('scroll', animateOnScroll);
// window.addEventListener('load', animateOnScroll);

// // Testimonial slider
// let currentSlide = 0;
// const slides = document.querySelectorAll('.testimonial-slide');
// const dots = document.querySelectorAll('.dot');

// function showSlide(n) {
//     // Reset all slides
//     slides.forEach(slide => {
//         slide.style.display = 'none';
//         slide.classList.remove('active');
//     });
    
//     // Reset all dots
//     dots.forEach(dot => {
//         dot.classList.remove('active');
//     });
    
//     // Show current slide and activate dot
//     if (n >= slides.length) {
//         currentSlide = 0;
//     } else if (n < 0) {
//         currentSlide = slides.length - 1;
//     } else {
//         currentSlide = n;
//     }
    
//     slides[currentSlide].style.display = 'block';
//     slides[currentSlide].classList.add('active');
//     dots[currentSlide].classList.add('active');
// }

// // Initialize slider
// showSlide(0);

// // Auto slide
// setInterval(() => {
//     showSlide(currentSlide + 1);
// }, 5000);

// // Dot navigation
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         showSlide(index);
//     });
// });

// // Form submission
// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form data
//         const formData = new FormData(this);
//         const formProps = Object.fromEntries(formData);
        
//         // Here you would typically send the form data to a server
//         console.log('Form submitted:', formProps);
        
//         // Show success message
//         alert('Thank you for your message! I will get back to you soon.');
        
//         // Reset form
//         this.reset();
//     });
// }

// // Typing animation
// function typeWriter(element, text, speed = 50) {
//     let i = 0;
//     element.textContent = '';
    
//     function type() {
//         if (i < text.length) {
//             element.textContent += text.charAt(i);
//             i++;
//             setTimeout(type, speed);
//         }
//     }
    
//     type();
// }

// // Initialize AOS (Animate On Scroll)
// AOS.init({
//     duration: 800,
//     easing: 'ease-in-out',
//     once: true,
//     offset: 100
// });

// // Initialize typing animation when the page loads
// document.addEventListener('DOMContentLoaded', function() {
//     const typingText = document.querySelector('.typing-text');
//     const typingText2 = document.querySelector('.typing-text-2');
    
//     if (typingText) {
//         const text = typingText.textContent;
//         typingText.textContent = '';
//         typeWriter(typingText, text);
//     }
    
//     if (typingText2) {
//         // Start the second typing animation after a delay
//         setTimeout(() => {
//             const text2 = typingText2.textContent;
//             typingText2.textContent = '';
//             typeWriter(typingText2, text2);
//         }, 1000);
//     }
// });

// // Add active class to current section in navigation
// const sections = document.querySelectorAll('section');
// const navItems = document.querySelectorAll('.nav-links a');

// window.addEventListener('scroll', () => {
//     let current = '';
    
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
        
//         if (pageYOffset >= sectionTop - 200) {
//             current = section.getAttribute('id');
//         }
//     });
    
//     navItems.forEach(item => {
//         item.classList.remove('active');
//         if (item.getAttribute('href') === `#${current}`) {
//             item.classList.add('active');
//         }
//     });
// });

// // Preloader
// window.addEventListener('load', function() {
//     const preloader = document.querySelector('.preloader');
//     if (preloader) {
//         preloader.style.display = 'none';
//     }
// });


// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Add active class to current section in navigation
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').slice(1) === current) {
      item.classList.add('active');
    }
  });
  
  // Add shadow to navbar on scroll
  if (window.scrollY > 50) {
    document.querySelector('.navbar').classList.add('scrolled');
  } else {
    document.querySelector('.navbar').classList.remove('scrolled');
  }
});

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    const filterValue = button.getAttribute('data-filter');
    
    portfolioItems.forEach(item => {
      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Typing Effect for Hero Text
const typedTextSpan = document.querySelector('.typing-text');
const textArray = ["Real Estate Marketing Professional", "Property Consultant", "Real Estate Advisor"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, typingDelay + 1100);
  }
}

// Start the typing effect when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Add fade-up animation on scroll
const items = document.querySelectorAll('.portfolio-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

items.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(40px)';
  item.style.transition = 'all 0.8s ease';
  observer.observe(item);
});
