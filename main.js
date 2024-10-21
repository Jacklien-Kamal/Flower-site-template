// script.js
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');

    // Function to set the active link
    function setActiveLink(activeLink) {
        links.forEach(link => {
            link.classList.remove('active');
            link.classList.remove('underline-animation');
        });
        activeLink.classList.add('active', 'underline-animation');
    }

    // Event listener for link clicks
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            setActiveLink(link);
        });
    });

    // Optionally set the initial active link (if needed)
    const initialActiveLink = links[0]; // Set the first link as active by default
    setActiveLink(initialActiveLink);
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href'); // Get the target ID
        const targetElement = document.querySelector(targetId); // Find the target element

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
        }
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active');
  }
  