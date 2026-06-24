// Slider Control
document.addEventListener('DOMContentLoaded', () => {
    const carouselEl = document.getElementById('youngbotCarousel');
    if (carouselEl) {
        // Bootstrap carousel is handled via data attributes, 
        // but we can add custom event listeners here.
        carouselEl.addEventListener('slide.bs.carousel', event => {
            console.log('Sliding to index:', event.to);
        });
    }
});
