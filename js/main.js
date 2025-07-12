/* SHOW MENU */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  toggle.addEventListener('click', () => {
    //Add show-menu class to nav menu
    nav.classList.toggle('show-menu');

    //Add show-icon to show and hide the menu icon
    toggle.classList.toggle('show-icon');
  })
}

showMenu('header-toggle', 'header-nav')

/* SKILLS ANIMATION */

const allSkills = document.querySelectorAll(".skills--right, .skills--left"); 

const revealSkills = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry)
    if (!entry.isIntersecting) return;

    const direction = entry.target.dataset.direction;
    const hiddenClass = `hidden--${direction}`;
    const visibleClass = `visible--${direction}`;
   
    if (!entry.target.classList.contains(visibleClass)) {
      entry.target.classList.remove(hiddenClass);
      entry.target.classList.add(visibleClass); // Aplica a animação de visibilidade
    }

    observer.unobserve(entry.target);
  });
};

const skillsObserver = new IntersectionObserver(revealSkills, {
    root: null, 
    threshold: 0.5, 
  });
  
  allSkills.forEach(function (skill) {
    skillsObserver.observe(skill); 
    const direction = skill.classList.contains("skills--right")
      ? "right"
      : "left";
    skill.classList.add(`hidden--${direction}`);
    skill.dataset.direction = direction; 
  });

