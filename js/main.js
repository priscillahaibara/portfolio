import menuToggle from './menuToggle.js'
import typingHero from './typingHero.js';
import skillsObserver from './skillsObserver.js';
import videoObserver from './videoObserver.js';

menuToggle(); /* Toggles the mobile navigation menu when the toggle button is clicked. */
skillsObserver(); // Observe elements in skills section and trigger animations
typingHero(); /* Animates typing and deleting effect for a set of texts in a loop. */
videoObserver(); /* Sets up an IntersectionObserver to asynchronously load the background video */

