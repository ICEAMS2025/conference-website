document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');  // Add 'visible' class when in view
                observer.unobserve(entry.target);       // Stop observing once visible
            }
        });
    }, {
        root: null,
        threshold: 0.1  // Trigger when 10% of the section is visible
    });

    sections.forEach(section => observer.observe(section));
});
