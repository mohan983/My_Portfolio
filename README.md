# Portfolio (React + Vite) — Auth, Router, Theme, Forms

This project implements your assignment:
- Signup/Login with validation (demo auth via localStorage)
- Protected route → Portfolio after login
- Sections: Intro, Skills, Projects, Contact
- Light/Dark theme toggle (persisted)
- React Router v6, React 18, Vite
- Responsive CSS approximating the Figma mockup
- Ready for Vercel/Netlify/Render deployment

## Run
```bash
npm install
npm run dev
```

## Deploy
### Vercel
- Connect repo or `vercel` CLI
- Framework: Vite
- Build: `npm run build`
- Output: `dist`

### Netlify
- `npm run build`
- Publish directory: `dist`
- Ensure SPA redirects: see `public/_redirects`

### Render (Static)
- Build command: `npm run build`
- Publish directory: `dist`

## Customize
- Portfolio content: `src/pages/Portfolio.jsx`
- Skills/Projects: `src/data/sample.js`
- Colors/layout: `src/styles.css`
- Auth (replace with Firebase/Auth0/API): `src/context/AuthContext.jsx`
