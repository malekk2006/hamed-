// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Animated Text Effect
const text = document.querySelector(".animate-text");
let letters = text.textContent.split("");
text.textContent = "";
letters.forEach((letter, i) => {
  setTimeout(() => {
    text.textContent += letter;
  }, 100 * i);
});
