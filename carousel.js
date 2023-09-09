const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
let autoScrollInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

function nextSlide() {
  currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
}

prevButton.addEventListener("click", () => {
  prevSlide();
  clearInterval(autoScrollInterval);
});

nextButton.addEventListener("click", () => {
  nextSlide();
  clearInterval(autoScrollInterval);
});

function autoScroll() {
  autoScrollInterval = setInterval(() => {
    nextSlide();
  }, 2000);
}

showSlide(currentIndex);
autoScroll();
