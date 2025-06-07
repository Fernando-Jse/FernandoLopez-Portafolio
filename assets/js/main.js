let currentLang = 'es';
let currentTranslations = {};

document.getElementById('translateBtn').addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.getElementById('translateBtn').textContent = currentLang === 'es' ? 'EN' : 'ES';
  loadTranslations(currentLang);
});

function loadTranslations(lang) {
  fetch(`assets/js/lang/${lang}.json`)
    .then(response => response.json())
    .then(translations => {
      currentTranslations = translations;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
          el.textContent = translations[key];
        }
      });
    })
    .catch(err => console.error('Error cargando traducciones:', err));
}
function t(key) {
  return currentTranslations[key] || key;
}

loadTranslations(currentLang);