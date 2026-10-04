# Jarett — personal site

A one-page, minimalist professional site built with [Next.js](https://nextjs.org) and Tailwind CSS.

## Editing content

Everything shown on the site comes from a single file:

```
src/content/profile.ts
```

Update the name, tagline, roles, degrees, publications, and links there. The
components render whatever is in that object, so no other files need to change.
The current values are placeholders.

To offer a downloadable CV, drop a `cv.pdf` into `public/` (the "Download CV"
link already points to `/cv.pdf`), or remove that entry from `links`.

The favicon is `src/app/icon.svg`. Change the letter if the initial changes.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deploying

The site is fully static and deploys unchanged to Vercel, Netlify, or any host
that supports Next.js.
