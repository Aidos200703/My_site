
const imgs = ["img/own_foto.jpg", "img/own_foto_1.jpg","img/own_foto_2.jpg"]; // Суреттер тізімі
let current = 0;

function showSlide(index) {
  const img = document.getElementById("slide_img");
  img.src = imgs[index];
}

function nextSlide() {
  current = (current + 1) % imgs.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + imgs.length) % imgs.length;
  showSlide(current);
}
