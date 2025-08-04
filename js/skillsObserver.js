/* ====== SECTION SKILLS ANIMATION ======  */
const allHiddenSkills = document.querySelectorAll(".chart, .skills__content");

export default function skillsObserver() {
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
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );
  allHiddenSkills.forEach((skill) => observer.observe(skill));
}
