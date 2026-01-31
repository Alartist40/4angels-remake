# Information Architecture & Design Blueprint

## 1. Information Topology (Sitemap)

The website is restructured into a multi-page Bento Grid architecture. Every page uses a grid system to categorize information, reducing cognitive load and making navigation "second nature."

- **Home (index.html)**: The "Navigation Hub"
  - **Hero Tile**: Latest News/Announcements (e.g., 2025 Year-end Prayer Week)
  - **Live Tile**: YouTube Live link with current schedule.
  - **Sermon Tile**: Shortcut to the latest Audio Sermon.
  - **Bible Study Tile**: Quick access to "Present Truth" studies.
  - **About Tile**: Brief "Welcome" message and link to church history.
  - **Contact Tile**: Quick contact info and location shortcut.

- **About Us (about.html)**: The "Spiritual Foundation"
  - **Intro Tile**: "Welcome to Shomaru Church"
  - **Principles Tile**: Link to Detailed "信仰の原則" page.
  - **Mission Tiles**: Separate bento blocks for "House of God," "Body of Christ," and "Mission."

- **Beliefs (beliefs.html)**:
  - **Full Text Archive**: Complete documentation of all 37 Fundamental Beliefs.
  - **Heritage Tile**: "Succession of the Church."
  - **Location Tile**: Integrated Google Map.

- **Sermon Audio (audio.html)**: The "Theme-based Archive"
  - **Theme Bento Tiles**:
    - [Theme A]: 2020 Okinawa Camp
    - [Theme B]: Time Table of Salvation
    - [Theme C]: Preparing for the Bridegroom
    - [Theme D]: Lectures
  - **Sub-divisions**: Clicking a tile reveals a refined grid of specific audio tracks with an inline player.

- **Bible Study (study.html)**:
  - **Present Truth Tile** (Grouped Study 1, 2, 3)
  - **Health Tile**
  - **Sabbath Tile**

- **Publishing (publishing.html)**:
  - **Eternal Truth Tile**
  - **Sabbath Bible Lesson Tile**

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

### Grid System
- **Macro**: 12-column CSS Grid.
- **Bento Logic**: Tiles occupy varying spans (2x2, 4x2, 2x4) based on content priority.
- **Responsiveness**: Stacks to a 1-column or 2-column grid on mobile.

### Micro-interactions
- **Hover**: Subtle scale (1.02) and soft box-shadow elevation.
- **Audio**: Smooth play/pause transitions using CSS transforms.
- **Transitions**: Native CSS fade-in for page loads.

---

## 3. Bilingual Navigation Strategy
- **Home**: ホーム / Home
- **About**: 教会紹介 / About
- **Publishing**: 出版物 / Publishing
- **Live**: 礼拝生放送 / Live
- **Audio**: 説教オーディオ / Sermons
- **Study**: 聖書を学ぶ / Bible Study
- **Contact**: お問い合わせ / Contact
