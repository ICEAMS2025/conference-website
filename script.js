// Tab Navigation
function openTab(event, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabContents.forEach(tab => tab.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Areas of Focus Carousel
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
let focusIndex = 0;

function updateFocusText() {
    focusSection.textContent = focusTexts[focusIndex];
}

function prevFocus() {
    focusIndex = (focusIndex - 1 + focusTexts.length) % focusTexts.length;
    updateFocusText();
}

function nextFocus() {
    focusIndex = (focusIndex + 1) % focusTexts.length;
    updateFocusText();
}

updateFocusText(); // Initialize first text
