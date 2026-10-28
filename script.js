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
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) navLinks.forEach(link => {
      if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
document.querySelector('#year').textContent = new Date().getFullYear();
