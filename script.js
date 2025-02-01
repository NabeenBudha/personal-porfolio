document.addEventListener("DOMContentLoaded", function () {
    // ------------------------------------
    // Smooth Scrolling
    // ------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  
    // ------------------------------------
    // Contact Form Handling
    // ------------------------------------
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const formData = {
          name: document.getElementById("name")?.value,
          email: document.getElementById("email")?.value,
          message: document.getElementById("message")?.value,
        };
  
        console.log("Form submitted:", formData);
  
        // Reset form fields
        this.reset();
      });
    }
  
    // ------------------------------------
    // Scroll Reveal Animations
    // ------------------------------------
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    document.querySelectorAll(".review-card, .profile-container").forEach((el) => {
      observer.observe(el);
    });
  
    // ------------------------------------
    // Mobile Menu Toggle
    // ------------------------------------
    // Use the hamburger element inside your .menu-toggle container.
    // (Ensure your HTML has removed the <input type="checkbox"> if it's not needed.)
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", function (e) {
        // Prevent any default behavior and stop the event from bubbling up
        e.preventDefault();
        e.stopPropagation();
  
        // Toggle the "open" class on nav-links and "active" class on hamburger
        navLinks.classList.toggle("open");
        hamburger.classList.toggle("active");
        console.log(
          "Hamburger clicked. nav-links open:",
          navLinks.classList.contains("open")
        );
      });
    } else {
      console.error("Hamburger or nav-links element not found.");
    }
  
    // ------------------------------------
    // Close Mobile Menu When Clicking Outside
    // ------------------------------------
    document.addEventListener("click", (e) => {
      if (
        navLinks &&
        hamburger &&
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        navLinks.classList.remove("open");
        hamburger.classList.remove("active");
        console.log("Clicked outside. Menu closed.");
      }
    });
  });
  