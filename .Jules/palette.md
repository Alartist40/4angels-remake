## 2025-05-22 - [Modal Accessibility]
**Learning:** Implementing a modal requires more than just showing/hiding it. Accessibility demands focus management (trap and restoration) and keyboard support (Escape key) to ensure a smooth experience for all users.
**Action:** Always include focus management and keyboard listeners when creating or enhancing modal/dialog components.
## 2025-05-22 - Inline Bento Disclosure & Data Migration
**Learning:** For a Bento-style grid, using inline disclosure (expansion) via CSS Grid transitions provides a superior UX to modals by maintaining the user's spatial context. Large-scale data migration (e.g., decades of archives) is best organized using year-based nested grids within these expanded tiles.
**Action:** Replaced modal-based popups with an '.expanded' grid state that spans the full row width (grid-column: 1 / -1) and integrated 15+ years of PDF archives into a thematic publishing dashboard.
## 2026-04-30 - [Centralized UI State & Robust Media Accessibility]
**Learning:** For interactive components with multiple state transitions like audio players, centralized UI update functions (e.g., `updateAudioUI`) ensure that visual icons, ARIA labels, and CSS classes remain synchronized across all events (click, ended, error). This prevents the UI from getting "stuck" in a playing state if a media load fails.
**Action:** Implemented `updateAudioUI` and an `onerror` handler for the global audio player to ensure consistent accessibility and robustness.
