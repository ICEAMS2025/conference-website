// Image Carousel
let images = document.querySelectorAll('.carousel-image');
let current = 0;

function carousel() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
}
setInterval(carousel, 3000);

// Scroll Animations
const sections = document.querySelectorAll('section');
const options = { threshold: 0.5 };

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
