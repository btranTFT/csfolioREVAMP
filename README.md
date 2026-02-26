# csfolioREVAMP

Personal developer portfolio for **Benjamin Tran** built with Create React App, plain CSS (no UI library), and a zinc-neutral dark/light design.

---

## Features

- **Dark/light theme toggle** persisted via `localStorage`, applied via `body.dark` class
- **Zinc-neutral design system** with no color accent; full CSS custom property token system in `theme.css`
- **Inter + JetBrains Mono** typography loaded via Google Fonts
- **Sticky nav** with font-mono links, live US clock, theme toggle, and mobile hamburger drawer
- **Scroll-spy** nav links highlight the active section via `IntersectionObserver`
- **FlipSentences** rotating subtitle in the Hero section with CSS fade/slide animation
- **Panel layout** each section uses a full-width screen-line rule above the heading
- **Collapsible project cards** accordion expand/collapse with chevron toggle; featured project opens by default
- **Brand icons** Amazon, AWS, and Google SVG icons on Experience and Certifications cards
- **Data-driven** all portfolio content lives in one file (`src/content/siteData.js`)
- **Accessible** semantic HTML, ARIA labels, keyboard focus styles, `prefers-reduced-motion` support
- **GitHub Pages ready** `homepage` set in `package.json`, hash anchor links only

---

## Run Locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Editing Content

All portfolio content lives in a single file:

```
src/content/siteData.js
```

| Field | Description |
|---|---|
| `name`, `tagline`, `about` | Hero name, tagline fallback, and bio paragraph |
| `flipSentences[]` | Array of rotating subtitles shown in Hero |
| `portraits` | Path to portrait image in `public/` |
| `resumeFile` | Path to PDF resume in `public/` |
| `email`, `phone`, `location` | Contact details |
| `social.github`, `social.linkedin` | Social links |
| `skills[]` | Grouped tech tag lists: `{ category, items[] }` |
| `experience[]` | Jobs: `company`, `icon`, `role`, `period`, `location`, `type`, `bullets[]`, `tags[]` |
| `education[]` | Degrees: `degree`, `school`, `period`, `location`, `note` |
| `projects[]` | Projects: `title`, `period`, `description`, `tags[]`, `github`, `live`, `featured` |
| `certifications[]` | Certs: `name`, `issuer`, `icon`, `file` or `url` |

### Brand icons

Set `icon` on an experience or certification entry to render a brand icon instead of the default:

| Value | Icon |
|---|---|
| `"amazon"` | Amazon orange smile arc |
| `"aws"` | AWS orange cloud |
| `"google"` | Google G (4-color) |

---

## Customising the Theme

Design tokens are in `src/styles/theme.css`. Light-mode defaults are on `:root`; dark overrides are on `body.dark`.

Key variables:

```css
--bg:             #ffffff;   /* page background */
--card:           #f4f4f5;   /* card / surface background */
--border:         #e4e4e7;   /* subtle borders */
--text:           #09090b;   /* primary text */
--text-secondary: #71717a;   /* muted text */
--nav-h:          60px;      /* nav bar height */
--max-w:          72rem;     /* content container max-width */
```

---

## Project Structure

```
src/
  content/
    siteData.js              - all portfolio content (edit this)
  styles/
    theme.css                - CSS custom property design tokens
    global.css               - reset, typography, panel/tag/button utilities
  components/
    Nav.js / Nav.css         - sticky nav, scroll-spy, clock, theme toggle
    FlipSentences.js / .css  - rotating subtitle animation
  sections/
    Hero.js / Hero.css       - circular avatar, FlipSentences, bio, CTA buttons
    Skills.js / Skills.css   - tech stack grouped by category
    Experience.js / .css     - company cards with bullets and tech tags
    Projects.js / .css       - collapsible accordion project cards
    Education.js / .css      - alternating two-column timeline
    Certifications.js / .css - 3-column responsive cert grid
    Contact.js / .css        - email + copy button + social links
  hooks/
    useTheme.js              - localStorage dark/light toggle
    useScrollSpy.js          - IntersectionObserver active section tracking
    useScrollReveal.js       - scroll-reveal utility
  App.js                     - root layout, section order
  index.js                   - entry point
public/
  index.html                 - SEO meta, OpenGraph, Twitter card
  portrait.png               - profile photo
  resume.pdf                 - resume download
```

---

## Build

```bash
npm run build
```

Output goes to `build/`. The `"homepage": "."` in `package.json` ensures assets use relative paths for GitHub Pages subdirectory hosting.

---

## Deploy to GitHub Pages

1. Install the helper:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy":    "gh-pages -d build"
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

All navigation links are `#id` hash anchors. No React Router, no `404.html` redirect needed.

---

## License

MIT