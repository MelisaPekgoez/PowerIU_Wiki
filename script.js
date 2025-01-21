// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Fade-in Animation beim Laden
  const chartContainers = document.querySelectorAll('.chart-container');
  chartContainers.forEach(container => {
    container.style.opacity = 0;
    container.style.transform = 'translateY(20px)';
    setTimeout(() => {
      container.style.transition = 'all 0.6s ease-out';
      container.style.opacity = 1;
      container.style.transform = 'translateY(0)';
    }, 300);
  });
});