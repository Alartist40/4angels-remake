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

    // Inline Disclosure Logic (Expansion)
    function toggleDisclosure(tile) {
        const isExpanded = tile.classList.contains('expanded');
        const btn = tile.querySelector('.toggle-btn');

        // Toggle the expanded class
        tile.classList.toggle('expanded');

        // Update button text
        if (btn) {
            const originalText = btn.getAttribute('data-original-text') || '詳しく読む →';
            if (!btn.getAttribute('data-original-text')) {
                btn.setAttribute('data-original-text', btn.textContent);
            }
            btn.innerHTML = isExpanded ? originalText : '閉じる ×';
        }

        // If expanding, scroll into view
        if (!isExpanded) {
            setTimeout(() => {
                tile.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 400);
        }
    }

    // Global Audio Player
    let currentAudio = null;
    let currentBtn = null;

    function playAudio(url, btn) {
        if (currentAudio && currentAudio.src === url) {
            if (currentAudio.paused) {
                currentAudio.play();
                btn.innerHTML = 'pause';
                btn.classList.add('playing');
            } else {
                currentAudio.pause();
                btn.innerHTML = 'play_arrow';
                btn.classList.remove('playing');
            }
            return;
        }

        if (currentAudio) {
            currentAudio.pause();
            if (currentBtn) {
                currentBtn.innerHTML = 'play_arrow';
                currentBtn.classList.remove('playing');
            }
        }

        currentAudio = new Audio(url);
        currentBtn = btn;

        currentAudio.play();
        btn.innerHTML = 'pause';
        btn.classList.add('playing');

        currentAudio.onended = () => {
            btn.innerHTML = 'play_arrow';
            btn.classList.remove('playing');
        };
    }

    // Event Delegation
    document.addEventListener('click', (e) => {
        const target = e.target;

        // Toggle buttons (for inline expansion)
        if (target.classList.contains('toggle-btn') || target.closest('.toggle-btn')) {
            e.preventDefault();
            const btn = target.classList.contains('toggle-btn') ? target : target.closest('.toggle-btn');
            const tileId = btn.getAttribute('data-target');
            const tile = document.getElementById(tileId) || btn.closest('.bento-tile');
            if (tile) {
                toggleDisclosure(tile);
            }
        }

        // Audio buttons
        if (target.classList.contains('play-audio') || target.closest('.play-audio')) {
            const btn = target.classList.contains('play-audio') ? target : target.closest('.play-audio');
            const url = btn.getAttribute('data-audio');
            if (url) {
                e.preventDefault();
                playAudio(url, btn.querySelector('.material-icons') || btn);
            }
        }
    });

    // Keyboard support for interactive tiles
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const focused = document.activeElement;
            if (focused && focused.classList.contains('toggle-btn')) {
                e.preventDefault();
                focused.click();
            }
        }

        if (e.key === 'Escape') {
            const expandedTile = document.querySelector('.bento-tile.expanded');
            if (expandedTile) {
                toggleDisclosure(expandedTile);
            }
        }
    });
});
