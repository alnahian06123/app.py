import { phrases } from './data.js';

export function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    const articleElement = document.getElementById('article-a-an');
    if (!typewriterElement) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (articleElement) {
            const lowerPhrase = currentPhrase.toLowerCase().trim();

            // Check for vowel sounds ("Excel", "Open", etc.)
            const startsWithVowelSound = lowerPhrase.startsWith('excel') ||
                                         lowerPhrase.startsWith('a') ||
                                         lowerPhrase.startsWith('e') ||
                                         lowerPhrase.startsWith('i') ||
                                         lowerPhrase.startsWith('o');

            if (lowerPhrase.startsWith('ui') || lowerPhrase.startsWith('ux')) {
                articleElement.textContent = 'a';
            } else {
                articleElement.textContent = startsWithVowelSound ? 'an' : 'a';
            }
        }

        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();
}

export function initMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}