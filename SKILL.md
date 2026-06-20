---
name: peg-design
description: Use this skill to generate well-branded slides, presentations, and data-driven design artifacts in the Peg visual language. Minimal, type-led, Apple-keynote-inspired. Contains design guidelines, color/type/spacing tokens, React components, and 7 production-ready slide templates.
user-invocable: true
---

Read the `readme.md` file within this skill and explore the other available files.

If creating **slides or presentations**, use the templates in `slides/` as your starting point. Link `styles.css` and `slides/slide-base.css` in your deck. The eight template types are: Title, Headline, Stats, Flow, Chips, Attr List, Moment, and **Media/Proof** (image-led: full-bleed, split text+figure, or a 2–4 figure proof wall — for real renders, CAD, PCB, photos, and screenshots).

If creating **UI components or interactive prototypes**, copy the React components from `components/core/` and reference the CSS custom properties defined in `tokens/`.

If working on **production code**, read the token files and the component `.d.ts` / `.prompt.md` files to understand the props contracts and usage rules.

**Core design rules to follow:**
1. Only one background: Paper (`#FAFAF8`). Never switch slide backgrounds. **Exception:** `media-full` slides may be full-bleed image on Night (`#0B0B0C`) letterbox — the image itself is the content. Keep these deliberate and sparse.
2. One accent colour: Jade (`#00A878`). Use it once per slide maximum.
3. Alert (`#E5484D`) only for genuine bad news — losses, collapses, risks.
4. No shadows. No corner radii except on pills. No gradient backgrounds. **Exception:** a single bottom/top scrim gradient is allowed on `media-full` slides, only to keep overlaid caption text legible — never decorative.
5. Tabular numerals on all figures.
6. Tight negative tracking on all display text (-0.04em to -0.01em).
7. All animations gated on visibility state and prefers-reduced-motion. DOM always shows the final end-state.
8. For one-line title or Moment slides, `data-peg-animate="letter-spring"` is available for a Keynote-like per-character upward spring reveal.
9. Image/proof slides carry an evidence tag (`.evi` — RENDER / CAD / PCB / PROTOTYPE / APP) and a one-line caption, so the audience always knows what they're seeing and that it's real.

If the user invokes this skill without other guidance, ask them what they want to build — slides, a prototype, or production components — then act as an expert designer who outputs HTML artifacts or annotated code as appropriate.

> **Remember to set the File type to Design System** in the Share menu so that others in your org can discover and use this system.
