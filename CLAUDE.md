# Solutions Advisory Partners — v2 site

Static, precompiled-Tailwind marketing site for an AI automation consultancy serving
professional-services firms (law, accounting, consulting, financial advisory). No build
step at request time — `assets/tailwind.css` is a compiled artifact checked into the
repo; regenerate it after any class change:

```
npx tailwindcss@3 -c tailwind.config.js -i input.css -o assets/tailwind.css --minify
```

Full strategy (positioning, ICP, offers, GTM): `docs/SAP-v2-strategy-brief.md`.
Full brand spec (rationale, mark variants, reference artifacts): `docs/BRAND.md`.
This file is the fast-reference version of both — read it before touching copy or
styling, and treat it as binding unless the user says otherwise in the conversation.

## Brand identity — "Ledger"

Registered name is unchanged: **Solutions Advisory Partners**. It carries a subname,
rendered as real text (never baked into an image): **AI Automation Advisory**, small
caps, brass, ~55–60% of the primary name's size, directly under or beside it. Never use
"SAP" as a public-facing abbreviation — it collides with the enterprise software company
and is a dead end for SEO.

**Color tokens** (`tailwind.config.js` → `theme.colors.brand`, mirrored as CSS custom
properties in `input.css`'s `:root`):

| Token | Hex | Use |
|---|---|---|
| `ink` | `#17233F` | Dark surface: header/nav bg, footer, hero sections, mark badge bg |
| `inkHover` | `#0F1830` | Hover state for ink-colored buttons/surfaces |
| `inkElevated` | `#202E52` | Solid (non-transparent) card surfaces sitting on top of an `ink` hero section — see the transparency rule below |
| `paper` | `#F1EAD9` | Page background; body text color when on an `ink` surface |
| `paperMuted` | `#EAE1CC` | Alternating/subtle section backgrounds (a touch darker than `paper`) |
| `card` | `#FBF8F1` | Card surfaces (replaces plain white) |
| `brass` | `#A9823C` | The one accent: CTAs, links, hover states, the subname, the mark's linework. **Never a large fill or background** — call-out color, not a base color |
| `rule` | `#E4DCC6` | Hairline dividers, card borders, form-input borders |
| `muted` | `#71695A` | Secondary/caption text |
| `text` | `#2E2B22` | Primary body copy on `paper`/`card` surfaces |
| `positive` | `#4B6858` | Semantic affirmative (muted sage) — "Ideal For" checks, pass states |
| `caution` | `#8C7A4A` | Semantic middle state (muted olive) — e.g. the assessment's mid readiness band |
| `negative` | `#9B5A45` | Semantic negative (muted terracotta) — "Not a Fit" marks, fail states |

`positive`/`caution`/`negative` are a site-specific extension beyond the original brand
spec's 7 tokens, added because the assessment and services pages need semantic
red/amber/green without borrowing brass (which the spec reserves for accent-only use) and
without reverting to bright SaaS red/amber/emerald. Keep them muted and earthy, matching
the rest of the palette — never swap in a saturated stock Tailwind color again.

**No dark-mode toggle.** This is a fixed-theme marketing site (parchment page, navy
accent sections), same convention as before the rebrand. Don't add
`prefers-color-scheme` handling unless asked.

**Typography:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Public+Sans:wght@400;500;600;700&display=swap">
```
- Display/headline (`font-display` in Tailwind, h1–h3, wordmark, pull quotes): **Fraunces**, weight 500 normally, 600 only for the largest hero headline.
- Body/UI (`font-sans`, default): **Public Sans**, 400/500/600/700.
- Eyebrow labels: Public Sans 600, 11–12px, uppercase, letter-spacing ~0.14em, color `brand-brass`.
- No monospace anywhere. No "SaaS-tech" motifs — no dot-grid backgrounds, no terminal/code-block styling, no bright cyan/green accent colors. Hero sections use a flat, solid `ink` background (`.hero-pattern` in each page's `<style>` block is just `background-color: #17233F;`) — no gradient, no ruled-line texture, no pattern of any kind. An earlier faint brass ruled-line texture on hero sections was flagged directly by Nico ("get rid of all those stupid thin brown lines") and removed sitewide; don't reintroduce it or any other hero background pattern.

**The mark ("Open Ledger"):** two facing arcs suggesting an open book seen from above.
Badge version (favicon, square contexts) is `assets/favicon.svg`. Inline/line version
(header, footer, next to the wordmark) uses `currentColor` so it inherits text color:

```html
<svg viewBox="0 0 72 72" fill="none" aria-hidden="true"><path d="M23 47 L23 25 Q23 20 36 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M49 25 L49 47 Q49 52 36 52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.55"/></svg>
```

Never use a checkmark, circuit, or sparkle icon for this brand again — that was the
Proofworks-era mark and it's retired along with that name.

## Avoid these AI-generated-design tells

Two patterns got flagged by Nico directly and are banned sitewide, not just fixed once:

- **No bordered-pill "eyebrow" badge above a headline** (small uppercase text inside a
  `rounded-full border` chip, sitting alone above an `<h1>`/`<h2>` to announce the
  section topic). This reads as an AI-generated-landing-page default. Use a plain-text
  eyebrow instead: `<p class="text-brand-brass font-medium text-sm uppercase tracking-widest mb-6">Label</p>`,
  no background, no border, no pill shape — see `about.html`'s hero for the reference
  pattern. Small functional badges that convey real state (a "Flagship" ribbon, a
  pricing-tier tag, a category label on an article card) are fine; the tell is
  specifically an empty decorative eyebrow doing no informational work beyond
  "here's the topic."
- **Never put a translucent card directly on a `.hero-pattern` surface.** A
  `bg-brand-paper/5` (or similar low-opacity) card on the flat `ink` hero background
  reads as washed-out and unintentional rather than deliberate. Any card sitting on top
  of a hero section needs an opaque background — use `bg-brand-inkElevated` (solid), not
  a `brand-paper` or `brand-ink` opacity variant.

## Voice rules

Nico's actual voice (from his Idiolect profile): direct, low formality, low verbosity,
minimal punctuation flourishes, short-to-medium sentences. Write like that, not like a
marketing deck.

- **No em dashes anywhere.** Use a period, comma, or parenthesis instead.
- **No AI-tell language.** Before shipping any new copy, run it against the Wikipedia
  "Signs of AI writing" checklist (the `humanizer` skill has the full list). Watch
  especially for: significance inflation ("stands as a testament to..."), promotional
  adjectives ("vibrant", "robust", "seamless"), vague attribution ("industry experts
  say"), the rule of three, "-ing" tacked-on clauses ("...ensuring optimal outcomes"),
  and generic upbeat closers.
- **Don't hyphenate compound modifiers by reflex.** AI writing over-hyphenates common
  word pairs with mechanical consistency ("financial-advisory", "professional-services",
  "client-facing") in places a person wouldn't bother. Default to no hyphen; only keep
  one where it actually prevents a misread.
- First person singular throughout ("I build...", never a fake "we").
- No invented client logos or metrics. Illustrative scenarios are labeled illustrative.

## Structure notes

- 12 HTML pages: 8 at repo root (`index`, `services`, `about`, `assessment`, `contact`,
  `thank-you`, `privacy`, `insights`) + 4 under `insights/` (retargeted articles). The
  `insights/*.html` pages use `../`-relative links back to root pages; root pages link to
  each other directly.
- Nav/footer markup is duplicated per page (no templating layer) — when changing the
  header or footer lockup, update all 12 files, remembering the two link-prefix variants.
- `scripts/og.mjs` regenerates `assets/og-default.png` from `scripts/og-template.html`
  via headless Chromium. Re-run it after any brand/copy change that touches the OG image
  content.
- EmailJS (`service_mro1akd` / `template_i5x4coi`) and Mixpanel wiring in
  `contact.html`/`assessment.html`/`consent.js`/`analytics.js` are load-bearing — don't
  touch the IDs when doing brand/copy passes.
