# csfolioREVAMP

Personal developer portfolio for **Benjamin Tran**, built with Create React App and plain CSS (no UI library).

---

## ? Features

- **Dark-first design** with an orange accent, Inter + JetBrains Mono typography
- **Single-page layout** � Hero � About � Experience � Projects � Contact
- **Sticky nav** with active-section highlighting and mobile hamburger drawer
- **Scroll-reveal animations** via IntersectionObserver (respects `prefers-reduced-motion`)
- **Data-driven content** � edit one file to update all portfolio content
- **Accessible** � keyboard focus styles, skip-link, ARIA labels, semantic HTML
- **GitHub Pages ready** � `homepage: "."` in `package.json`

---

## ?? Run Locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## ?? Editing Content

All portfolio content lives in a single file:

```
src/content/siteData.js
```

Fields you can edit:

| Field | Description |
|---|---|
| `name`, `tagline`, `subTagline`, `about` | Hero & about text |
| `email`, `phone`, `location` | Contact info |
| `resumeFile` | Path to PDF resume in `public/` |
| `social.github`, `social.linkedin` | Social links |
| `skills[]` | Grouped tech tag lists |
| `experience[]` | Jobs: company, role, period, bullets, tags |
| `education[]` | Degrees: degree, school, period, note |
| `projects[]` | Projects: title, description, tags, github, live, image |
| `certifications[]` | Certs: name, issuer, file |

---

## ?? Customising the Theme

Design tokens (colours, spacing, radius, type scale) are in:

```
src/styles/theme.css
```

Key variables:

```css
--accent: #f77f00;   /* change to your preferred accent colour */
--bg:     #0c0c0e;   /* main background */
--card:   #18181e;   /* card background */
```

---

## ?? Build

```bash
npm run build
```

Output is in `build/`. The `"homepage": "."` in `package.json` ensures assets use relative paths, which is required for GitHub Pages subdirectory hosting.

---

## ?? Deploy to GitHub Pages

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

Because this is a **single-page app with only anchor hash links** (no React Router), there is no need for a `404.html` redirect hack � every link is an `#id` anchor and the browser never requests a new URL path.

---

## ?? Project Structure

```
src/
  content/
    siteData.js          ? all portfolio content (edit this)
  styles/
    theme.css            ? design tokens (CSS variables)
    global.css           ? reset + typography + base styles
  components/
    Nav.js / Nav.css     ? sticky navigation + mobile drawer
  sections/
    Hero.js / Hero.css
    About.js / About.css
    Experience.js / Experience.css
    Projects.js / Projects.css
    Contact.js / Contact.css
  hooks/
    useScrollReveal.js   ? IntersectionObserver scroll-reveal hook
  App.js                 ? root layout
  index.js               ? entry point
public/
  index.html             ? SEO meta, OpenGraph, Twitter card
```

---

## ?? License

MIT
