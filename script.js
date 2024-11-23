document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.logos img');
    const observerOptions = {
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    logos.forEach(logo => {
        observer.observe(logo);
    });
});
