// document.addEventListener("DOMContentLoaded", function() {
//     const menuToggle = document.querySelector(".menu-toggle");
//     const mainNav = document.querySelector(".main-nav");

//     if (menuToggle && mainNav) {
//         menuToggle.addEventListener("click", function() {
//             mainNav.classList.toggle("active");
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('navbar');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
});
