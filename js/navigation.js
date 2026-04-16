document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        const toggleMenu = (expand) => {
            const isExpanded = expand !== undefined ? !expand : menuToggle.getAttribute('aria-expanded') === 'true';
            const newState = !isExpanded;

            menuToggle.setAttribute('aria-expanded', newState);
            navLinks.classList.toggle('active', newState);

            // Bilingual ARIA label update
            const newLabel = newState ? 'メニューを閉じる / Close Menu' : 'メニューを開く / Open Menu';
            menuToggle.setAttribute('aria-label', newLabel);

            // Animate toggle
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('open', newState));
        };

        menuToggle.addEventListener('click', () => toggleMenu());

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
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
