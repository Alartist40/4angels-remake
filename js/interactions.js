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

    // Modal Logic
    const modal = document.getElementById('content-modal');
    const modalBody = modal?.querySelector('.modal-body');
    const modalClose = modal?.querySelector('.modal-close');

    function openModal(contentHtml) {
        if (!modal || !modalBody) return;
        modalBody.innerHTML = contentHtml;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Stop any playing audio in modal if necessary
        const modalAudio = modalBody.querySelector('audio');
        if (modalAudio) modalAudio.pause();
    }

    modalClose?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

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

    // Event Delegation for Buttons
    document.addEventListener('click', (e) => {
        const target = e.target;

        // Audio buttons
        if (target.classList.contains('play-audio') || target.closest('.play-audio')) {
            const btn = target.classList.contains('play-audio') ? target : target.closest('.play-audio');
            const url = btn.getAttribute('data-audio');
            if (url) {
                e.preventDefault();
                playAudio(url, btn.querySelector('.material-icons') || btn);
            }
        }

        // Read more / Expand buttons
        if (target.classList.contains('expand-btn') || target.closest('.expand-btn')) {
            e.preventDefault();
            const btn = target.classList.contains('expand-btn') ? target : target.closest('.expand-btn');
            const targetId = btn.getAttribute('data-target');
            const content = document.getElementById(targetId);
            if (content) {
                openModal(content.innerHTML);
            }
        }
    });
});
