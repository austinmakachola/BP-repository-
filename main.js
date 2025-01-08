// Toggle mobile menu
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("show");
}

// Highlight active navigation link on scroll
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  // Identify the section in view
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 60; // Offset for sticky header
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  // Highlight the active link
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });

  // Add background to header on scroll
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth scrolling for links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});



