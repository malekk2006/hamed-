// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Animated Text Effect
const text = document.querySelector(".animate-text");
if (text) {
  let letters = text.textContent.split("");
  text.textContent = "";
  letters.forEach((letter, i) => {
    setTimeout(() => {
      text.textContent += letter;
    }, 100 * i);
  });
}

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  // تغيير رمز الزر عند الفتح/الإغلاق
  menuToggle.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
});
