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

    const tiles = document.querySelectorAll('.bento-tile, .bento-card, .theme-card');
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

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Enhanced Audio Logic
    const mainAudio = document.getElementById('main-audio');
    const playerBar = document.getElementById('global-player');
    const nowPlayingTitle = document.querySelector('.now-playing-title');

    document.addEventListener('click', (e) => {
        const playBtn = e.target.closest('.play-trigger');
        if (!playBtn) return;

        const audioSrc = playBtn.getAttribute('data-src');
        const title = playBtn.getAttribute('data-title');

        if (!mainAudio.src || mainAudio.src !== new URL(audioSrc, window.location.href).href) {
            mainAudio.src = audioSrc;
            if (nowPlayingTitle) nowPlayingTitle.textContent = title;
            if (playerBar) playerBar.style.display = 'flex';
            // Reset all other play buttons
            document.querySelectorAll('.play-trigger').forEach(b => b.textContent = '▶');
        }

        if (mainAudio.paused) {
            mainAudio.play();
            playBtn.textContent = '⏸';
        } else {
            mainAudio.pause();
            playBtn.textContent = '▶';
        }
    });

    // Event Delegation for Content Expanders
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.expand-btn, .read-more, .btn-expand');
        if (!btn) return;

        const targetId = btn.getAttribute('data-target') || btn.getAttribute('data-modal');
        if (!targetId) return;

        // If it's an inline expansion (audio lists)
        const targetElement = document.getElementById(targetId);
        if (targetElement && targetElement.classList.contains('audio-list-container')) {
            const isVisible = targetElement.style.display === 'block';

            // Close all other lists first for cleanliness
            document.querySelectorAll('.audio-list-container').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.btn-expand').forEach(b => b.textContent = b.hasAttribute('data-original-text') ? b.getAttribute('data-original-text') : '一覧を見る ↓');

            if (!isVisible) {
                targetElement.style.display = 'block';
                if (!btn.hasAttribute('data-original-text')) btn.setAttribute('data-original-text', btn.textContent);
                btn.textContent = '閉じる ↑';
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            return;
        }

        // Otherwise use Modal
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
