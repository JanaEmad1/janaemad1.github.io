# Jana · Websites and AI assistants for Kuwait and the Gulf

Portfolio site for freelancing on [Mostaql](https://mostaql.com), plus two live demo client sites.
Arabic-first (RTL) with an English version, built with [Astro](https://astro.build) as a static site and hosted free on GitHub Pages.

**Live:** https://janaemad1.github.io

| Page | Path |
| --- | --- |
| Portfolio (Arabic, default) | `/` |
| Portfolio (English) | `/en/` |
| Project details | `/projects/<id>/` and `/en/projects/<id>/` |
| Dental clinic demo (booking + AI assistant) | `/demos/clinic/` |
| Café demo (QR menu + WhatsApp order) | `/demos/cafe/` |

## Run it on your computer

Needs [Node.js](https://nodejs.org) 22.12 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:4321. Edits show up on save.

To check the production build before publishing:

```bash
npm run build
```

```bash
npm run preview
```

## Change the content (no code needed)

Everything a visitor reads lives in a few files. Every text has an Arabic (`ar`) and an English (`en`) version; the build stops with an error if one is missing, so a page can never go live half-translated.

| What | File |
| --- | --- |
| Your Mostaql link, name, GitHub link | `src/site.config.ts` |
| Hero, buttons, section titles, menu labels | `src/i18n/ui.ts` |
| Services cards | `src/content/home/services.json` |
| Packages | `src/content/home/packages.json` |
| "How we work" steps | `src/content/home/process.json` |
| FAQ | `src/content/home/faq.json` |
| Portfolio projects | `src/content/projects/*.json` (one file per project) |

**Order:** items appear in the order of their `id`, so name them `1-...`, `2-...`, `3-...`.

**Add a project:** copy `src/content/projects/finpilot.json`, rename it (the file name becomes the URL, e.g. `my-shop.json` → `/projects/my-shop/`), and edit the text. Use `liveUrl` for a site people can open and `repoUrl` for a GitHub repo.

**Your Mostaql link:** paste it into `mostaqlUrl` in `src/site.config.ts`. Every "contact" and "request a quote" button then points to Mostaql and says so. While it is empty, the buttons point to your GitHub profile with neutral wording.

### Demos

The demos are single pages with their content at the top of the file:

- `src/pages/demos/clinic/index.astro`: `services`, `doctors`, `reviews`, `slots`, and the assistant's `answers`
- `src/pages/demos/cafe/index.astro`: `menu` and `branches`. Each item's photo is `public/demos/cafe/<item id>.webp` (sources and licence in `public/demos/cafe/CREDITS.md`)

To reuse a demo for a real client, copy its folder, change the arrays and colours (the `--c-*` / `--k-*` variables at the top of its `<style>`), and remove `<DemoRibbon />`.

## Publish on GitHub Pages

1. Create a public repository on GitHub named exactly `janaemad1.github.io`.
2. Push this folder to its `main` branch:
   ```bash
   git init
   ```
   ```bash
   git add .
   ```
   ```bash
   git commit -m "Portfolio site"
   ```
   ```bash
   git branch -M main
   ```
   ```bash
   git remote add origin https://github.com/JanaEmad1/janaemad1.github.io.git
   ```
   ```bash
   git push -u origin main
   ```
3. On GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`. The first run takes about two minutes; the **Actions** tab shows progress.

## How it is built

- **Fast:** static HTML with almost no JavaScript (theme toggle, scroll reveal, the demo cart and chat). Fonts (Alexandria, Almarai) and photos are self-hosted, with no third-party requests, trackers or ads.
- **Secure:** no server, database or secrets. Astro writes a hashed Content-Security-Policy into every page, so the browser only runs this site's own scripts and loads its own files. The demo forms never send data anywhere.
- **Accessible:** right-to-left layout, skip links, keyboard focus styles, labelled forms with Arabic error messages, a reduced-motion mode, and a palette chosen for WCAG AA text contrast on the dark and light themes.
- **Search engines:** titles and descriptions per language, `hreflang` between Arabic and English, a sitemap, `robots.txt`, and structured data (`ProfessionalService`).
- **Maintenance:** Dependabot opens a pull request each month when Astro or the GitHub Actions have updates.

## Mostaql

`MOSTAQL-KIT.md` (kept out of git by `.gitignore`, because it holds private pricing notes) has the profile text, proposal templates and portfolio descriptions ready to paste into Mostaql.

---

## بالعربي باختصار

- **التشغيل:** `npm install` ثم `npm run dev` وافتح http://localhost:4321
- **تعديل النصوص:** كل النصوص في ملفات `src/content/` و `src/i18n/ui.ts`، ولكل نص نسخة عربية `ar` وإنجليزية `en`.
- **رابط مستقل:** غيّره في `src/site.config.ts` قبل النشر.
- **النشر:** ارفع المجلد على مستودع اسمه `janaemad1.github.io`، ومن **Settings → Pages** اختر **GitHub Actions**. أي تعديل ترفعه ينشر تلقائياً.
