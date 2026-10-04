# Jarett Maycott — personal site

A minimalist, single-page professional site for Jarett Maycott, a public health
consultant and epidemiologist. Built with Next.js (App Router), TypeScript, and
Tailwind CSS.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the content

All copy lives in [`content/profile.ts`](content/profile.ts): name, title, bio,
contact links, experience, education, and areas of expertise. The entries there
are **placeholders** that demonstrate the layout. Replace them with real details
before publishing.

- To show a "Download CV" link, put a PDF in `public/` and set `cvUrl` in
  `content/profile.ts` to its path (for example `"/jarett-maycott-cv.pdf"`).
- To hide the availability line above the name, set `availability` to `""`.

Colors and fonts are defined in [`app/globals.css`](app/globals.css) and
[`app/layout.tsx`](app/layout.tsx). The site follows the visitor's light or
dark system preference.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy

The site is fully static. Deploying to [Vercel](https://vercel.com) needs no
configuration. For other static hosts, add `output: "export"` to
`next.config.ts` and run `npm run build`; the site is written to `out/`.
