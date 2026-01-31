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

    const tiles = document.querySelectorAll('.bento-tile, .bento-card');
    tiles.forEach((tile, index) => {
        tile.style.transitionDelay = `${index * 0.05}s`;
        tile.classList.add('pre-reveal');
        observer.observe(tile);
    });

    // Modal Logic
    const modal = document.getElementById('content-modal') || createModalElement();
    const modalBody = modal.querySelector('.modal-body');
    const modalClose = modal.querySelector('.modal-close');

    function createModalElement() {
        const div = document.createElement('div');
        div.id = 'content-modal';
        div.className = 'modal-overlay';
        div.innerHTML = `
            <div class="modal-container">
                <button class="modal-close" aria-label="Close Modal">&times;</button>
                <div class="modal-body"></div>
            </div>
        `;
        document.body.appendChild(div);
        return div;
    }

    function openModal(contentHtml) {
        modalBody.innerHTML = contentHtml;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Audio Logic
    const mainAudio = document.getElementById('main-audio');
    const playerBar = document.getElementById('global-player');
    const nowPlaying = document.querySelector('.now-playing');

    document.querySelectorAll('.audio-card').forEach(card => {
        const playBtn = card.querySelector('.play-btn');
        const audioSrc = card.getAttribute('data-src');
        const title = card.querySelector('h3').textContent;

        if (playBtn && audioSrc) {
            playBtn.addEventListener('click', () => {
                if (mainAudio.src !== audioSrc) {
                    mainAudio.src = audioSrc;
                    nowPlaying.textContent = `再生中: ${title}`;
                    playerBar.style.display = 'flex';
                }

                if (mainAudio.paused) {
                    mainAudio.play();
                    playBtn.textContent = '停止';
                } else {
                    mainAudio.pause();
                    playBtn.textContent = '再生する';
                }
            });
        }
    });

    // Event Delegation for Content Expanders
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.expand-btn, .read-more');
        if (!btn) return;

        const targetId = btn.getAttribute('data-target') || btn.getAttribute('data-modal');
        if (targetId) {
            const content = document.getElementById(targetId);
            if (content) {
                openModal(content.innerHTML);
            } else {
                // Handle study.html where modal content is already in its own div
                const targetModal = document.getElementById(targetId);
                if (targetModal && targetModal.classList.contains('modal')) {
                    const innerBody = targetModal.querySelector('.modal-body');
                    const innerTitle = targetModal.querySelector('h2');
                    openModal(`<h2>${innerTitle.innerHTML}</h2>${innerBody.innerHTML}`);
                }
            }
        }
    });
});
