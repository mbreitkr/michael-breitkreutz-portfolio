const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("nav-list-visible");
});

// Close the mobile nav when any link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("nav-list-visible");
  });
});
