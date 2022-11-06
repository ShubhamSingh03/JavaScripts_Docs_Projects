const themeSwitcher = document.getElementById('themeSwitcher');
const themeIcon = document.getElementById("theme-icon");

let themeByDefault;

// default theme if chosen
if(localStorage.getItem('theme')) {
    themeByDefault = localStorage.getItem('theme');
}
else{
    themeByDefault = 'theme-light';
}
setTheme(themeByDefault);

// event callback
themeSwitcher.addEventListener('change', (event) => {
    setTheme(event.target.value);
    // console.log(e.target.value);aa
});

// event callback function
function setTheme(theme) {
    theme = theme || 'theme-light';
    document.documentElement.classList = theme;  // selecting root element
    localStorage.setItem('theme', theme);
    themeSwitcher.value = theme;
    // changing icons as theme changes
    if(theme == 'theme-light'){
    themeIcon.innerHTML = `
        <i class="fa-solid fa-sun fa-lg"></i>
        `
    } else if(theme == 'theme-dark'){
        themeIcon.innerHTML = `
        <i class="fa-solid fa-moon fa-xl" style="color: #fff;"></i>
        `
    } else if(theme == 'theme-ocean'){
        themeIcon.innerHTML = `
        <i class="fa-solid fa-earth-oceania fa-lg" style="color: #fff;"></i>
        ` 
    } else if(theme == 'theme-sepia'){
        themeIcon.innerHTML = `
        <i class="fa-solid fa-filter fa-lg"></i>
        ` 
    }
}

