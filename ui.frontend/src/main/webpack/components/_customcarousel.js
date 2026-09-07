(function () {
    "use strict";

    function createCarousel(carouselElement) {
        let currentIndex = 0;

        function showSlide(index) {
            const slides = carouselElement.querySelectorAll('.carousel-item');
            if (index >= slides.length) currentIndex = 0;
            else if (index < 0) currentIndex = slides.length - 1;
            else currentIndex = index;

            slides.forEach((slide) => {
                slide.style.transform = `translateX(-${currentIndex * 100}%)`;
            });
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        showSlide(currentIndex);

        // Adding event listeners to carousel-control prev and next buttons
        const prevButton = carouselElement.querySelector('.carousel-control.prev');
        const nextButton = carouselElement.querySelector('.carousel-control.next');

        if (prevButton) {
            prevButton.addEventListener('click', prevSlide);
        }

        if (nextButton) {
            nextButton.addEventListener('click', nextSlide);
        }
    }

    function init() {
        const customCarouselComponents = document.querySelectorAll('.cmp-custom_carousel');
        if (!customCarouselComponents) return;

        customCarouselComponents.forEach((customCarousel) => {
            createCarousel(customCarousel);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        init();
    });
}());