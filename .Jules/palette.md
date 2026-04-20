## 2025-05-22 - [Modal Accessibility]
**Learning:** Implementing a modal requires more than just showing/hiding it. Accessibility demands focus management (trap and restoration) and keyboard support (Escape key) to ensure a smooth experience for all users.
**Action:** Always include focus management and keyboard listeners when creating or enhancing modal/dialog components.
## 2025-05-22 - Inline Bento Disclosure & Data Migration
**Learning:** For a Bento-style grid, using inline disclosure (expansion) via CSS Grid transitions provides a superior UX to modals by maintaining the user's spatial context. Large-scale data migration (e.g., decades of archives) is best organized using year-based nested grids within these expanded tiles.
**Action:** Replaced modal-based popups with an '.expanded' grid state that spans the full row width (grid-column: 1 / -1) and integrated 15+ years of PDF archives into a thematic publishing dashboard.

## 2025-05-23 - Active Navigation Visibility and Accessibility
**Learning:** Always provide both a semantic indicator (`aria-current="page"`) and a visual cue (e.g., color change or underline) for the active page in navigation. This ensures users, including those using assistive technologies, maintain spatial awareness within the site structure.
**Action:** Implemented `.active` classes with `aria-current="page"` across all main navigation links and added a corresponding CSS indicator using the project's secondary color and a smooth underline transition.
