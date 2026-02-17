document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel .slide");
  let active = 0;

  function updateSlides() {
    const total = slides.length;

    slides.forEach((slide, i) => {
      let offset = i - active;

      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      slide.style.transform = `
        translate(-50%, -50%)
        translateX(${offset * 320}px)
        translateZ(${-Math.abs(offset) * 200}px)
        scale(${1 - Math.abs(offset) * 0.15})
      `;

      slide.style.zIndex = 100 - Math.abs(offset);
      slide.style.opacity = Math.abs(offset) <= 1 ? "1" : "0";
      slide.classList.toggle("active", offset === 0);
    });
  }

  window.next = () => {
    active = (active + 1) % slides.length;
    updateSlides();
  };

  window.prev = () => {
    active = (active - 1 + slides.length) % slides.length;
    updateSlides();
  };

  updateSlides();
});
