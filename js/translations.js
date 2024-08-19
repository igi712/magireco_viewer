let translations = {};
let currentLanguage = 'en'; // Default language

// Load translations from JSON file
fetch('translations.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        // Set default language to English
        updateLanguage('en');
    });

// Function to update text content based on selected language
function updateLanguage(lang) {
    document.getElementById('language_label').innerText = translations[lang].language;
    document.getElementById('jp_label').innerText = translations[lang].japanese;
    document.getElementById('en_label').innerText = translations[lang].english;
    document.getElementById('cn_label').innerText = translations[lang].chinese;

    // Show/hide checkboxes based on selected language
    document.getElementById('jp_checkbox').style.display = lang === 'jp' ? 'inline' : 'none';
    document.getElementById('en_checkbox').style.display = lang === 'en' ? 'inline' : 'none';
    document.getElementById('cn_checkbox').style.display = lang === 'cn' ? 'inline' : 'none';

    currentLanguage = lang;

    document.querySelectorAll('.char').forEach(element => {
        element.style.fontFamily = lang === 'en' ? 'magien' : 'magi';
    });
}

// Add event listeners to language selection elements
document.getElementById('jp_check').addEventListener('click', () => updateLanguage('jp'));
document.getElementById('en_check').addEventListener('click', () => updateLanguage('en'));
document.getElementById('cn_check').addEventListener('click', () => updateLanguage('cn'));
