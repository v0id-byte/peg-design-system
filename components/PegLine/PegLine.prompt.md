The signature horizontal rule + jade dot. Renders a full-width 2px line with an optional floating label and jade circle at the right end. Place absolutely at `top: var(--peg-y)` within the slide canvas for the canonical peg position.

```jsx
// Default — ink line + $1.00 label + jade dot
<PegLine />

// Faint background reference (behind a break chart)
<PegLine faint showLabel={false} showDot={false} />

// Custom label, no dot
<PegLine label="0%" showDot={false} />
```

**Variants:** `faint` (22% opacity ink) vs default (full ink). The jade dot is the single recurring decorative element in the system — keep it on the key slide only.
