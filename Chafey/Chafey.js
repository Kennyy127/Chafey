// Product Slider Logic
let currentIndex = 0;
const slider = document.querySelector('.product-slider');
const products = document.querySelectorAll('.product');
const totalProducts = products.length;
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Function to update the slider manually
function updateSlider() {
    const offset = -currentIndex * 100; // Move by 100% per product
    slider.style.transform = `translateX(${offset}%)`;
}

// Event Listeners for Buttons
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalProducts) % totalProducts; // Loop back
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalProducts; // Loop forward
    updateSlider();
});

// Ensure the first product is shown on page load
updateSlider();
