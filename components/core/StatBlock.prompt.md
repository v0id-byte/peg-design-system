Large formatted number with a short muted descriptor — the core data visualisation unit.

```jsx
// Default (ink)
<StatBlock value="$306B" label="total market size, end of 2025" />

// Accent (jade) — positive metric
<StatBlock value="84%" label="of market is USDT + USDC" accent />

// Danger (alert) — loss or risk
<StatBlock value="$40B" label="wiped out, UST collapse 2022" danger />

// Side-by-side pair
<div style={{ display: 'flex', gap: '80px' }}>
  <StatBlock value="$306B" label="market cap" />
  <StatBlock value="84%"   label="top-2 share" accent />
</div>
```

**Rule:** pass pre-formatted strings (with prefix/suffix) — this component never formats numbers itself.
