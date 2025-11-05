// Initialize EmailJS
(function() {
  emailjs.init("uWOleHt-6xIZTq3qE");
})();

// Fade-in animation
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
  // Smooth scrolling for nav links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

// EmailJS order form
document.getElementById("orderForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("service_hceq5pt", "template_4nmgz9v", this)
    .then(() => {
      alert("💌 Thank you! Your message has been sent.");
      this.reset();
    }, (err) => {
      alert("❌ Something went wrong. Please try again.");
      console.log(err);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Create the lightbox elements dynamically
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    // 2. Add listener to close lightbox when clicked
    lightbox.addEventListener('click', e => {
        // Only close if clicking the background, not the image itself
        if (e.target !== e.currentTarget) return; 
        lightbox.classList.remove('active');
    });

    // 3. Find all gallery images on the detail page
    const images = document.querySelectorAll('.detail-gallery-grid img');

    // 4. Attach click listener to each image
    images.forEach(image => {
        image.addEventListener('click', () => {
            // Clear previous content
            lightbox.innerHTML = ''; 

            // Clone the clicked image and append it to the lightbox
            const clonedImage = image.cloneNode(true); 
            lightbox.appendChild(clonedImage);
            
            // Show the lightbox
            lightbox.classList.add('active'); 
        });
    });
});

