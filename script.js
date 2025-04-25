// script.js
window.addEventListener('load', () => {
  document.querySelectorAll('.progress').forEach(el => {
    const level = el.getAttribute('data-level');
    el.style.width = level;
  });
});