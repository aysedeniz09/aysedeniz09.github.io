document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
