// Shrink header on scroll with buffer to prevent jitter
let isShrunk = false;

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const trigger = 80;   // scroll past 80px before shrinking
  const buffer = 20;    // only unshrink if back above 60px

  if (!isShrunk && window.scrollY > trigger) {
    header.classList.add('shrink');
    isShrunk = true;
  } else if (isShrunk && window.scrollY < trigger - buffer) {
    header.classList.remove('shrink');
    isShrunk = false;
  }
});


// Handle Formspree submission with a thank-you alert
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", async function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        alert("Thanks! Your request has been sent.");
        form.reset();
      } else {
        alert("Oops! There was a problem sending your request.");
      }
    });
  }
});

// Auto-scroll testimonials
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".testimonial-carousel");
  if (carousel) {
    let scrollAmount = 0;
    setInterval(() => {
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      } else {
        scrollAmount += 320; // card width + gap
      }
      carousel.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }, 3000); // every 3 seconds
  }
});

document.querySelectorAll(".team-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
});


console.log("Red Rocks Housesitting site loaded!");

