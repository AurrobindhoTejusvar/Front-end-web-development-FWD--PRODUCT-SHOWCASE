// Toggle menu (mobile)
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    navLinks.classList.remove("active"); // close menu after click
  });
});

// Highlight active nav link while scrolling
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 70;
  document.querySelectorAll("nav a").forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
});

// Show alert when "Download CV" is clicked
const cvButton = document.getElementById("cv-btn");
if (cvButton) {
  cvButton.addEventListener("click", () => {
    alert("Your CV will open in a new tab for download.");
  });
}
