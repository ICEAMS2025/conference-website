document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');  // Add 'visible' class when in view
                observer.unobserve(entry.target);       // Stop observing once visible
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Countdown Timer Script
    const countdownDays = document.getElementById('countdown-days');
    const countdownHours = document.getElementById('countdown-hours');
    
    function updateCountdown() {
        const now = new Date();
        const deadline = new Date('2025-02-15');  // Replace with actual submission deadline
        const timeRemaining = deadline - now;
        
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        countdownDays.textContent = `[Days]: ${days}`;
        countdownHours.textContent = `[Hours]: ${hours}`;
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
});
