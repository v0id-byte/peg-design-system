Chip and StatPair — the two recurring inline atoms.

**Chip** — a pill badge for labelled metadata rows (countries, dates, categories).
```jsx
<div style={{ display: 'flex', gap: 40 }}>
  <Chip label="US" value="· Jul 2025" />
  <Chip label="Hong Kong" value="· Aug 2025" />
  <Chip label="EU" value="· MiCA" />
</div>
```

**StatPair** — a large tabular number with a muted descriptor below.
```jsx
<div style={{ display: 'flex', gap: 140 }}>
  <StatPair number="84%" label={"of the market is\nUSDT + USDC"} />
  <StatPair number="$306B" label={"total market size\nend of 2025"} />
</div>
```

Colors for StatPair: `'ink'` (default) | `'jade'` (positive) | `'alert'` (danger/depeg).
