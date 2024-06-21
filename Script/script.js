// JavaScript for responsive navigation menu
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const dropdownContent = document.querySelector('.dropdown-content');

  // Toggle the dropdown menu when menuIcon is clicked
  menuIcon.addEventListener('click', function () {
      dropdownContent.classList.toggle('show');
  });

  // Close the dropdown menu when clicking outside
  document.addEventListener('click', function (event) {
      if (!menuIcon.contains(event.target) && !dropdownContent.contains(event.target)) {
          dropdownContent.classList.remove('show');
      }
  });

  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').slice(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              const topOffset = targetElement.offsetTop - 60; // Adjust offset as needed
              window.scrollTo({
                  top: topOffset,
                  behavior: 'smooth'
              });
          }
      });
  });
});