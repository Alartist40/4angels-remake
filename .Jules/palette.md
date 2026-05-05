## 2025-05-22 - [Modal Accessibility]
**Learning:** Implementing a modal requires more than just showing/hiding it. Accessibility demands focus management (trap and restoration) and keyboard support (Escape key) to ensure a smooth experience for all users.
**Action:** Always include focus management and keyboard listeners when creating or enhancing modal/dialog components.
## 2025-05-22 - Inline Bento Disclosure & Data Migration
**Learning:** For a Bento-style grid, using inline disclosure (expansion) via CSS Grid transitions provides a superior UX to modals by maintaining the user's spatial context. Large-scale data migration (e.g., decades of archives) is best organized using year-based nested grids within these expanded tiles.
**Action:** Replaced modal-based popups with an '.expanded' grid state that spans the full row width (grid-column: 1 / -1) and integrated 15+ years of PDF archives into a thematic publishing dashboard.

## 2026-05-05 - Audio UI Robustness & Bilingual Accessibility
**Learning:** For media players, relying on imperative UI updates (e.g., updating icons inside the click handler) is fragile. Using native `onplay`, `onpause`, and `onerror` events ensures the UI always reflects the actual media state, even if the browser blocks autoplay or the source fails. Additionally, browser-resolved `audio.src` is percent-encoded, so raw source strings must be passed through `encodeURI()` for accurate state comparison.
**Action:** Implemented a centralized `updateAudioUI` function in `js/interactions.js` triggered by audio state events, and added bilingual ARIA labels ('再生 / Play' / '一時停止 / Pause') to the sermon player buttons.
