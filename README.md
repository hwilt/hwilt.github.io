# hwilt.com

My personal website containing information about me and my future plans.

A static site — no build step, no dependencies. Deployed to Cloudflare Workers.

## Layout

```
public/            # everything served publicly (Cloudflare assets directory)
├── index.html     # home page
├── 404.html       # not-found page
├── _headers       # Cloudflare response headers
├── css/
│   ├── base.css   # design tokens, reset, shared components
│   ├── home.css   # home page only
│   └── error.css  # 404 page only
├── js/
│   └── nav.js     # sticky nav pill toggle
├── documents/     # resume PDF
└── favicon / icon / og-image files
wrangler.jsonc     # deploy config (not served)
```

Every page loads `base.css` first, then its own stylesheet. Anything used by
both pages belongs in `base.css`.

Only files under `public/` are published — config and README stay private.

## Local development

```sh
npx wrangler dev                          # serve with the Cloudflare runtime
python3 -m http.server -d public 8000     # or just serve the files
```

## Deploy

```sh
npx wrangler deploy
```
