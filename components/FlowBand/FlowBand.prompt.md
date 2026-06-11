Horizontal flow diagram — nodes joined by thin arrow connectors that flex-fill the gaps evenly. Reads strictly left→right. Use for money flows, process chains, cause-effect sequences.

```jsx
// Money flow with jade accent on the outcome node
<FlowBand
  nodes={['Your $', 'US Treasuries', 'Interest']}
  accentIndex={2}
/>

// Neutral 3-step process
<FlowBand nodes={['Mint', 'Hold', 'Redeem']} />
```

**Sizing:** Font is 52px/600 on the 1920×1080 canvas. Position the component absolutely at the desired y within `.frame`. Nodes are `flex-shrink:0`; connectors take up all remaining horizontal space equally.
