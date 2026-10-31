const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}
const enquiryForm = document.querySelector('#enquiry-form');

const serviceInfo = {
  furniture:   { name: 'Custom Furniture',       price: 2500, weeks: '3 to 4 weeks' },
  doors:       { name: 'Doors and Cupboards',    price: 1800, weeks: '2 to 3 weeks' },
  restoration: { name: 'Restoration and Repairs', price: 600,  weeks: '1 to 2 weeks' }
};

const availability = {
  flexible: 'We can schedule your project around your plans.',
  month: 'We have space in our workshop in the coming weeks.',
  urgent: 'We will try to prioritise urgent jobs and confirm within one working day.'
};

function getMessage(field) {
  const v = field.validity;
  if (v.valueMissing) return 'This field is required.';
  if (v.typeMismatch) return 'Please enter a valid email address, like name@example.com.';
  if (v.tooShort) return 'Please enter at least ' + field.minLength + ' characters.';
  if (v.rangeUnderflow || v.rangeOverflow || v.badInput) return 'Please enter a number between 1 and 20.';
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

function validateTimeline() {
  const chosen = enquiryForm.querySelector('input[name="timeline"]:checked');
  document.querySelector('#timeline-error').textContent =
    chosen ? '' : 'Please choose when you need the work done.';
  return Boolean(chosen);
}

function showResponse() {
  const response = document.querySelector('#enquiry-response');
  const info = serviceInfo[enquiryForm.elements['service'].value];
  const quantity = Number(enquiryForm.elements['quantity'].value);
  const timeline = enquiryForm.querySelector('input[name="timeline"]:checked').value;
  const total = info.price * quantity;

  const lines = [
    'Service: ' + info.name,
    'Quantity: ' + quantity,
    'Estimated cost: from R' + total.toLocaleString('en-ZA'),
    'Typical lead time: ' + info.weeks,
    'Availability: ' + availability[timeline]
  ];
  if (enquiryForm.elements['site_visit'].checked) {
    lines.push('Site visit: we will contact you to arrange a time.');
  }

  response.innerHTML = '';
  const heading = document.createElement('h2');
  heading.textContent = 'Thank you, ' + enquiryForm.elements['name'].value;
  const list = document.createElement('ul');
  lines.forEach(text => {
    const item = document.createElement('li');
    item.textContent = text;
    list.appendChild(item);
  });
  const note = document.createElement('p');
  note.textContent = 'This is an estimate. We will confirm the final price once we have seen your project details.';
  response.append(heading, list, note);
  response.hidden = false;
  response.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

if (enquiryForm) {
  const fields = enquiryForm.querySelectorAll(
    'input:not([type="radio"]):not([type="checkbox"]), select, textarea'
  );

  fields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('invalid')) validateField(field);
    });
  });

  enquiryForm.addEventListener('submit', event => {
    event.preventDefault();
    let allValid = true;
    fields.forEach(field => {
      if (!validateField(field)) allValid = false;
    });
    if (!validateTimeline()) allValid = false;

    if (!allValid) {
      document.querySelector('#enquiry-response').hidden = true;
      const firstInvalid = enquiryForm.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    showResponse();
  });
}