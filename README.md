# Elena Chiang: portfolio

Personal portfolio site for Elena Chiang, a junior software engineer in London with an MSc in Computer Science (conversion) from Queen Mary University of London. It presents LevelUp, a gamified productivity web app, alongside Elena's background and contact details.

## Stack

- Next.js 16 (App Router) with React 19
- TypeScript
- Tailwind CSS 4
- Deployed on Vercel

The page is statically prerendered. Two small client components handle the dark mode toggle and copying the email address; everything else renders on the server.

## Running locally

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other scripts:

- `npm run lint` runs ESLint
- `npm run build` creates a production build

## Project structure

```
src/
  app/            Root layout, home page, global styles, icon and Open Graph image
  components/     Header, footer, theme toggle and shared links
    sections/     Intro, LevelUp, About and Contact sections
  content/site.ts All copy and links shown on the site
  lib/            Shared class names and theme helpers
  assets/         Portrait and LevelUp screenshots
public/           CV (PDF)
```

Site copy lives in `src/content/site.ts`, so text changes don't need component edits.

## Notes

- **Theme:** an inline script in the root layout applies the saved or system theme before the first paint, which avoids a flash of the wrong theme.
- **Security headers:** `next.config.ts` sets `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` and a Content Security Policy that blocks framing. Script sources are not restricted yet, because a nonce-based policy would force dynamic rendering.
