import { skillsData, projectsData } from './data.js';

export function renderSkills(category) {
    const skillsContainer = document.getElementById('skillsContainer');
    if (!skillsContainer) return;

    const list = skillsData[category] || [];
    skillsContainer.innerHTML = list.map(s => `
        <div class="glass-card p-5 rounded-2xl hover:border-cyan-500/40 transition-all duration-300">
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                        <i data-lucide="${s.icon}" class="w-5 h-5"></i>
                    </div>
                    <span class="text-sm font-semibold text-white">${s.name}</span>
                </div>
                <span class="text-xs font-bold text-cyan-400">${s.level}</span>
            </div>
            <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-700" style="width: ${s.level}"></div>
            </div>
        </div>
    `).join('');

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

export function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    const filtered = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === filter || (filter === 'ai' && p.category === 'ai'));

    projectsGrid.innerHTML = filtered.map(p => `
        <div class="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
            <div>
                <div class="relative overflow-hidden h-48 bg-slate-900">
                    <img src="/static/images/${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <button onclick="window.openModal('${p.id}')" class="p-3 rounded-full glass-card text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors" aria-label="Quick View">
                            <i data-lucide="eye" class="w-5 h-5"></i>
                        </button>
                        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="p-3 rounded-full glass-card text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors" aria-label="GitHub Source">
                            <i data-lucide="github" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
                <div class="p-6">
                    <span class="text-xs font-semibold text-cyan-400 uppercase tracking-wider">${p.catLabel}</span>
                    <h3 class="text-xl font-bold text-white mt-1 mb-2 group-hover:text-cyan-300 transition-colors">${p.title}</h3>
                    <p class="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">${p.description}</p>
                </div>
            </div>

            <div class="p-6 pt-0">
                <div class="flex flex-wrap gap-1.5 mb-4">
                    ${p.tech.map(t => `<span class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700/50">${t}</span>`).join('')}
                </div>
                <button onclick="window.openModal('${p.id}')" class="w-full py-2.5 rounded-xl text-xs font-semibold glass-card text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2">
                    <span>Details & Live Preview</span>
                    <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    `).join('');

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

window.openModal = function(id) {
    const project = projectsData.find(p => p.id === id);
    const projectModal = document.getElementById('projectModal');
    if (!project || !projectModal) return;

    document.getElementById('modalImage').src = `/static/images/${project.image}`;
    document.getElementById('modalCategory').textContent = project.catLabel;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;

    // Links specifically to the GIF file so it opens in a new tab
    document.getElementById('modalDemo').href = `/static/images/${project.demoGif}`;
    document.getElementById('modalGithub').href = project.github;

    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = project.tech.map(t => `<span class="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-cyan-300 border border-slate-700">${t}</span>`).join('');

    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
        window.lucide.createIcons();
    }
};