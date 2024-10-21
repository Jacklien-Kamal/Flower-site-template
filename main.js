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

    // Combined Event listener for link clicks (set active and smooth scroll)
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior

            const targetId = link.getAttribute('href'); // Get the target ID
            const targetElement = document.querySelector(targetId); // Find the target element

            // Smooth scroll if the target element exists
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            // Set the clicked link as active
            setActiveLink(link);
        });
    });

    // Optionally set the initial active link (if needed)
    const initialActiveLink = links[0]; // Set the first link as active by default
    setActiveLink(initialActiveLink);
});

// Toggle Menu (ensure the element exists in HTML)
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('nav-active');
    }
}
