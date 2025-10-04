const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

langToggle.addEventListener('click', () => {
  langToggle.textContent = langToggle.textContent === 'AR' ? 'EN' : 'AR';
});
