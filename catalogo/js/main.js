import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

// Theme Toggle Functionality
class ThemeManager {
    constructor() {
        this.themeToggleBtn = document.getElementById('theme-toggle-btn');
        this.themeIcon = this.themeToggleBtn?.querySelector('.theme-icon');
        this.themeText = this.themeToggleBtn?.querySelector('.theme-text');
        this.currentTheme = localStorage.getItem('theme') || 'dark';

        this.init();
    }

    init() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);

        if (!this.themeToggleBtn) {
            return;
        }

        this.applyTheme(this.currentTheme);
        this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.currentTheme);
        this.saveTheme();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);

        if (!this.themeToggleBtn) {
            return;
        }

        if (theme === 'light') {
            if (this.themeIcon) this.themeIcon.textContent = '🌙';
            if (this.themeText) this.themeText.textContent = 'Modo Escuro';
            this.themeToggleBtn.setAttribute('aria-label', 'Alternar para modo escuro');
        } else {
            if (this.themeIcon) this.themeIcon.textContent = '☀️';
            if (this.themeText) this.themeText.textContent = 'Modo Claro';
            this.themeToggleBtn.setAttribute('aria-label', 'Alternar para modo claro');
        }
    }

    saveTheme() {
        localStorage.setItem('theme', this.currentTheme);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();

    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');

        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');

    if (container) {
        categories.forEach((category) => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
