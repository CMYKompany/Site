# CMYKompany — Chris Yates Portfolio

The source for [cmykompany.com](https://cmykompany.com), the portfolio of
**Christopher "Chris" Yates** — design leader specializing in AI experience
design and enterprise-scale, human-centered design strategy.

> Chris Yates solves design problems. · Everything is a design problem.

## Stack

Intentionally simple: hand-authored **static HTML / CSS / JS**, no framework and
no build step. Every page is readable as plain source and can be opened directly
in a browser. Hosted on **GitHub Pages**.

```
Site/
├── index.html            # Homepage (currently a holding page)
├── assets/
│   └── css/
│       └── styles.css    # Global styles
├── .nojekyll             # Serve files as-is (skip Jekyll processing)
└── README.md
```

## Local preview

No tooling required — open `index.html` in a browser, or run a static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Served via GitHub Pages from this repository. Once ready, the custom domain
`cmykompany.com` is pointed at Pages via a `CNAME` file and DNS records.

## Status

🚧 **In active development.** The current `index.html` is a temporary holding
page. The full portfolio is being built as a set of leadership case studies —
led by **LEDGER** (DHS AI policy chatbot, 250K users) — per the positioning
strategy in the project brief.

## Roadmap

- [ ] Confirm visual direction (iterating from the current Squarespace site)
- [ ] Homepage: hero, positioning, case-study index
- [ ] Case studies (3–4): LEDGER + Treasury CDS + CISA VOC / HR platform
- [ ] About / leadership manifesto
- [ ] Contact
- [ ] Accessibility pass (Section 508 / WCAG)
- [ ] Point `cmykompany.com` DNS at GitHub Pages
