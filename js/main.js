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

/* ====== SECTION HERO ANIMATION ======  */
const element = document.querySelector(".animated-text");

const texts = ["Software Engineer.", "Front-end Devoloper.", "Medical Doctor."];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];
  const speed = isDeleting ? 50 : 120;

  element.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else if (!isDeleting) {
    isDeleting = true;
    setTimeout(type, 2000);
    return;
  } else {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }
  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);

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
