document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        const toggleMenu = (forceState) => {
            const isExpanded = forceState !== undefined ? !forceState : menuToggle.getAttribute('aria-expanded') === 'true';
            const newState = !isExpanded;

            menuToggle.setAttribute('aria-expanded', newState);
            menuToggle.setAttribute('aria-label', newState ? 'メニューを閉じる / Close Menu' : 'メニューを開く / Open Menu');
            navLinks.classList.toggle('active', newState);
            menuToggle.classList.toggle('open', newState);

            // Animate toggle spans
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('open', newState));
        };

        menuToggle.addEventListener('click', () => toggleMenu());

        // Escape key to close menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                toggleMenu(false);
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
