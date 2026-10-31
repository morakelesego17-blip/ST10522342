const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}
const mapElement = document.querySelector('#map');

if (mapElement && typeof L !== 'undefined') {
  const locations = [
    { name: 'Crafted Wood Carpentry: Soshanguve Block BB', coords: [25.48774, 28.11232] },
    { name: 'Crafted Wood Carpentry: Soshanguve Branch', coords: [25.48774, 28.11232] }
  ];

  const map = L.map('map').setView(locations[0].coords, 12);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  locations.forEach(place => {
    L.marker(place.coords).addTo(map).bindPopup('<strong>' + place.name + '</strong>');
  });

  map.fitBounds(locations.map(place => place.coords), { padding: [40, 40] });
}
const contactForm = document.querySelector('#contact-form');

function getMessage(field) {
  const v = field.validity;
  if (v.valueMissing) return 'This field is required.';
  if (v.typeMismatch) return 'Please enter a valid email address, like name@example.com.';
  if (v.tooShort) return 'Please enter at least ' + field.minLength + ' characters.';
  if (v.patternMismatch) return field.title || 'Please use the requested format.';
  return '';
}

function validateField(field) {
  const message = field.checkValidity() ? '' : getMessage(field);
  let error = field.nextElementSibling;
  if (!error || !error.classList.contains('error-message')) {
    error = document.createElement('span');
    error.className = 'error-message';
    field.insertAdjacentElement('afterend', error);
  }
  error.textContent = message;
  field.classList.toggle('invalid', message !== '');
  return message === '';
}

if (contactForm) {
  const formStatus = document.querySelector('#form-status');
const submitButton = contactForm.querySelector('button[type="submit"]');
  const fields = contactForm.querySelectorAll('input, select, textarea');

  fields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('invalid')) validateField(field);
    });
  });

  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    let allValid = true;
    fields.forEach(field => {
      if (!validateField(field)) allValid = false;
    });
    if (!allValid) {
      contactForm.querySelector('.invalid').focus();
      return;
    }
    const senderName = contactForm.elements['name'].value;
submitButton.disabled = true;
submitButton.textContent = 'Sending...';
formStatus.textContent = '';

fetch(contactForm.action, {
  method: 'POST',
  body: new FormData(contactForm),
  headers: { 'Accept': 'application/json' }
})
  .then(response => {
    if (!response.ok) throw new Error('Request failed');
    formStatus.textContent = 'Thank you, ' + senderName + '. Your message has been sent and we will reply as soon as we can.';
    formStatus.className = 'success';
    contactForm.reset();
  })
  .catch(() => {
    formStatus.textContent = 'Sorry, something went wrong. Please try again or email us directly.';
    formStatus.className = 'error';
  })
  .finally(() => {
    submitButton.disabled = false;
    submitButton.textContent = 'Send message';
  });
  });
}