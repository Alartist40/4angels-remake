## 2025-05-22 - [Modal Accessibility]
**Learning:** Implementing a modal requires more than just showing/hiding it. Accessibility demands focus management (trap and restoration) and keyboard support (Escape key) to ensure a smooth experience for all users.
**Action:** Always include focus management and keyboard listeners when creating or enhancing modal/dialog components.
## 2025-05-22 - Inline Bento Disclosure & Data Migration
**Learning:** For a Bento-style grid, using inline disclosure (expansion) via CSS Grid transitions provides a superior UX to modals by maintaining the user's spatial context. Large-scale data migration (e.g., decades of archives) is best organized using year-based nested grids within these expanded tiles.
**Action:** Replaced modal-based popups with an '.expanded' grid state that spans the full row width (grid-column: 1 / -1) and integrated 15+ years of PDF archives into a thematic publishing dashboard.

## 2025-05-23 - Semantic & Accessible Navigation States
**Learning:** Purely decorative active states (e.g., subtle color changes) fail WCAG AA non-color-only contrast requirements. Combining semantic ARIA markers (`aria-current="page"`) with multi-modal visual feedback (bolding + decorative underline) significantly improves spatial awareness for both screen reader and sighted users in a multi-page static site.
**Action:** Always implement `aria-current="page"` on navigation links and ensure active states use high-contrast text and a non-color-only visual indicator (like a 2px underline) to meet accessibility standards.
