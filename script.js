let currentIndex = 0;
function moveSlide(step) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}


document.querySelector('.menu-burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu-container').classList.toggle('active');
});
