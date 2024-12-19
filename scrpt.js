const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

// Optionally, if you want to toggle dropdowns on click:
const dropdowns = document.querySelectorAll('.menu > li');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        const currentDropdown = dropdown.querySelector('.dropdown');
        currentDropdown.classList.toggle('show-dropdown');
    });
});