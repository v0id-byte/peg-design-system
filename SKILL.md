---
name: peg-design
description: Use this skill to generate well-branded slides, presentations, and data-driven design artifacts in the Peg visual language. Minimal, type-led, Apple-keynote-inspired. Contains design guidelines, color/type/spacing tokens, React components, and 7 production-ready slide templates.
user-invocable: true
---

Read the `readme.md` file within this skill and explore the other available files.

If creating **slides or presentations**, use the templates in `slides/` as your starting point. Link `styles.css` and `slides/slide-base.css` in your deck. The seven template types are: Title, Headline, Stats, Flow, Chips, Attr List, and Moment.

If creating **UI components or interactive prototypes**, copy the React components from `components/core/` and reference the CSS custom properties defined in `tokens/`.

If working on **production code**, read the token files and the component `.d.ts` / `.prompt.md` files to understand the props contracts and usage rules.

**Core design rules to follow:**
1. Only one background: Paper (`#FAFAF8`). Never switch slide backgrounds.
2. One accent colour: Jade (`#00A878`). Use it once per slide maximum.
3. Alert (`#E5484D`) only for genuine bad news — losses, collapses, risks.
4. No shadows. No corner radii except on pills. No gradient backgrounds.
5. Tabular numerals on all figures.
6. Tight negative tracking on all display text (-0.04em to -0.01em).
7. All animations gated on visibility state and prefers-reduced-motion. DOM always shows the final end-state.

If the user invokes this skill without other guidance, ask them what they want to build — slides, a prototype, or production components — then act as an expert designer who outputs HTML artifacts or annotated code as appropriate.

> **Remember to set the File type to Design System** in the Share menu so that others in your org can discover and use this system.
