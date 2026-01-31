# Information Architecture & Design Blueprint

## 1. Information Topology (Sitemap)

The website is structured into a multi-page Bento Grid architecture. Every page uses a grid system to categorize information, with an **Inline Disclosure** system that allows for deep exploration without losing spatial context.

- **Home (index.html)**: The "Navigation Hub"
  - **Hero Tile**: Latest News/Announcements with inline expansion.
  - **Live Tile**: YouTube Live link with current schedule.
  - **Sermon Tile**: Shortcut to the latest Audio Sermon.
  - **Bible Study Tile**: Quick access to "Present Truth" studies.
  - **About Tile**: Brief "Welcome" message and link to church history.
  - **Contact Tile**: Quick contact info and location shortcut.

- **About Us (about.html)**: The "Spiritual Foundation"
  - **Intro Tile**: "Welcome to Shomaru Church"
  - **Beliefs Tile**: Inline expansion revealing all **37 Principles of Faith** with full descriptions.
  - **Mission & Succession Tiles**: Detailed history and vision, expandable within the grid.
  - **Location Tile**: Integrated Google Map with direct contact details.

- **Sermon Audio (audio.html)**: The "Theme-based Archive"
  - **Theme Bento Tiles**: Grouped by event or series (e.g., Okinawa Camp, salvation prophecy).
  - **Sub-divisions**: Expanding a tile reveals a refined list of specific audio tracks with an integrated player.

- **Bible Study (study.html)**:
  - **Present Truth Tile** (Grouped Study 1, 2, 3)
  - **Health Tile**
  - **Sabbath Tile**

- **Publishing (publishing.html)**:
  - **Eternal Truth Archive**: Grid-based layout of years (2010–2026) with direct PDF links, integrated via inline expansion.
  - **Sabbath Bible Lesson Archive**: Full quarterly guide archive (2011–2026).

- **Contact (contact.html)**:
  - **Form Tile**: Minimalist inquiry form.
  - **Access Tile**: Detailed address and map.

---

## 2. Visual Scheme (Chroma Blueprint)

### Color Palette (Elevated Blues)
- **Primary**: `#1a3a5f` (Deep Navy - Authority and Trust)
- **Secondary**: `#3a7bd5` (Ocean Blue - Clarity and Spirit)
- **Accent**: `#f0f4f8` (Soft Ice - Background/Negative Space)
- **Text**: `#2d3436` (Charcoal - Readability)
- **Highlight**: `#ffffff` (Pure White - Cleanliness)

### Typography
- **UI/Nav**: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif`
- **Content**: `"Shippori Mincho", serif` (For a spiritual, traditional yet clean Japanese feel)

### Grid System & Disclosure
- **Macro**: 12-column CSS Grid.
- **Inline Disclosure**: Tiles use the `.expanded` class to span the full grid width (`1 / -1`) when details are requested, utilizing smooth `cubic-bezier` height transitions.
- **Responsiveness**: Stacks to a 1-column grid on mobile, ensuring readability on all devices.

---

## 3. Bilingual Navigation Strategy
- **Home**: ホーム / Home
- **About**: 教会紹介 / About
- **Publishing**: 出版物 / Publishing
- **Live**: 礼拝生放送 / Live
- **Audio**: 説教オーディオ / Sermons
- **Study**: 聖書を学ぶ / Bible Study
- **Contact**: お問い合わせ / Contact
