document.addEventListener('DOMContentLoaded', () => {
    // Reveal tiles on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const tiles = document.querySelectorAll('.bento-tile');
    tiles.forEach((tile, index) => {
        tile.style.transitionDelay = `${index * 0.05}s`;
        tile.classList.add('pre-reveal');
        observer.observe(tile);
    });
});
