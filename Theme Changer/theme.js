const themeSwitcher = document.getElementById('themeSwitcher');

// default theme if chosen
const themeByDefault = localStorage.getItem('theme') || 'theme-light';
setTheme(themeByDefault);

// event callback
themeSwitcher.addEventListener('change', (event) => {
    setTheme(event.target.value);
    // console.log(e.target.value);
});

// event callback function
function setTheme(theme) {
    theme = theme || 'theme-light';
    document.documentElement.classList = theme;  // selecting root element
    localStorage.setItem('themeSelected', theme);
    themeSwitcher.value = theme;
}

