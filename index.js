const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}
const galleryImages = document.querySelectorAll('.index-item img');

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
const featuredServices = [
  { title: 'Custom Furniture', text: 'Hand-built tables, chairs, cabinets and shelving made to your measurements.', link: 'services.html' },
  { title: 'Doors and Cupboards', text: 'Custom-fitted wooden doors and cupboards finished to match your home.', link: 'services.html' },
  { title: 'Restoration and Repairs', text: 'Bringing damaged or worn wooden furniture back to life.', link: 'services.html' }
];

const servicesGrid = document.querySelector('#featured-services');

if (servicesGrid) {
  featuredServices.forEach(service => {
    const card = document.createElement('article');
    card.className = 'service-card';
    card.innerHTML =
      '<h3>' + service.title + '</h3>' +
      '<p>' + service.text + '</p>' +
      '<a href="' + service.link + '">Learn more</a>';
    servicesGrid.appendChild(card);
  });
}