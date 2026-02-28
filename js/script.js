// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Закрытие бургера при клике на ссылку меню
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  // Проверяем, существует ли элемент collapse (чтобы избежать ошибок на других страницах, если они будут)
  if (navbarCollapse) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (navbarCollapse.classList.contains('show')) {
            bsCollapse.hide();
          }
          
          const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
              window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
            }
          }
        });
      });

      // 2. Закрытие бургера при клике вне меню
      document.addEventListener('click', (event) => {
        const isClickInsideMenu = navbarCollapse.contains(event.target);
        const isClickOnToggler = document.querySelector('.navbar-toggler').contains(event.target);

        if (navbarCollapse.classList.contains('show') && !isClickInsideMenu && !isClickOnToggler) {
          bsCollapse.hide();
        }
      });
  }
});