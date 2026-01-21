// Translation manager
const translations = {
    currentLang: localStorage.getItem('language') || 'fi',

    init() {
        this.updatePageLanguage();
        this.setupLanguageSelector();
    },

    changeLang(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.updatePageLanguage();
    },

    updatePageLanguage() {
        const elements = document.querySelectorAll('[data-fi]');
        elements.forEach(el => {
            const text = el.dataset[this.currentLang] || el.dataset.en;
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        });

        // Update language selector
        const langSelector = document.getElementById('langSelector');
        if (langSelector) {
            langSelector.value = this.currentLang;
        }

        // Update body direction for RTL languages
        document.body.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    },

    setupLanguageSelector() {
        const langSelector = document.getElementById('langSelector');
        if (langSelector) {
            langSelector.value = this.currentLang;
            langSelector.addEventListener('change', (e) => this.changeLang(e.target.value));
        }
    },

    getLevelName(level) {
        const levels = {
            beginner: {
                fi: 'Aloittelija',
                en: 'Beginner',
                es: 'Principiante',
                fr: 'Débutant',
                ar: 'مبتدئ',
                nl: 'Beginner'
            },
            intermediate: {
                fi: 'Keskitaso',
                en: 'Intermediate',
                es: 'Intermedio',
                fr: 'Intermédiaire',
                ar: 'متوسط',
                nl: 'Gemiddeld'
            },
            advanced: {
                fi: 'Edistynyt',
                en: 'Advanced',
                es: 'Avanzado',
                fr: 'Avancé',
                ar: 'متقدم',
                nl: 'Gevorderd'
            }
        };
        return levels[level][this.currentLang];
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    translations.init();
});
