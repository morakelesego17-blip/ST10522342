# Crafted Wood Carpentry — Website Project
Lesego Morake
ST10522342
WEDE5020
https://github.com/morakelesego17-blip/ST10522342

## Project Overview
Crafted Wood Carpentry is a small woodworking business based in Soshanguve, 
founded by Jason Bokaba in 2022. This website was built to give the business 
an online presence, showcase its services, and allow customers to make enquiries.

## Website Goals and Objectives
Provide an accessible online presence for the business
Showcase services: custom furniture, doors/cupboards, restoration and repairs
Allow customers to submit enquiries and contact the business directly
Build trust and support the business's goal of becoming a recognised 
  carpentry business in Gauteng

## Key Features and Functionality
5 page responsive website: Home, About Us, Services, Enquiry, Contact
Consistent navigation across all pages
Enquiry form with client-side validation
Contact page with two business locations and an embedded map
Responsive design (desktop, tablet, mobile breakpoints)

## Sitemap
Home (index.html)
About Us (about.html)
Services (services.html)
Enquiry (enquiry.html)
Contact (contact.html)

## Changelog
2026-09-18: Initial HTML structure created for all 5 pages
2026-09-18: External stylesheet added — base styles, header/nav, hero, 
  content sections, service cards, form styling
2026-09-18: Responsive breakpoints added for tablet and mobile
Part 3: New features and changes

2026-10-27
Added an "Our Work" gallery at the bottom of the home page, with images side by side using CSS Grid that stack on small screens.

Added a workshop image and a gallery of finished pieces to the About page, using figure and figcaption.

Added images for each service to the Services page.

Gave the home gallery its own class (index-item), because one shared class forced a fixed 220px height that cropped images on the other pages.

Fixed cropped service images by using aspect-ratio and object-fit instead of a fixed height.

2026-10-29
Created a separate JavaScript file for each page, as my lecturer instructed (index.js, about.js, service.js, enquiry.js, contact.js), linked at the bottom of each page.

Added the mobile hamburger menu to all five pages.

Added an image lightbox to the Home, About and Services pages. It closes with the X button, a click outside the image, or the Escape key. It didn't work on About and Services at first because of a class name mismatch, which I fixed.

Restructured the Services page into one card per service, with an accordion button and panel. JavaScript toggles the panel and aria-expanded. Fixed a class typo (Service-image with a capital S) and removed a stray closing /section.

Added a live search box to the Services page that filters the cards as the user types.

Added a "What We Do" section to the home page, generated from a JavaScript array using DOM manipulation. Fixed a spelling error in its heading and improved the card text contrast.

Replaced the Google Maps embed on the Contact page with an interactive Leaflet map showing both locations with popups, using OpenStreetMap tiles and attribution. Corrected the coordinates (the latitude needs a minus sign) and tested through Live Server.

Added HTML5 validation and JavaScript validation with inline error messages to the Contact form.

Made the Contact form send its message by email without reloading the page, using fetch and Formspree, with a disabled button while sending and success and error messages.

Rebuilt the Enquiry form with a dropdown, number field, radio buttons, checkbox and textarea. Added validation and a response panel that shows the estimated cost (starting price multiplied by quantity), typical lead time, availability based on the chosen timeline and a site visit note. Starting prices are R2 500 for custom furniture, R1 800 for doors and cupboards and R600 for restoration and repairs.

2026-10-30
Added a unique title tag, meta description and meta keywords to each page, based on my keyword research (wooden furniture Soshanguve, custom furniture Pretoria, made-to-order wooden furniture and others).

Fixed heading structure so each page has one h1, with h2 and h3 headings in order, and removed empty headings.

Renamed image files with descriptive lowercase names, fixed doubled extensions and a misspelling, and added alt text and captions.

2026-10-31
Added srcset and sizes to the hero image with 800px and 1600px versions.

Installed Git, cloned the repository, and committed each feature separately with descriptive messages before pushing to GitHub.

Problems I fixed

The lightbox did nothing on About and Services because the JavaScript selector didn't match the class names in the HTML.

Contact.js was linked twice, which made the script crash because its variables were declared twice.

The Formspree request returned 404 because the placeholder form ID was still in the form address.

Map tiles returned a 403 error when the page was opened as a file, so I tested through Live Server.

## References
Available at: Magnific
https://www.magnific.com/premium-photo/carpenter-woodwork-furniture-making-carpentry-workshop_16917559.htm
[Accessed 18 September 2026]
[Woodworking image] (n.d.) image online.
Available at: https://i.pinimg.com/originals/72/20/ b5/7220b5f1ad8900b13d4f6ea2cabfe615.jpg 7
[Accessed: 27 October 2026]

Design Creations Woodworking (2022) JTP
Chuck woodworking image [image online]. Available at: https://www.designcreationswoodworking.com/
app/uploads/2022/11/JTPChuck-64-1.jpg a
[Accessed: 27 October 2026]

Phillips Forest Products (2023) IMG-4801
[photograph online]. Available at: https://.
store.phillipsforestproducts.com/cdn/shop/files/ IMG-4801.heic?v=1700065268&width=3024 x
[Accessed: 27 October 2026]

Home Decor Woodworking (2024) Custom woodwork [image online]. Available at: https://.
homedecorwoodworking.com/wp-content/uploads/ 2024/12/custom-woodwork-1-1024x585.jpg
[Accessed: 27 October 2026]

[Woodworking image] (n.d.) [image online].
Available at: https://th.bing.com/th/id/
OIP.y8Yh5dNTP_pbNCFtQujVZAH aEC?
w=261&h=180&c=7&r=0&o=7&pid=1.7&rm=3
[Accessed: 27 October 2026]

[Woodworking image] (n.d.) [image online].
Available at: https://i.pinimg.com/originals/8f/31/ e1/8f31e198b71b1e16b4a08ea4c76cf40d.jpg 7 [Accessed: 27 October 2026]

Best Choice Cabinets (n.d.) JGM Grey White
Painted Cabinets [image online]. Available at:
https://best-choice-cabinets.com/wp-content/
uploads/
BestChoiceCabinets_JGM_GreyWhitePainted-17-scaled.jpg › [Accessed: 27 October 2026]

[Woodworking image] (n.d.) [image online].
Available at: https://tse1.mm.bing.net/th/id/
OIP.SLonv3qnV7IfkBzsqy6RfgHaFS?
r=0&rs=1&pid=ImgDetMain&o=7&rm=3 x
[Accessed: 27 October 2026]

Woodworking by LPI Custom (2024)
Woodworking ideas [image online]. Available at: https://www.woodworkingby|picustom.com/wp-content/uploads/2024/03/woodworking-ideas.jpg 7 [Accessed: 27 October 2026]

[Woodworking image] (n.d.) [image online].
Available at: https://tse2.mm.bing.net/th/id/
OIP.V2yICSGOqebGDNeepGjPxwHaHa?
r=0&rs=1&pid=ImgDetMain&o=7&rm=3 x
[Accessed: 27 October 2026]