# 4ANGELS Redesign

## Overview
A hyper-minimalist, UX-first redesign of the Shomaru Church (4angels.jp) website. This project reconstructs the church's digital presence as a "spatial environment" using a Bento Grid architecture, ensuring that spiritual resources, live broadcasts, and community information are intuitively accessible.

This redesign captures and preserves 100% of the original site's content, including hundreds of PDF downloads, extensive audio sermon archives, the complete 37 fundamental beliefs, and all major bible study articles, reimagining them through a modern, responsive interface.

## Language
ja-JP (Japanese) with Bilingual Navigation (English)

## Navigation Guide
### Primary Paths
- **Home**: The central hub featuring the latest announcements, YouTube Live links, and quick access to sermons.
- **Sermons (説教)**: A dedicated dashboard grouping audio recordings by theme (e.g., Prophecy, Salvation, Health).
- **Bible Study (聖書を学ぶ)**: Educational resources and studies on "Present Truth".
- **About (教会紹介)**: Information about the church's history, mission, and the building itself.

### User Flow Recommendations
1. **First-time visitors**: Start at the **About** page to understand the mission and heritage.
2. **Returning users**: Use the **Home** hero tile for the latest announcements or jump directly to **Sermons** for the newest audio.
3. **Mobile experience**: Navigation is accessible via the menu icon at the top right, with grid elements stacking vertically for readability.

## Technical Notes
- **Browser Support**: Optimized for modern evergreen browsers (Chrome, Firefox, Safari, Edge).
- **No-Dependency Stack**: Built with pure HTML5, CSS3, and ES6+ JavaScript. No build process or frameworks required.
- **Opening Locally**: Simply open `index.html` in any browser, or serve via a local server:
  ```bash
  python -m http.server 8000
  ```
