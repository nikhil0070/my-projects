// Smooth scroll from hero button to services section
const getStartedBtn = document.getElementById("getStartedBtn");
const featuresSection = document.getElementById("features");

if (getStartedBtn) {
  getStartedBtn.addEventListener("click", () => {
    featuresSection.scrollIntoView({ behavior: "smooth" });
  });
}

// Active navbar link on click
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
