# Shadrack Kioko — Portfolio

Personal portfolio site for **Shadrack Kioko**, Senior Software Engineer.

- Live content (profile, experience, competencies, initiatives, education) lives in
  [`src/data/portfolio.js`](src/data/portfolio.js) — edit that one file to update the whole site.
- Sections: Hero → Experience → Core Competencies → Featured Initiatives → Education → Certifications & References → Contact.
- Themes, CV view and SEO metadata are feature modules: `src/context/ThemeContext.js`, `src/components/ThemeToggle.js`,
  `src/components/Cv.js`, `public/index.html`, `public/robots.txt`, `public/sitemap.xml`.

## Stack

- React 18 + Create React App
- `react-bootstrap` / Bootstrap 5 for layout, `react-bootstrap-icons` for iconography
- `animate.css` + `react-on-screen` for scroll-triggered reveals
- Express + Nodemailer contact service (`server.js`)

## Getting started

```bash
npm install
npm run dev        # site on http://localhost:3000 (alias of npm start)
npm run server     # contact API on http://localhost:5000 (separate terminal)
```

`npm start` still works; `npm run dev` opens the browser automatically.

## Light / dark mode

- Dark is the default theme. The first visit honours `prefers-color-scheme` when the OS asks for light.
- The toggle lives in the navbar (and the footer on mobile); the choice is stored in
  `localStorage` under `sk-portfolio-theme`.
- Colours are CSS variables on `:root` in `src/App.css`, so a full restyle only needs that block.
- `public/index.html` applies the stored theme before React boots, so there is no light/dark flash.

## CV view and PDF download

- `/?view=cv` renders a print-optimised CV (A4 layout, print styles, `src/components/Cv.js`).
- The navbar/footer **CV** buttons open it in place, and the browser back button returns to the site.
- On load the app does a `HEAD` request for `public/cv/Shadrack-Kioko-CV.pdf`:
  - found → toolbar shows **Download PDF**;
  - missing → toolbar shows **Save as PDF**, which triggers the browser print dialog (choose
    *Save as PDF* to export the same layout).

To enable the direct download, drop the PDF at `public/cv/Shadrack-Kioko-CV.pdf`.

## SEO / sharing

- `public/index.html`: canonical URL, description, Open Graph + Twitter card (`og-image.png`), JSON-LD `Person` schema.
- `public/robots.txt` and `public/sitemap.xml` list the site and the CV view.
- `public/og-image.png` (1200×630), `public/favicon.png` and `public/apple-touch-icon.png` are generated brand assets.

## Contact form

The contact form posts to `REACT_APP_CONTACT_API` (defaults to `http://localhost:5000`).
The API needs credentials — copy `.env.example` to `.env` and fill in a Gmail **App Password**
(not your account password, and enable 2FA on the account first):

```bash
cp .env.example .env
```

`.env` is git-ignored; never commit real credentials. The API validates input, escapes HTML in
the outgoing email, and rate-limits to 5 submissions per IP per hour.

Without those credentials the API still starts but answers `503 Contact service is not configured`.
The form degrades gracefully so visitors are never stuck: any transport failure, unconfigured service
or 5xx opens a **prefilled mail draft** in the visitor's mail app (subject `Portfolio enquiry from …`,
body prefilled with name/email/phone/message) with an on-screen note explaining what happened and the
plain email address as a last resort. Visitor-fixable problems — `400` validation and `429` rate
limits — stay inline and do not open a draft.

Rate limiting: `5` submissions per IP per hour (`CONTACT_RATE_LIMIT`), counted in memory, so a restart
clears it and counters reset hourly. The limit is applied **after** the configuration check, so a
local/unconfigured service never consumes quota. Gmail auth failures are logged server-side as status
codes only — credentials are never printed.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm start` | Dev server with hot reload |
| `npm run dev` | Same as `npm start`, opens a browser window |
| `npm run build` | Production bundle in `build/` |
| `npm test` | Jest + React Testing Library (`CI=true npm test` for one run) |
| `npm run lint` | ESLint over `src` and `server.js` |
| `npm run server` | Contact email API |
| `npm run dev:server` | Same as `npm run server` |

## Content edits

- Copy, links, phone number → `src/data/portfolio.js`
- Nav items → `navLinks` in the same file
- Competency proficiency levels, certifications, references → `src/data/portfolio.js`
- Colours (light + dark variables), spacing, section styles → `src/App.css`
- Page title, meta description, Open Graph tags → `public/index.html`

## Deployment

`npm run build` produces a static `build/` folder — host it on Netlify, Vercel, GitHub Pages,
Azure Static Web Apps or any static host. Run `npm run server` on a small host (or serverless
function) only if you want the contact form to send email; the mailto/tel links work regardless.
