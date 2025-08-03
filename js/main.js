/* ====== SHOW MENU ======  */

const toggle = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");

function showMenu() {
  toggle.addEventListener("click", () => {
    /* Add show-menu class to nav menu */
    nav.classList.toggle("show-menu");

    /* Add show-icon to show and hide the menu icon */
    toggle.classList.toggle("show-icon");
  });
}

showMenu();

/* ====== SECTION SKILLS ANIMATION ======  */
const allHiddenSkills = document.querySelectorAll(".chart, .skills__content");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.target.classList.contains("hidden--right")) {
        entry.target.style.opacity = 1;
        entry.target.classList.add("animated--right");
      } else if (entry.target.classList.contains("hidden--left")) {
        entry.target.style.opacity = 1;
        entry.target.classList.add("animated--left");
      }
    });
  },
  { threshold: 0.5 }
);

allHiddenSkills.forEach((skill) => observer.observe(skill));
