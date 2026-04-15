## 2025-05-22 - [Modal Accessibility]
**Learning:** Implementing a modal requires more than just showing/hiding it. Accessibility demands focus management (trap and restoration) and keyboard support (Escape key) to ensure a smooth experience for all users.
**Action:** Always include focus management and keyboard listeners when creating or enhancing modal/dialog components.
## 2025-05-22 - Inline Bento Disclosure & Data Migration
**Learning:** For a Bento-style grid, using inline disclosure (expansion) via CSS Grid transitions provides a superior UX to modals by maintaining the user's spatial context. Large-scale data migration (e.g., decades of archives) is best organized using year-based nested grids within these expanded tiles.
**Action:** Replaced modal-based popups with an '.expanded' grid state that spans the full row width (grid-column: 1 / -1) and integrated 15+ years of PDF archives into a thematic publishing dashboard.
## 2025-05-23 - [Mobile Menu Accessibility & Animation]
**Learning:** A truly accessible mobile menu requires a trio of enhancements: bilingual ARIA labels for international context, keyboard support (Escape key) for power users/accessibility, and visual state feedback (hamburger-to-X) to confirm the interaction.
**Action:** Implemented a unified 'toggleMenu' logic in navigation.js that synchronizes ARIA states, bilingual labels, and CSS animation classes.
