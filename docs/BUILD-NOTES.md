# SAP v2 Build Notes

Built 2026-08-23 from `SAP-v2-strategy-brief.md` (same folder), which is the source of
truth for strategy, ICP, offers, and voice. This repo is standalone: v1 lives in
`ncasj/solutionsadvisorypartners` (untouched), and Cloudflare Pages gets pointed at
whichever repo should be publicly visible. `wrangler.jsonc` keeps the project name
`solutionsadvisorypartners` so the existing Pages project can simply switch its source
repo to this one.

## What was kept from the Proofworks branch (per brief §7)

- Page architecture, nav/footer patterns, mobile menu
- Quiz engine with EmailJS + Mixpanel wiring (questions and bands rewritten)
- The four-move method framework, relabeled Map → Build → Prove → Compound
- Honesty rules (no invented logos/metrics, illustrative labels, first-person voice)
- `scripts/og.mjs` OG-image generator
- `_redirects` 301s for the removed v1 SE articles and glossary
- Palette and fonts (see Open Items below)

## What was reversed

- All Proofworks naming → Solutions Advisory Partners, sitewide
- Domain → solutionsadvisorypartners.com (canonicals, OG URLs, sitemap, robots,
  consent.js host gate)
- All migration machinery deleted (domain purchase, new Pages project, Search Console
  change-of-address, LinkedIn rename, repo spin-out instructions)
- Proofworks pricing → SMB bands: Audit $2.5k–$4k, Implementation $6k–$12k,
  Advisory $1.5k–$3k/mo
- Contact email → solutionsadvisorypartners@gmail.com (matches EmailJS + Calendly setup)

## v2-specific decisions

- Single CTA: the assessment is the primary CTA on every page; contact links are
  secondary text links (brief §6: "the quiz is the site's single CTA")
- Prices posted on home and services (brief §4: this buyer distrusts "call for pricing")
- One-engagement-at-a-time stated on home, services, and FAQ
- Gen Digital and the Head of Solutions Engineering title named on home and about
  (brief decision #5 — see Open Items)
- Voice: no em dashes anywhere in site copy; en dashes retained for numeric ranges
- Wordmark: "Solutions Advisory" + check mark; full name in footer/copyright

## Update 2026-08-23: Ledger rebrand

The palette/font open item below is resolved. The site now runs the "Ledger" identity
(navy/parchment/brass, Fraunces + Public Sans, the Open Ledger mark) per
`SAP-v2-brand-spec.md`. Full implementation record: `BRAND.md`. `CLAUDE.md` at the repo
root has the fast-reference version for future sessions working in this repo.

Also folded into this pass: a full copy sweep for AI-tell language and reflexive compound
hyphenation (see `BRAND.md` → Voice), run against the `humanizer` skill's checklist and
Nico's Idiolect voice profile (direct, low formality, short sentences, no em dashes).

## Open items (from brief §10, Nico's actions)

1. **Employment agreement check before launch.** The site names Gen Digital on the home
   and about pages. If the agreement check fails, search for "Gen Digital" across
   index.html and about.html and soften to "a large software company."
2. **Confirm price ranges** in §4 of the brief before launch; they are currently
   rendered on index.html and services.html.
