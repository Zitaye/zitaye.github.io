const filters = document.querySelectorAll('[data-filter]');
const works = document.querySelectorAll('.work');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('selected', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  works.forEach(work => {
    work.hidden = button.dataset.filter !== 'all' && work.dataset.category !== button.dataset.filter;
    if (!work.hidden) count++;
  });
  document.querySelector('#gallery-status').textContent = `Showing ${count} ${count === 1 ? 'work' : 'works'}`;
}));
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
  lightboxImage.src = button.dataset.image;
  lightboxImage.alt = button.querySelector('img').alt;
  document.querySelector('#lightbox-title').textContent = button.dataset.title;
  lightbox.showModal();
  document.body.style.overflow = 'hidden';
}));
document.querySelector('.close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => {
  const bounds = lightbox.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close();
});
lightbox.addEventListener('close', () => { document.body.style.overflow = ''; });
const navLinks = document.querySelectorAll('nav a');
const pages = [...document.querySelectorAll('main > section[id]')];
const pageNames = { home: 'Home', about: 'About', gallery: 'Gallery', contact: 'Contact' };

function showPage({ focus = false } = {}) {
  // Keep links from the previous portfolio version working.
  const requested = location.hash.slice(1);
  const route = requested === 'contacts' ? 'contact' : requested;
  const pageId = Object.hasOwn(pageNames, route) ? route : 'home';
  const activePage = pages.find(page => page.id === pageId);
  if (lightbox.open) lightbox.close();
  pages.forEach(page => { page.hidden = page !== activePage; });
  navLinks.forEach(link => {
    if (link.hash === `#${pageId}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.title = `${pageNames[pageId]} — Zita Ye | Art, Design & Photography`;
  if (focus) {
    activePage.setAttribute('tabindex', '-1');
    activePage.focus({ preventScroll: true });
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  if (!Object.hasOwn(pageNames, link.hash.slice(1))) return;
  link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null, '', link.hash);
    showPage({ focus: true });
  });
});
window.addEventListener('popstate', () => showPage({ focus: true }));
window.addEventListener('hashchange', () => showPage({ focus: true }));
showPage();
document.querySelector('#year').textContent = new Date().getFullYear();
