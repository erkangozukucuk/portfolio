# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install                # Install dependencies

npm run compile:scss       # Watch and compile SASS → CSS (development)
npm run build              # Production build: prefix + compress CSS
npm run prefix:css         # Add vendor prefixes (last 10 browser versions)
npm run compress:css       # Minify CSS
```

There are no tests and no linter configured.

## Architecture

Static multipage portfolio — no framework, no bundler, no TypeScript.

- `index.html` — homepage (hero, about, projects, contact sections)
- `project-1.html`, `project-2.html`, `project-3.html` — project case study pages
- `index.js` — vanilla JS for mobile hamburger menu toggle
- `css/style.css` — compiled output (do not edit directly)

### SASS structure (7-1 pattern)

```
sass/
  main.scss               # imports all partials
  abstracts/
    _variables.scss       # $themeClrPrimary, $commonBorderRadius, etc.
    _mixins.scss          # responsive breakpoint mixins (phone/tab-port/tab-land/big-desktop)
    _utilities.scss       # reusable utility classes (buttons, headings, containers)
  base/
    _base.scss            # global reset and element defaults
  components/
    _header.scss, _footer.scss, _skills.scss, _mouse-scroll.scss
  pages/
    _home.scss, _project-case-study.scss
```

All style changes go in the SASS source files — the CSS is regenerated on each build.

### Responsive breakpoints

Defined as mixins in `sass/abstracts/_mixins.scss`:
- `phone`: < 600px
- `tab-port`: < 900px
- `tab-land`: < 1200px
- `big-desktop`: ≥ 1800px

### Key customization points

- Theme color: `$themeClrPrimary` in `sass/abstracts/_variables.scss`
- Content: edit HTML files directly
- New project pages: copy one of the existing `project-*.html` files as a template

### Deployment

Netlify static hosting. Build command: `npm run build`, publish directory: `/`.
