// عناصر القائمة
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
});

// زر تغيير الوضع (مظلم/فاتح)
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});

// زر اللغة (AR/EN)
const langToggle = document.getElementById("langToggle");
langToggle.addEventListener("click", () => {
  const isArabic = langToggle.textContent === "EN";
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = isArabic ? el.dataset.en : el.dataset.ar;
  });
  langToggle.textContent = isArabic ? "AR" : "EN";
});
