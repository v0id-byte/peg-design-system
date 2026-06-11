The signature $1.00 horizontal rule that anchors every slide visually.

```jsx
// Full ink — title and closing slides
<PegLine label="$1.00" />

// Faint — decorative background on content slides
<PegLine faint showLabel={false} />

// Custom label
<PegLine label="~$0.87" faint />
```

**Variants:** default (solid ink + jade dot + label) · faint (0.22 opacity, no dot) · label-only (hide dot) · dot-only (hide label)
**Geometry:** always full-width of its container; place inside a positioned element to control x/y on a slide canvas.
