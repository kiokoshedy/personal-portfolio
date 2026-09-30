# Shadrack Kioko — Portfolio

Personal portfolio site for **Shadrack Kioko**, Senior Software Engineer.

- Live content (profile, experience, competencies, initiatives, education) lives in
  [`src/data/portfolio.js`](src/data/portfolio.js) — edit that one file to update the whole site.
- Sections: Hero → Experience → Core Competencies → Featured Initiatives → Education → Contact.

## Stack

- React 18 + Create React App
- `react-bootstrap` / Bootstrap 5 for layout, `react-bootstrap-icons` for iconography
- `animate.css` + `react-on-screen` for scroll-triggered reveals
- Express + Nodemailer contact service (`server.js`)

## Getting started

```bash
npm install
npm start          # site on http://localhost:3000
npm run server     # contact API on http://localhost:5000 (separate terminal)
```

## Contact form

The contact form posts to `REACT_APP_CONTACT_API` (defaults to `http://localhost:5000`).
The API needs credentials — copy `.env.example` to `.env` and fill in a Gmail **App Password**
(not your account password, and enable 2FA on the account first):

```bash
cp .env.example .env
```

`.env` is git-ignored; never commit real credentials. The API validates input, escapes HTML in
the outgoing email, and rate-limits to 5 submissions per IP per hour.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm start` | Dev server with hot reload |
| `npm run build` | Production bundle in `build/` |
| `npm test` | Jest + React Testing Library (`CI=true npm test` for one run) |
| `npm run lint` | ESLint over `src` and `server.js` |
| `npm run server` | Contact email API |

## Content edits

- Copy, links, phone number → `src/data/portfolio.js`
- Nav items → `navLinks` in the same file
- Colours, spacing, section styles → `src/App.css`
- Page title, meta description, Open Graph tags → `public/index.html`

## Deployment

`npm run build` produces a static `build/` folder — host it on Netlify, Vercel, GitHub Pages,
Azure Static Web Apps or any static host. Run `npm run server` on a small host (or serverless
function) only if you want the contact form to send email; the mailto/tel links work regardless.
