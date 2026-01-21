// Translation manager
const translations = {
    currentLang: localStorage.getItem('language') || 'fi',

    init() {
        this.updatePageLanguage();
        this.setupToggleButton();
    },

    toggle() {
        this.currentLang = this.currentLang === 'fi' ? 'en' : 'fi';
        localStorage.setItem('language', this.currentLang);
        this.updatePageLanguage();
    },

    updatePageLanguage() {
        const elements = document.querySelectorAll('[data-fi][data-en]');
        elements.forEach(el => {
            const text = this.currentLang === 'fi' ? el.dataset.fi : el.dataset.en;
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        });

        // Update toggle button
        const toggleBtn = document.getElementById('langToggle');
        if (toggleBtn) {
            toggleBtn.textContent = this.currentLang === 'fi' ? 'EN' : 'FI';
            toggleBtn.dataset.lang = this.currentLang;
        }
    },

    setupToggleButton() {
        const toggleBtn = document.getElementById('langToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    },

    getLevelName(level) {
        const levels = {
            beginner: {
                fi: 'Aloittelija',
                en: 'Beginner'
            },
            intermediate: {
                fi: 'Keskitaso',
                en: 'Intermediate'
            },
            advanced: {
                fi: 'Edistynyt',
                en: 'Advanced'
            }
        };
        return levels[level][this.currentLang];
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    translations.init();
});
