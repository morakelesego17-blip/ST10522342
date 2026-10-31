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