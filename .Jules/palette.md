## 2025-05-22 - [Modal Accessibility]
**Learning:** Implementing a modal requires more than just showing/hiding it. Accessibility demands focus management (trap and restoration) and keyboard support (Escape key) to ensure a smooth experience for all users.
**Action:** Always include focus management and keyboard listeners when creating or enhancing modal/dialog components.
## 2025-05-22 - Inline Bento Disclosure & Data Migration
**Learning:** For a Bento-style grid, using inline disclosure (expansion) via CSS Grid transitions provides a superior UX to modals by maintaining the user's spatial context. Large-scale data migration (e.g., decades of archives) is best organized using year-based nested grids within these expanded tiles.
**Action:** Replaced modal-based popups with an '.expanded' grid state that spans the full row width (grid-column: 1 / -1) and integrated 15+ years of PDF archives into a thematic publishing dashboard.

## 2026-05-03 - [Robust Media Interaction & A11y]
**Learning:** Interactive components with multiple state transitions (like audio players) benefit from centralized UI state management and native event listeners (`onplay`, `onpause`, `onerror`) to ensure UI consistency. Additionally, browser-resolved `audio.src` properties are percent-encoded, requiring `encodeURI()` for reliable comparison against raw data attributes containing spaces or Japanese characters.
**Action:** Refactored audio player to use `updateAudioUI` helper, added bilingual ARIA labels for state-aware feedback, and implemented `encodeURI` for robust track identification.
