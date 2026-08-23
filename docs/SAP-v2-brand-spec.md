# SAP v2 Brand Spec — "Ledger"

**Decided 2026-08-23.** This is the visual identity spec for the Claude Code site rebuild. It implements the "Ledger" direction from the rebrand ideation, with the "Open Ledger" mark and the "AI Automation Advisory" subname. Pair this with `SAP-v2-strategy-brief.md` for positioning, ICP, copy, and GTM — that doc covers *what the site says*, this one covers *what it looks like*.

No legal entity change. The registered name stays Solutions Advisory Partners. Everything below is typography, color, and a subname line, not a rename.

---

## 1. Name lockup

**Primary name (unchanged):** Solutions Advisory Partners
**Subname (new, sits directly under the primary name, smaller):** AI Automation Advisory

Render the subname as real text, not baked into an image — small caps, letter-spaced, in the brass accent color, roughly 55–60% the font size of the primary name. It should appear:
- In the site header, under or beside the wordmark
- In the footer
- In the LinkedIn company/profile description and headline
- Anywhere the current site says or implies "fractional SE" or "Give Your Sales Team a Solutions Engineer" — that whole tagline is retired (see the strategy brief, §7)

Do not use "SAP" as a public-facing abbreviation anywhere on the site or in social handles — it collides with the enterprise software company of the same initialism and is a dead end for SEO.

---

## 2. Color tokens

| Token | Hex | Use |
|---|---|---|
| `--ink` (navy) | `#17233F` | Primary dark surface: header/nav background, footer, mark badge background, body text on light surfaces |
| `--paper` (parchment) | `#F1EAD9` | Primary light surface: page background, cards on dark sections |
| `--brass` (accent) | `#A9823C` | Accent only: subname text, CTA buttons on dark backgrounds, links, small labels, the mark's linework. Never use as a large fill or background — it's a call-out color, not a base color. |
| `--text-on-paper` | `#2E2B22` | Body copy on `--paper` |
| `--text-on-navy` | `#F1EAD9` | Body copy on `--ink` |
| `--rule` (hairline) | `#E4DCC6` | Dividers, ledger-style rules, borders on light surfaces |
| `--muted` | `#71695A` | Secondary text, captions, metadata |

**Dark mode:** invert surface roles, don't just darken — `--ink` (navy) becomes the page background in dark mode rather than staying a "dark accent on a light page." Keep `--brass` as the one accent in both modes; it holds contrast against both navy and parchment.

**What to remove from the current site:** the SaaS-bright/tech palette and any monospace-coded color treatment (terminal-green, bright blues used for "code" styling). None of that carries into Ledger.

---

## 3. Typography

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Public+Sans:wght@400;500;600;700&display=swap">
```

- **Display / headline face:** Fraunces, weight 500 (600 for the largest hero headline only). Use for H1/H2, the primary wordmark, and pull quotes. It's a warm serif with real personality — let headlines breathe, `text-wrap: balance`.
- **Body / UI face:** Public Sans, weights 400/500/600. Use for paragraphs, nav, buttons, form labels.
- **Labels / eyebrows:** Public Sans, 600 weight, 11–12px, uppercase, letter-spacing ~0.14em, in `--brass`.

Remove all monospace font usage (the current site's code-snippet styling) — there is no code-aesthetic role in this identity.

---

## 4. The mark — "Open Ledger"

Two facing arcs suggesting an open book seen from above — the "ledger" and "record" idea, and the "counsel" idea (an open book as something you consult), without a checkmark, circuit, or sparkle.

### 4a. Badge version (favicon, LinkedIn avatar, app icons)

Self-contained, square, works down to 16px.

```svg
<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <rect width="72" height="72" rx="8" fill="#17233F"/>
  <path d="M23 47 L23 25 Q23 20 36 20" fill="none" stroke="#A9823C" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M49 25 L49 47 Q49 52 36 52" fill="none" stroke="#A9823C" stroke-width="2.5" stroke-linecap="round" opacity="0.55"/>
</svg>
```

At sizes at or below 24px, thicken the stroke to `3.5` so the arcs don't disappear (tested and confirmed legible at 16px with the thicker stroke; the default `2.5` stroke gets too thin at favicon size).

Export this as the favicon (`favicon.svg` + a rasterized 32×32/16×16 PNG fallback for older browsers) and as the square profile image for LinkedIn.

### 4b. Line mark (inline / flexible background use)

Same geometry, no background square — for use next to the text wordmark in a header, in the footer, or on a dark hero where a navy box would look heavy. Recolor the stroke to match whatever surface it sits on: `#17233F` (navy) on `--paper`, `#F1EAD9` (parchment) on `--ink`.

```svg
<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
  <path d="M23 47 L23 25 Q23 20 36 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M49 25 L49 47 Q49 52 36 52" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.55"/>
</svg>
```

Use `currentColor` (as above) so it inherits `color` from its container in CSS rather than needing a separate light/dark asset.

### 4c. Implementation note

Treat the mark as an SVG icon component. Treat "Solutions Advisory Partners" and "AI Automation Advisory" as live text in Fraunces/Public Sans, not flattened into a logo image — keeps it crisp at any size, themeable, and indexable by search engines and screen readers.

---

## 5. Header lockup spec

Icon (line mark or badge, 32–40px) + text block, left-aligned, small gap (~14px) between icon and text:

```
[mark]  Solutions Advisory Partners
        AI AUTOMATION ADVISORY
```

- Primary name: Fraunces 500, ~16–18px in a header/nav context (scale up for a homepage hero lockup)
- Subname: Public Sans 600, ~10–11px, letter-spacing 0.14em, uppercase, color `--brass`
- Vertically center the icon against the two-line text block

---

## 6. What this replaces on solutionsadvisorypartners.com

Per the strategic-codebase-audit.md already in the project folder, and the live site as of 2026-08-23:

- Remove the inline-JavaScript/code-snippet visual motif from the hero and anywhere else it appears.
- Remove the current tagline ("Give Your Sales Team a Solutions Engineer, Before You Hire One") — replaced by the v2 positioning statement in the strategy brief, §2.
- Replace the plain-text-only wordmark with the mark + subname lockup above.
- Apply the Ledger palette and type system sitewide, replacing the current SaaS-tech aesthetic.
- The current site's anonymous founder bio (no name, no photo — flagged in the codebase audit as "the single biggest conversion blocker") should be resolved by the already-decided fully-public founder proof point in the strategy brief, §2 and §7 — this is a copy/content fix, not a visual one, but it's the same audit finding and worth fixing in the same pass.

---

## 7. Reference

Full palette/type/mark exploration and the reasoning behind these choices: two artifacts built during ideation —
- "Ledger, Chambers, Register" (three-direction comparison, Ledger selected)
- "The Ledger Mark" (four mark concepts, Open Ledger + subname Option A selected)

Both are saved to Nico's claude.ai artifacts; this document is the self-contained implementation spec so Claude Code doesn't need to reference them directly.
