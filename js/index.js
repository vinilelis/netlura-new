// Theme Toggle Functionality
class ThemeManager {
    constructor() {
        this.themeToggleBtn = document.getElementById('theme-toggle-btn');
        this.themeIcon = this.themeToggleBtn.querySelector('.theme-icon');
        this.themeText = this.themeToggleBtn.querySelector('.theme-text');
        this.currentTheme = localStorage.getItem('theme') || 'dark'; // Dark como padrão

        this.init();
    }

    init() {
        // Aplicar tema salvo
        this.applyTheme(this.currentTheme);

        // Adicionar event listener
        this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.currentTheme);
        this.saveTheme();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);

        // Atualizar botão
        if (theme === 'light') {
            this.themeIcon.textContent = '🌙';
            this.themeText.textContent = 'Modo Escuro';
            this.themeToggleBtn.setAttribute('aria-label', 'Alternar para modo escuro');
        } else {
            this.themeIcon.textContent = '☀️';
            this.themeText.textContent = 'Modo Claro';
            this.themeToggleBtn.setAttribute('aria-label', 'Alternar para modo claro');
        }
    }

    saveTheme() {
        localStorage.setItem('theme', this.currentTheme);
    }
}

// Sistema de preferência do usuário
class ThemePreference {
    static getSystemPreference() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    static watchSystemPreference(callback) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            callback(e.matches ? 'dark' : 'light');
        });
    }
}

// Inicializar quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Verificar se há tema salvo, senão usar dark como padrão
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        localStorage.setItem('theme', 'dark'); // Dark como padrão
    }

    // Inicializar gerenciador de tema
    new ThemeManager();

    // Observar mudanças na preferência do sistema (opcional)
    ThemePreference.watchSystemPreference((systemTheme) => {
        // Só aplicar se não houver tema salvo manualmente
        const savedTheme = localStorage.getItem('theme');
        if (!savedTheme || savedTheme === systemTheme) {
            const themeManager = new ThemeManager();
            themeManager.applyTheme(systemTheme);
        }
    });

    // Loading Video Handler
    const video = document.getElementById('loading-video');
    if (video) {
        video.addEventListener('ended', () => {
            document.getElementById('loading').style.display = 'none';
            document.querySelector('main').style.display = 'block';
        });
    }
});

// Função para selecionar perfil e armazenar no localStorage
function selectProfile(name, image) {
    localStorage.setItem('perfilAtivoNome', name);
    localStorage.setItem('perfilAtivoImagem', image);
}