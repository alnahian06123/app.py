import { renderSkills, renderProjects } from './ui.js';
import { initTypewriter, initMobileMenu } from './animation.js';

document.addEventListener('DOMContentLoaded', () => {
    // Fix: Use window.lucide for ES Module compatibility
    if (window.lucide) {
        window.lucide.createIcons();
    }

    document.getElementById('year').textContent = new Date().getFullYear();

    initTypewriter();
    initMobileMenu();

    renderSkills('frontend');
    renderProjects('all');

    // Skills Tab Switcher
    const skillTabs = document.querySelectorAll('.skill-tab');
    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            skillTabs.forEach(t => {
                t.classList.remove('active', 'text-white', 'bg-indigo-600/30', 'border-indigo-500/50');
                t.classList.add('text-slate-400');
            });
            tab.classList.add('active', 'text-white', 'bg-indigo-600/30', 'border-indigo-500/50');
            tab.classList.remove('text-slate-400');
            renderSkills(tab.getAttribute('data-category'));
        });
    });

    // Project Filters
    const projectFilters = document.querySelectorAll('.project-filter');
    projectFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            projectFilters.forEach(b => {
                b.classList.remove('active', 'text-white', 'bg-indigo-600/30', 'border-indigo-500/50');
                b.classList.add('text-slate-400');
            });
            btn.classList.add('active', 'text-white', 'bg-indigo-600/30', 'border-indigo-500/50');
            btn.classList.remove('text-slate-400');
            renderProjects(btn.getAttribute('data-filter'));
        });
    });

    // Modal Close
    const projectModal = document.getElementById('projectModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    closeModalBtn.addEventListener('click', () => {
        projectModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const resetFormBtn = document.getElementById('resetFormBtn');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        let isValid = true;

        if (!name.value.trim()) {
            nameError.classList.remove('hidden');
            isValid = false;
        } else {
            nameError.classList.add('hidden');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            emailError.classList.remove('hidden');
            isValid = false;
        } else {
            emailError.classList.add('hidden');
        }

        if (message.value.trim().length < 10) {
            messageError.classList.remove('hidden');
            isValid = false;
        } else {
            messageError.classList.add('hidden');
        }

        if (isValid) {
            formSuccess.classList.remove('hidden');
            contactForm.reset();
        }
    });

    resetFormBtn.addEventListener('click', () => {
        formSuccess.classList.add('hidden');
    });
});