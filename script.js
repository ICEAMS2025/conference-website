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

    // Countdown Timer
    const countdownDate = new Date("Jan 15, 2025 00:00:00").getTime();
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = countdownDate - now;
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        document.getElementById("countdown-days").textContent = `Days: ${days}`;
        document.getElementById("countdown-hours").textContent = `Hours: ${hours}`;

        if (timeLeft < 0) {
            clearInterval(countdown);
            document.getElementById("countdown-timer").innerHTML = "Abstract Submission Closed";
        }
    }, 1000);
});

