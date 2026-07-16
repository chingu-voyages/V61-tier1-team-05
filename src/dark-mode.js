export function dark_mode() {

    const savedTheme=localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme',savedTheme);

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "🌙";
    toggleButton.id = "dark-mode-button";

    const header = document.body.querySelector("header");

    header.appendChild(toggleButton);

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    toggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}
