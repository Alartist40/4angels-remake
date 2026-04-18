document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            const nextExpanded = !isExpanded;

            menuToggle.setAttribute('aria-expanded', nextExpanded);
            menuToggle.setAttribute('aria-label', nextExpanded ? 'メニューを閉じる / Close Menu' : 'メニューを開く / Open Menu');
            navLinks.classList.toggle('active');

            // Animate toggle
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('open'));
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
