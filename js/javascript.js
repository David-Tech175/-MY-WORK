/* ===============================
   SOCIAL ICON POPUP HANDLER
   =============================== */
function showPopup(platform) {
  alert(`You clicked on ${platform}. Redirecting you now...`);
}

/* ===============================
   MODAL EVENT LOGGING (Optional)
   =============================== */
const socialModal = document.getElementById('socialModal');
if (socialModal) {
  socialModal.addEventListener('show.bs.modal', () => {
    console.log('Social modal is about to be shown');
  });

  socialModal.addEventListener('hide.bs.modal', () => {
    console.log('Social modal is about to be hidden');
  });
}

/* ===============================
   FUTURE INTERACTIONS (Placeholder)
   =============================== */
// Example: Scroll to top button, animations, or form validation
// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }

/* ===============================
  SERVICS PAGE SOCIAL ICON POPUP HANDLER
   =============================== */
function showPopup(platform) {
  alert(`You clicked on ${platform}. Redirecting you now...`);
}

/* ===============================
   NAVBAR ACTIVE LINK HIGHLIGHT
   =============================== */
document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active");
    }
  });
});

/* ===============================
   SCROLL TO TOP BUTTON (Optional)
   =============================== */
// If you add a button with id="scrollToTop" in your HTML, this will work
const scrollBtn = document.getElementById("scrollToTop");
if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ===============================
   FUTURE INTERACTIONS
   =============================== */
// Example: Form validation, animations, or dynamic content loading
// You can expand this file as your academy site grows

// =========================
// for contact page social icons
// =========================
function showPopup(platform) {
  alert("You clicked on " + platform + " link!");
}

// =========================
// Contact Form Validation
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent default submission

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Simple validation
      if (!name || !email || !message) {
        alert("Please fill in all fields before sending.");
        return;
      }

      // Email format check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Success message
      alert("Thank you, " + name + "! Your message has been sent successfully.");
      form.reset(); // clear the form
    });
  }
});