# Rise Engine Website

Production landing page built with React + Vite and deployed to FTP via GitHub Actions.

## Tech Stack

- React 18
- Vite 6
- TypeScript/TSX
- TailwindCSS 4

## Project Structure

- `src/main.tsx` - app bootstrap
- `src/app/App.tsx` - app entry component
- `src/imports/Desktop7.tsx` - primary page layout and sections
- `src/assets/` - logo assets and mobile flow SVG
- `src/styles/` - global styles (fonts, tailwind, theme)
- `.github/workflows/deploy.yml` - CI/CD build + FTP deploy pipeline

## Local Development

### Requirements

- Node.js 20+
- npm 10+ (or compatible with `package-lock.json`)

### Install

```bash
npm ci
```

### Run Dev Server

```bash
npm run dev
```

Default URL is usually `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Output is generated to `dist/`.

## Deployment

The repository deploys automatically on push to `main` via GitHub Actions.

Workflow:

1. Install dependencies
2. Build (`npm run build`)
3. Validate `dist/index.html`
4. Upload `dist/` to FTP server

Required GitHub Secrets:

- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PASSWORD`

Important:

- In `.github/workflows/deploy.yml`, set `server-dir` to your actual web root.
- `dangerous-clean-slate: true` clears the target directory before uploading.

## Handover Notes

- Main page implementation is centralized in `src/imports/Desktop7.tsx`.
- Mobile and desktop hero flows are handled separately:
  - Mobile: `src/assets/mobile-flow.svg`
  - Desktop: inline SVG paths in `Desktop7.tsx`
- Tech stack logos and links are configured in:
  - `TECH_STACK_ITEMS`
  - `TECH_STACK_URLS`

## License / Attribution

See `ATTRIBUTIONS.md`.
  