## 2025-05-22 - [Modal Accessibility]
**Learning:** Implementing a modal requires more than just showing/hiding it. Accessibility demands focus management (trap and restoration) and keyboard support (Escape key) to ensure a smooth experience for all users.
**Action:** Always include focus management and keyboard listeners when creating or enhancing modal/dialog components.
## 2025-05-22 - Inline Bento Disclosure & Data Migration
**Learning:** For a Bento-style grid, using inline disclosure (expansion) via CSS Grid transitions provides a superior UX to modals by maintaining the user's spatial context. Large-scale data migration (e.g., decades of archives) is best organized using year-based nested grids within these expanded tiles.
**Action:** Replaced modal-based popups with an '.expanded' grid state that spans the full row width (grid-column: 1 / -1) and integrated 15+ years of PDF archives into a thematic publishing dashboard.
## 2025-05-22 - [Navigation Contrast & Semantic State]
**Learning:** Adding `aria-current="page"` is essential for screen reader orientation. When styling active states, maintain WCAG AA contrast (4.5:1) by using high-contrast primary colors for text rather than lower-contrast accent colors like gold. A secondary-colored underline can provide visual distinction without sacrificing readability.
**Action:** Implemented bilingual `aria-current="page"` and a high-contrast active state (navy text + blue underline) across all navigation menus.
