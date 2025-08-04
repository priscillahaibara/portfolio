/* ====== SECTION HERO ANIMATION ======  */
const element = document.querySelector(".animated-text");
const texts = ["Software Engineer.", "Front-end Devoloper.", "Medical Doctor."];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

export default function typingHero() {
  const currentText = texts[textIndex];
  const speed = isDeleting ? 50 : 120;

  element.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else if (!isDeleting) {
    isDeleting = true;
    setTimeout(typingHero, 2000);
    return;
  } else {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }
  setTimeout(typingHero, speed);
}

