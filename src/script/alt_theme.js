document.addEventListener("DOMContentLoaded", function () {
    const toggleContainer = document.querySelector(".toggle-container");
    const body = document.body;
    let themeIndex = 1; // Começa no tema 1

    toggleContainer.addEventListener("click", function () {
        themeIndex = (themeIndex % 3) + 1; // Alterna entre 1, 2 e 3
        body.className = `theme-${themeIndex}`;
        localStorage.setItem("theme", themeIndex); // Salva o tema escolhido
    });

    // Carregar o tema salvo ao recarregar a página
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        themeIndex = parseInt(savedTheme);
        body.className = `theme-${themeIndex}`;
    }
});
