
  // Select all navigation bar links
const navbarLinks = document.querySelectorAll('nav a');

// Add click event to each link
navbarLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default click behavior

    // Get the target section's ID from the link's href attribute
    const targetId = link.getAttribute('href').substring(1); // Remove the '#' from href
    const targetSection = document.getElementById(targetId); // Find the section by ID

    // Scroll to the target section with smooth behavior
    targetSection.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling
      block: 'start' // Align with the top of the viewport
    });
  });
});
