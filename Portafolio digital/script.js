// Scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Efecto de escritura automática
const text = "Cybersecurity";
const typewriter = document.querySelector(".typewriter");
let i = 0;

function typingEffect() {
  if (i < text.length) {
    typewriter.textContent += text.charAt(i);
    i++;
    setTimeout(typingEffect, 120);
  }
}
typewriter.textContent = "";
typingEffect();

const timelineItems = document.querySelectorAll('.timeline-item');

function showTimeline() {
  const triggerBottom = window.innerHeight * 0.85;
  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if(itemTop < triggerBottom) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showTimeline);
showTimeline();

