// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://janaemad1.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // Static host (GitHub Pages) can't send headers, so Astro writes a hashed CSP <meta> into every page.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        'upgrade-insecure-requests',
      ],
    },
  },
  // CSS is small, so inlining it removes the render-blocking stylesheet request.
  build: { inlineStylesheets: 'always' },
});
