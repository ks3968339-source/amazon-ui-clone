// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. "Back to Top" Functionality
    // This smoothly scrolls the page back to the top when the footer button is clicked.
    const backToTopBtn = document.querySelector('.foot-1');
    if (backToTopBtn) {
        backToTopBtn.style.cursor = 'pointer'; // Improves UI by showing it's clickable
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 2. Search Bar Interactivity
    // Triggers an alert showing the search query when the search icon is clicked.
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    const searchSelect = document.querySelector('.search-select');

    if (searchIcon && searchInput) {
        searchIcon.style.cursor = 'pointer';
        searchIcon.addEventListener('click', () => {
            const query = searchInput.value.trim();
            const category = searchSelect.value;
            
            if (query !== '') {
                alert(`Searching for "${query}" in "${category}" category.`);
                // In a real app, you would redirect here: 
                // window.location.href = `/search?q=${query}&cat=${category}`;
            } else {
                alert('Please enter a product to search for.');
                searchInput.focus();
            }
        });

        // Allow pressing "Enter" to trigger the search
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchIcon.click();
            }
        });
    }

    // 3. Hero Section Image Slider (Carousel)
    // Automatically cycles through background images in the hero section every 5 seconds.
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        // Add your own image URLs to this array to cycle through them
        const heroImages = [
            'url("./images/heroimg.jpg")',
            'url("https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg")', 
            'url("https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg")'
        ];
        
        let currentImageIndex = 0;

        // Function to change the background image
        function changeHeroImage() {
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
            // Add a smooth transition effect
            heroSection.style.transition = "background-image 0.5s ease-in-out";
            heroSection.style.backgroundImage = heroImages[currentImageIndex];
        }

        // Change the image every 5000 milliseconds (5 seconds)
        setInterval(changeHeroImage, 5000);
    }
});