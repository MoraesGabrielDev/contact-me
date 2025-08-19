document.addEventListener("DOMContentLoaded", () => {
  // Aplica o fade-in quando a página carrega
  document.body.classList.add("fade-in");

  // Seleciona apenas links internos válidos
  const links = document.querySelectorAll("a[href]:not([target='_blank']):not([href^='#']):not([href^='mailto:']):not([href^='tel:'])");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = href;
      }, 600);
    });
  });
});
