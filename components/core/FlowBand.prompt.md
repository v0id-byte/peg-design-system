Left-to-right flow chain — nodes joined by faint arrow connectors that flex to fill space.

```jsx
// Money machine
<FlowBand nodes={['Your $', 'US Treasuries', 'Interest']} accentIndices={[2]} />

// Global cycle
<FlowBand nodes={['Your $', 'USDT', 'US Treasuries']} accentIndices={[]} />
```

**Rules:** always full-width; connectors auto-flex to fill gaps. Use 3–4 nodes max for readability at slide scale. Accent the *outcome* node(s) in jade.
