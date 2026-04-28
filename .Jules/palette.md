## 2025-05-22 - [Modal Accessibility]
**Learning:** Implementing a modal requires more than just showing/hiding it. Accessibility demands focus management (trap and restoration) and keyboard support (Escape key) to ensure a smooth experience for all users.
**Action:** Always include focus management and keyboard listeners when creating or enhancing modal/dialog components.
## 2025-05-22 - Inline Bento Disclosure & Data Migration
**Learning:** For a Bento-style grid, using inline disclosure (expansion) via CSS Grid transitions provides a superior UX to modals by maintaining the user's spatial context. Large-scale data migration (e.g., decades of archives) is best organized using year-based nested grids within these expanded tiles.
**Action:** Replaced modal-based popups with an '.expanded' grid state that spans the full row width (grid-column: 1 / -1) and integrated 15+ years of PDF archives into a thematic publishing dashboard.

## 2026-04-28 - Navigation Active State Pattern
**Learning:** Active navigation links must provide semantic feedback (aria-current="page") and visual feedback. To ensure WCAG AA compliance (4.5:1 contrast), active text should use font-weight: 700 and high-contrast colors like --primary-color rather than lower-contrast decorative colors. A 2px decorative underline using var(--secondary-color) is the standard highlight style.
**Action:** Added aria-current="page" to all active links and implemented standard visual styling for the .nav-link.active class across the site.
