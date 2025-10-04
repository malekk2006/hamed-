// Toggle menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
});

// Toggle theme
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});

// Toggle language
const langToggle = document.getElementById("langToggle");
langToggle.addEventListener("click", () => {
  const isArabic = langToggle.textContent === "EN";
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = isArabic ? el.dataset.en : el.dataset.ar;
  });
  langToggle.textContent = isArabic ? "AR" : "EN";
});

// Typing effect in Hero
const typedText = document.getElementById("typed-text");
const textArray = [
  "Arabic Calligraphy Artist ✍️",
  "Modern & Traditional Style 🎨",
  "Turning Letters into Art 🖌️"
];
let arrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[arrayIndex].length) {
    typedText.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}
function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    arrayIndex = (arrayIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});
