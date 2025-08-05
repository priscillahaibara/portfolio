/* ====== SECTION HERO ANIMATION ======  */
const element = document.querySelector(".animated-text");
const texts = ["Software Engineer.", "Front-end Developer.", "Medical Doctor."];

export default function typingHero() {
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
    } else if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 2000); // pausa antes de apagar
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, speed);
  }

  type();
}
