document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".cv-section");
  const sidebarLinks = document.querySelectorAll(".cv-sidebar a");

  window.addEventListener("scroll", () => {
      let currentSection = "";

      sections.forEach(section => {
          const sectionTop = section.offsetTop - 80; // Offset for smoother scroll
          if (scrollY >= sectionTop) {
              currentSection = section.getAttribute("id");
          }
      });

      sidebarLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === currentSection) {
              link.classList.add("active");
          }
      });
  });
});
