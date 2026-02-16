(() => {
  const header = document.querySelector('.site-header');
  const navToggle = header ? header.querySelector('.nav-toggle') : null;

  if (header && navToggle) {
    const navMenu = header.querySelector('.nav-menu');
    const modernMenu = header.querySelector('[data-nav-menu]');

    navToggle.addEventListener('click', () => {
      if (navMenu) {
        const isOpen = header.classList.toggle('nav-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        return;
      }

      if (modernMenu) {
        const isOpen = modernMenu.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
      }
    });
  }

  const yearNode = document.querySelector('[data-current-year]');
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  const yearIdNode = document.getElementById('year');
  if (yearIdNode) {
    yearIdNode.textContent = String(new Date().getFullYear());
  }
})();
