# LegalEase

A simple, frontend-only client-lawyer connection platform built with React + Vite.
College project — no backend, no database, no payments.

## Setup

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Pages

- `/` — Home
- `/search` — Find a Lawyer (search + filter)
- `/lawyer/:lawyerId` — Lawyer profile
- `/about` — About the platform

## Notes

- Lawyer and practice area data is hardcoded in `src/data/`.
- `react-router-dom` is used for page navigation between the routes above.
- All styling is plain CSS (no Tailwind), using CSS variables defined in `src/index.css` for the black & gold theme.
