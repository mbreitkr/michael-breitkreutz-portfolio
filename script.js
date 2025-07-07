// Animate on scroll initialization/scroll bug fix
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 200,
  });
});

// Mobile nav toggle code
const navToggle = document.querySelector(".nav-toggle");
const navList = document.getElementById("main-nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", function () {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navList.classList.toggle("nav-list--open");
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navList.classList.remove("nav-list--open");
    });
  });
}
