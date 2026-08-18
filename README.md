# CMYKompany — Chris Yates Portfolio

The source for [cmykompany.com](https://cmykompany.com), the portfolio of
**Christopher "Chris" Yates** — design leader specializing in AI experience
design and enterprise-scale, human-centered design strategy.

> Chris Yates solves design problems. · Everything is a design problem.

## Stack

Intentionally simple: hand-authored **static HTML / CSS / JS**, no framework and
no build step. Every page is readable as plain source and opens directly in a
browser. Type is **LTC Caslon Pro + Lato** (Adobe Fonts). Hosted on **GitHub
Pages** at the custom domain **cmykompany.com**.

```
Site/
├── index.html                    # Homepage — hero, work index, leadership, craft teaser
├── craft.html                    # Craft & range — design-story index + print work
├── stories/                      # Case studies & design stories
│   ├── ledger.html               #   LEDGER — flagship AI experience case study
│   ├── treasury-cds.html         #   Treasury CDS — design leadership / org design
│   ├── cisa-voc.html             #   CISA Voice-of-Customer
│   ├── single-pane.html          #   Enterprise "single pane of glass"
│   ├── agency-strategic-plan.html
│   ├── guide-to-the-iss.html
│   └── mentor-in-a-box.html
├── assets/
│   ├── css/styles.css            # Global styles (CMYK print-production system)
│   ├── js/main.js                # Progressive-enhancement reveal-on-scroll
│   ├── img/                      # Case-study imagery
│   └── favicon.png               # Site icon
├── docs/dns-records.md           # DNS reference (not published to the site)
├── CNAME                         # Custom domain (cmykompany.com)
├── .nojekyll                     # Serve files as-is
└── .github/workflows/deploy.yml  # Build & deploy to GitHub Pages
```

## Local preview

No tooling required — open `index.html`, or run a static server:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deployment

Live at **[cmykompany.com](https://cmykompany.com)**. A GitHub Actions workflow
(`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push
to **`main`**. The custom domain is set via the `CNAME` file (DNS hosted at
Fastmail), and HTTPS is enforced.

## Accessibility

Targets **WCAG 2.1 AA / Section 508**. Every change is checked with an axe-core
audit (all pages, light + dark themes) plus manual checks for heading structure,
focus visibility, and 320 px reflow.

## Status & roadmap

Live and in active content development. The design system, deployment, domain,
and the core leadership case studies are in place; remaining work is content
passes, real visuals, and the About page.

- [x] Visual direction & design system
- [x] Homepage: hero, positioning, work index
- [x] Leadership case studies: LEDGER, Treasury CDS, CISA VOC, single-pane
- [x] Craft & range (NASA / Treasury / K–12 + design stories)
- [x] Accessibility pass (Section 508 / WCAG 2.1 AA)
- [x] Custom domain live (cmykompany.com) + HTTPS
- [ ] Content passes on each case study (with real screenshots)
- [ ] About / leadership manifesto page
- [ ] Contact
