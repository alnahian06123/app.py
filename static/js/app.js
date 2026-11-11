import { renderSkills, renderProjects } from './ui.js';
import { initTypewriter, initMobileMenu } from './animation.js';

document.addEventListener('DOMContentLoaded', () => {
    // Lucide Icons Initialization
    if (window.lucide) {
        window.lucide.createIcons();
    }

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

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

    if (closeModalBtn && projectModal) {
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
    }

    // Contact Form Submission with Formspree Integration
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const resetFormBtn = document.getElementById('resetFormBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            let isValid = true;

            if (name && !name.value.trim()) {
                if (nameError) nameError.classList.remove('hidden');
                isValid = false;
            } else if (nameError) {
                nameError.classList.add('hidden');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailRegex.test(email.value.trim())) {
                if (emailError) emailError.classList.remove('hidden');
                isValid = false;
            } else if (emailError) {
                emailError.classList.add('hidden');
            }

            if (message && message.value.trim().length < 10) {
                if (messageError) messageError.classList.remove('hidden');
                isValid = false;
            } else if (messageError) {
                messageError.classList.add('hidden');
            }

            if (isValid) {
                try {
                    const formData = new FormData(contactForm);
                    const response = await fetch(contactForm.action, {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    });

                    if (response.ok) {
                        if (formSuccess) formSuccess.classList.remove('hidden');
                        contactForm.reset();
                    } else {
                        alert('There was a problem sending your message. Please try again.');
                    }
                } catch (error) {
                    console.error('Form submission error:', error);
                    alert('Network error. Please check your connection.');
                }
            }
        });
    }

    if (resetFormBtn && formSuccess) {
        resetFormBtn.addEventListener('click', () => {
            formSuccess.classList.add('hidden');
        });
    }
});