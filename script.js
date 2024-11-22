// Focus Carousel
const focusTexts = [
    "Advanced materials including super alloys, advanced composites (PMC, MMC, CMC, C-C-C), high-temperature coatings, energy materials & devices, sensors, lightweighting, high entropy alloys, superalloys, steel & concrete.",
    "Computational design and mechanics of structures.",
    "Advanced processing technologies including composites processing, additive manufacturing, powder metallurgy.",
    "Material characterization, non-destructive testing, product qualification, structural health monitoring.",
    "Recycling & circular economy.",
    "Application of AI & ML in materials, design, manufacturing, and testing.",
    "Applications in aerospace, defence, automotive, infrastructure, and other industrial sectors."
];

const focusSection = document.getElementById('focus-text');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let focusIndex = 0;

function updateFocusText() {
    focusSection.textContent = focusTexts[focusIndex];
}

leftArrow.addEventListener('click', () => {
    focusIndex = (focusIndex - 1 + focusTexts.length) % focusTexts.length;
    updateFocusText();
});

rightArrow.addEventListener('click', () => {
    focusIndex = (focusIndex + 1) % focusTexts.length;
    updateFocusText();
});

// Organizers Carousel
const organizers = document.querySelectorAll('.organizer');
let organizerIndex = 0;

function cycleOrganizers() {
    organizers.forEach((org, index) => {
        org.classList.remove('active');
    });
    organizers[organizerIndex].classList.add('active');
    organizerIndex = (organizerIndex + 1) % organizers.length;
}

setInterval(cycleOrganizers, 3000); // Change every 3 seconds
