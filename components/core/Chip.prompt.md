Bordered pill for key/value pairs — jurisdiction names, dates, statuses.

```jsx
// Jurisdiction chips (slide 8)
<div style={{ display: 'flex', gap: '16px' }}>
  <Chip label="US"        value="Jul 2025" />
  <Chip label="Hong Kong" value="Aug 2025" />
  <Chip label="EU"        value="MiCA"     />
</div>

// Sizes
<Chip label="Small"  size="sm" />
<Chip label="Medium" size="md" />
<Chip label="Large"  size="lg" />
```

**Rule:** label+value only — no icons, no color fills, no shadows. Border opacity is always `rgba(22,24,29,0.16)`.
