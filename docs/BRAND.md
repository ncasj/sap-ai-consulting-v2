# Brand implementation record — "Ledger"

This documents how the Ledger brand spec was actually implemented in code, including
every decision the spec left open. The spec itself is preserved verbatim at
`docs/SAP-v2-brand-spec.md`; read that first for the full rationale. This file is the
"what we actually built and why" companion — start here when you need to know how a
token or component is wired into the codebase, and update it whenever the brand changes.

For quick reference while working in this repo, `CLAUDE.md` at the repo root has the
condensed version of everything below and is what gets auto-loaded into a Claude Code
session — keep the two in sync.

## Token source of truth

`tailwind.config.js` (`theme.extend.colors.brand`) is canonical. `input.css`'s `:root`
block mirrors the same hex values as CSS custom properties, for the handful of places
(inline SVGs using `currentColor`, the OG-image template, `hero-pattern` gradients) that
need a raw CSS value rather than a Tailwind utility class. If you change a token, change
it in both files, then rebuild `assets/tailwind.css`.

## Extensions beyond the original spec

The spec defines 7 tokens (`ink`, `paper`, `brass`, `text-on-paper`, `text-on-navy`,
`rule`, `muted`). Implementing it against the actual site surfaced needs the spec didn't
cover, resolved as follows:

- **`text-on-navy` is just `paper` reused as a text color**, not a separate token — the
  spec's own hex values for the two are identical (`#F1EAD9`), so there was nothing to
  add.
- **`text-on-paper` became the token `text`** (`#2E2B22`) for naming consistency with the
  rest of the palette (short, un-prefixed names).
- **`inkHover` (`#0F1830`)** — a touch darker than `ink`, for hover states on ink-colored
  buttons (the site darkens buttons on hover; opacity alone reads wrong against a solid
  ink button, so this needed a real second value).
- **`inkElevated` (`#202E52`)** — added after Nico flagged the homepage hero's three
  feature cards: they used `bg-brand-paper/5`, and the hero's ledger-rule texture was
  visibly bleeding through the translucent card interiors, reading as an unintentional
  glitch rather than a deliberate glass effect. `inkElevated` is a solid, slightly
  lighter navy for any card that needs to sit on top of a `.hero-pattern` section. See
  `CLAUDE.md`'s "Avoid these AI-generated-design tells" section — this is now a standing
  rule, not a one-off fix.
- **`paperMuted` (`#EAE1CC`)** — for alternating section backgrounds, a role the original
  site filled with `slate-50`. Sits between `paper` and `rule` in value; reads as a subtle
  shift, not a hard boundary. Conveniently doubles as a "ledger ruled-row" callback.
- **`card` (`#FBF8F1`)** — replaces plain white for card surfaces. Slightly lighter and
  warmer than `paper`, so cards still pop against the page without introducing a cool
  white that would fight the parchment palette.
- **`positive` / `caution` / `negative`** (`#4B6858` / `#8C7A4A` / `#9B5A45`) — muted
  sage / olive / terracotta. The site has real semantic-color needs (the "Ideal For / Not
  a Fit" comparison on the services page, the three-band readiness ladder and the quiz's
  live-scored result card on the assessment page) that predate the rebrand and aren't
  going away. The spec is explicit that brass is accent-only, never a fill, which rules
  it out for these. Rather than leave the old bright Tailwind red/amber/emerald in place
  (exactly the "SaaS-bright palette" the spec says to remove), these three give the same
  pass/warn/fail semantics in tones that sit naturally in the rest of the page.

## What replaced the SaaS-tech motifs

- **Hero backgrounds:** the old dot-grid (`radial-gradient` of small dots, a very common
  "AI-generated landing page" tell) is gone. Hero sections were briefly flat `ink` with a
  faint horizontal `repeating-linear-gradient` in low-opacity brass, evoking ruled ledger
  paper — Nico flagged this directly as unwanted ("get rid of all those stupid thin brown
  lines... remove it entirely") and it's gone too. Hero sections are now just flat, solid
  `ink` (`background-color: #17233F;`), no gradient or pattern at all.
- **Gradients removed:** two-stop Tailwind gradients (`from-X-50 to-Y-50`), another
  landing-page default, are gone wherever they existed (the assessment readiness ladder,
  the live score card). Replaced with flat `card`/`paperMuted` backgrounds and a colored
  left border, which reads as a ledger-line callout instead of a SaaS pricing-tier card.
- **The mark:** the old checkmark-in-a-rounded-square (`Proofworks` era, `#34d399` green
  stroke) is fully retired. See `CLAUDE.md` for the current mark's markup.

## Header/footer lockup

Every page's nav and footer carry the same lockup: the line mark, then a two-line text
block (`Solutions Advisory Partners` in Fraunces, `AI AUTOMATION ADVISORY` beneath it in
small-caps brass). Because the site has no templating layer, this markup is duplicated
literally across all 12 HTML files — when it changes, it has to change everywhere. The
only per-file variation is the link prefix (`href="index.html"` at root vs.
`href="../index.html"` under `insights/`).

## Voice

See `CLAUDE.md` for the condensed voice rules (no em dashes, no AI-tell language, no
reflexive compound hyphenation, first person). The full Wikipedia "Signs of AI writing"
checklist this is built from lives in the `humanizer` skill (`/root/.claude/skills/synced/humanizer` in a Claude Code environment) — worth re-reading before a large copy pass, not
just this summary.
