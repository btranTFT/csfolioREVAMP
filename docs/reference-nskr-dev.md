# Reference: reddynsk/nskr.dev — Design System Extraction

> Analysis performed February 2026 against commit `main`.  
> Source: https://github.com/reddynsk/nskr.dev | Live: https://nskr.dev

---

## 1. Tech & Architecture

| Concern | Reference (nskr.dev) | CRA Mirror |
|---|---|---|
| Framework | Next.js 15 (App Router) | Create React App 5 |
| Styling | Tailwind CSS v4 + shadcn/ui | Plain CSS custom properties |
| Animations | motion/react (Framer Motion v11) | CSS keyframes + IntersectionObserver |
| Fonts | Geist Sans + Geist Mono | Inter + JetBrains Mono |
| Component library | shadcn/ui (Radix primitives) | Custom components |
| Data | TypeScript data files under `src/features/profile/data/` | `src/content/siteData.js` |
| Navigation | Next.js `<Link>`, hash anchors | Hash anchors + smooth scroll |
| Build tool | Turbopack (dev), Next.js (prod) | Webpack via react-scripts |

**Section composition** (reference `src/app/(app)/(root)/page.tsx`):
```
ProfileCover          ← full-width name banner + large avatar + theme toggle
max-w-6xl container:
  ProfileHero         ← circular avatar, flip sentences, bio pills, CTA buttons, socials
  <Separator />
  TechStack           ← scrollable tech tags by category
  <Separator />
  Blog                ← recent posts (skip in CRA)
  <Separator />
  Experiences         ← Panel: company + positions + skill tags
  <Separator />
  Projects            ← Panel: collapsible accordion cards
  <Separator />
  Education           ← Panel: alternating two-column timeline
  <Separator />
  Certifications      ← Panel: 3-col card grid
```

**Navigation items** (compact):  
About → `/#about` | Skills → `/#skills` | Experience → `/#experience` | Projects → `/#projects` | Contact — sticky glassmorphism header

**Special effects:**
- Backdrop-blur nav (`backdrop-blur-sm` via Tailwind)
- `screen-line-before` / `screen-line-after` utilities: horizontal rule extending `200vw` with `left: -100vw` — spans full viewport edge-to-edge inside a constrained container
- Theme toggle (light/dark) with preference persistence in localStorage
- Live clock displayed in nav header
- FlipSentences: animated text that fades/rotates through an array of sentences every ~3 s
- Project cards: CSS collapsible (Radix `Collapsible`) — `data-[state=open]` driven `collapsible-fade-down` animation, chevron icon rotates

---

## 2. Design System

### 2.1 Color Tokens

All values are `oklch(…)` in the original; hex equivalents listed.

| Token | Light | Dark |
|---|---|---|
| `--background` | `#ffffff` | `#09090b` zinc-950 |
| `--foreground` | `#09090b` | `#fafafa` zinc-50 |
| `--card` | `#ffffff` | `#18181b` zinc-900 |
| `--muted` | `#f4f4f5` zinc-100 | `#27272a` zinc-800 |
| `--muted-foreground` | `#71717a` zinc-500 | `#a1a1aa` zinc-400 |
| `--border` | `#e4e4e7` zinc-200 | `#27272a` zinc-800 |
| `--edge` | `color-mix(border 64%, bg)` ≈`#ececed` | `color-mix(border 64%, bg)` ≈`#1b1b1e` |
| `--primary` | `#09090b` zinc-950 | `#3f3f46` zinc-700 |
| `--primary-foreground` | `#fafafa` | `#fafafa` |
| `--secondary` | `#f4f4f5` zinc-100 | `#27272a` zinc-800 |
| `--accent` | `#f4f4f5` zinc-100 | `#27272a` zinc-800 |
| `--ring` | `#a1a1aa` zinc-400 | `#71717a` zinc-500 |
| `--success` | `#22c55e` green-500 | same |
| `--info` | `#3b82f6` blue-500 | `#60a5fa` blue-400 |
| `--destructive` | `#dc2626` red-600 | `#ef4444` red-500 |
| `--link` | `#1d4ed8` blue-700 | `#3b82f6` blue-500 |

> **No branded "orange" accent** — nskr.dev uses a fully neutral zinc-based palette.  
> The portfolio's accent is the foreground color itself (underlines + active states).

### 2.2 Typography

| Role | Value |
|---|---|
| Sans-serif family | `'Geist', system-ui, -apple-system, sans-serif` |
| Mono family | `'Geist Mono', ui-monospace, 'Fira Code', monospace` |
| Nav links | `font-mono`, `text-xs` (12px) / `sm:text-sm` (14px) |
| Section title | `text-2xl` (24px), `font-bold` |
| Count superscript | `font-mono`, `text-sm` (14px), `text-muted-foreground` |
| Project title | `text-base` (16px), `font-semibold`, `line-clamp-2` |
| Period/date | `font-mono`, `text-xs` |
| Body text | `text-lg`–`text-xl`, `leading-relaxed`, `text-muted-foreground` |
| Button | `text-sm` (14px), `font-medium` |

### 2.3 Spacing

| Token | px |
|---|---|
| Key container | `max-w-6xl` = 1152 px |
| Container padding | `px-4 sm:px-6 lg:px-8` |
| Section padding-y | `py-12` ≈ 3 rem between Separator and first content |
| Panel header mb | `mb-2` before title content |
| Panel content gap | `space-y-4` inside PanelContent |
| Social icon size | `size-5` = 20px |
| Avatar (hero) | `size-32~size-44` = 128–176px |
| Scroll margin top | `scroll-mt-22` = `5.5rem` (88 px) |
| Nav height | ~60 px |

### 2.4 Border Radius

| Component | Radius |
|---|---|
| Avatar | `rounded-full` |
| Project card | `rounded-lg` = 8px |
| Tech pill/tag | `rounded-md` = 6px |
| Button (primary) | `rounded-full` |
| Button (secondary) | `rounded-full` |
| Project icon box | `rounded-lg` = 8px |

### 2.5 Shadows & Glow

| State | Value |
|---|---|
| Card default | none |
| Card hover | `shadow-lg` = `0 8px 32px rgba(0,0,0,0.15)` light / `0 8px 32px rgba(0,0,0,0.5)` dark |
| Separator | `popover-shadow: 0 6px 24px rgba(0,0,0,0.25)` |
| Avatar | `shadow-xl` |

---

## 3. Component Patterns

### 3.1 Panel (shared section wrapper)

```jsx
<section id="experience" className="panel">
  <div className="panel-header screen-line-before"> {/* full-width top edge rule */}
    <h2 className="panel-title">
      Experience <sup className="panel-count">(N)</sup>
    </h2>
  </div>
  <div className="panel-content">
    {/* section content */}
  </div>
</section>
```

`screen-line-before` = pseudo-element `::before` at `top:0, left:-100vw, width:200vw, height:1px, bg:--edge`.

### 3.2 Nav Item (active underline)

```css
.nav-item {
  position: relative;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--muted-fg);
  transition: color 300ms;
}
.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  height: 2px; width: 0;
  background: var(--text);
  transition: width 300ms ease-out;
}
.nav-item:hover, .nav-item.active {
  color: var(--text);
}
.nav-item:hover::after, .nav-item.active::after {
  width: 100%;
}
```

### 3.3 Tech Tag / Pill

```css
.tech-tag {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 2px 8px;
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--muted-bg) 50%, transparent);
  border-radius: 6px; /* rounded-md */
  font-size: 0.75rem; /* text-xs */
  font-weight: 500;
  color: var(--text);
}
```

Optionally color-branded using inline style for specific techs.

### 3.4 Project Card (Collapsible)

```
┌─────────────────────────────────────────────────────┐
│ [icon box] Title                      [chevron ↕]   │
│            MM.YYYY — MM.YYYY                        │
│                                                     │
│ [tag] [tag] [tag] [tag] +N                         │
├─────────────────────────────────────────────────────┤ ← border-t (collapsed)
│ Markdown description                                │
│ Remaining skill tags                                │
│ View Project ↗                                      │
└─────────────────────────────────────────────────────┘
```

Card classes: `border border-border/50 bg-card/50 rounded-lg` → on hover `border-border bg-card shadow-lg`.

### 3.5 Education — Alternating Timeline

```
Center vertical line: absolute, left:50%, height:100%, 1px gradient border → transparent
Alternating: even items appear left, odd appear right.
```

### 3.6 FlipSentences

Interval ~3 s; CSS fade + small translateY transition per sentence. In the reference: `motion/react`'s `AnimatePresence` with `initial false`. CRA mirror uses `useState` + CSS class animation triggered on index change.

---

## 4. Interaction Inventory

| Behavior | Reference implementation | CRA mirror |
|---|---|---|
| Smooth scroll | `html { scroll-behavior: smooth }` | Same + hash anchor |
| Anchor offset | `[id] { scroll-margin-top: 5.5rem }` | Same token |
| Nav active section | IntersectionObserver on sections | `useScrollSpy` hook |
| Nav blur header | `backdrop-blur-sm` + bg `rgba(bg, 0.8)` | CSS: `backdrop-filter: blur(8px)` + semi-transparent bg |
| Project collapse | Radix Collapsible, `data-[state=open]` keyframes | CSS `max-height` transition + `details`/React state |
| FlipSentences | `motion/react` AnimatePresence 3 s interval | `setInterval` + CSS fade keyframe |
| Theme toggle | `next-themes` (class strategy) | `localStorage` + `document.body.classList` |
| Live clock | Client component: `setInterval`, HH:MM:SS | Same |
| Scroll reveal | Not present on main sections (no staggered reveal) | Keep light IO reveal for initial load |
| Hover: card | `backdrop-blur-sm` + shadow elevation | CSS `transition: border-color, box-shadow` |
| Hover: nav link | underline grows `0 → 100%` width | CSS `::after width` transition |
| Hover: social link | `text-muted → text-foreground` | Same |

---

## 5. Responsive Breakpoints

| Breakpoint | Action |
|---|---|
| `sm` ≥ 640px | Hero flex becomes row; avatar grows |
| `md` ≥ 768px | Education shows center vertical line + 2-col layout |
| `lg` ≥ 1024px | Certifications 3-col; project grid 3-col |
| `max-w-6xl` | Content container max width 1152px |

---

## 6. GitHub Pages Compatibility

- All routes single-page (no `/blog`, `/tech-stack`, `/projects` sub-pages)
- `package.json → "homepage": "https://btranTFT.github.io/csfolioREVAMP"`  
- Hash anchors (`/#skills`, `/#experience`) work on deep-link + refresh
- No server-side rendering, no API routes

---

## 7. Checklist (for Pass A / Pass B verification)

### Pass A — Visual Fidelity
- [ ] Background `#09090b` in dark mode, `#ffffff` in light mode
- [ ] Cards `#18181b` (dark) / `#ffffff` (light) with `#27272a` border (dark)
- [ ] Font family Inter (sans) + JetBrains Mono on nav, period, mono text
- [ ] Nav: font-mono, muted text → foreground on hover, underline `0→100%`
- [ ] Hero: circular avatar + green online dot, name, FlipSentences, bio, round buttons
- [ ] Skills section: category label tabs + tech pills
- [ ] Experience: Panel pattern + company/role/period/bullets/tags
- [ ] Projects: collapsible cards, first-4 skills + "+N", Markdown description expanded
- [ ] Education: alternating two-column timeline with center line
- [ ] Certifications: 3-column grid cards
- [ ] `screen-line-before` full-width separator above each panel header
- [ ] Scroll-margin-top `5.5rem` on `[id]` elements

### Pass B — Interaction Fidelity
- [ ] Theme toggle persists in localStorage, respects `prefers-color-scheme`
- [ ] Live clock in nav (`HH:MM:SS`) updates every second
- [ ] Nav active section updates on scroll (IntersectionObserver scroll-spy)
- [ ] Nav backdrop blur visible on scroll-down
- [ ] Project cards collapse/expand with smooth animation + chevron rotation
- [ ] FlipSentences rotates every ~3 s with fade transition
- [ ] Smooth scroll on anchor clicks
- [ ] `prefers-reduced-motion: reduce` disables all transitions/animations
- [ ] Hash anchor works from fresh page load (`/#experience`)
