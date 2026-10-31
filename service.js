const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}
const galleryImages = document.querySelectorAll('.gallery-item img');

if (galleryImages.length > 0) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML =
    '<button class="lightbox-close" aria-label="Close image">&times;</button>' +
    '<img class="lightbox-img" src="" alt="">';
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const closeLightbox = () => lightbox.classList.remove('open');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });

  lightbox.addEventListener('click', e => {
    if (e.target !== lightboxImg) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}
const accordionToggles = document.querySelectorAll('.accordion-toggle');

accordionToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.closest('.service-item').querySelector('.accordion-panel');
    const isOpen = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });
});
const searchInput = document.querySelector('#service-search');
const serviceCards = document.querySelectorAll('.service-item');
const searchMessage = document.querySelector('#search-message');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.trim().toLowerCase();
    let matches = 0;

    serviceCards.forEach(card => {
      const isMatch = card.textContent.toLowerCase().includes(term);
      card.hidden = !isMatch;
      if (isMatch) matches++;
    });

    searchMessage.hidden = matches > 0;
  });
}