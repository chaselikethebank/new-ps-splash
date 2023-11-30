function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}


const carousel = document.querySelector('.carousel');
  let currentIndex = 0;

  function showNextImage() {
    currentIndex = (currentIndex + 1) % (carousel.children.length / 2);
    const translateValue = -currentIndex * (150 + 20); // 150px image width + 20px margin
    carousel.style.transform = `translateX(${translateValue}px)`;
  }

  setInterval(showNextImage, 3000); // Change image every 3 seconds (adjust as needed)
