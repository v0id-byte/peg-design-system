export function StatBlock({ value, label, accent = false, danger = false }) {
  const color = danger
    ? 'var(--color-alert,#E5484D)'
    : accent
      ? 'var(--color-jade,#00A878)'
      : 'var(--color-ink,#16181D)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{
        fontSize: '52px',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        lineHeight: 1,
        fontVariantNumeric: 'tabular-nums',
        color,
        fontFamily: 'var(--font-sans,system-ui)'
      }}>
        {value}
      </div>
      <div style={{
        fontSize: '13px',
        color: 'var(--color-mute,#8A8A8E)',
        lineHeight: 1.4,
        letterSpacing: 0,
        fontFamily: 'var(--font-sans,system-ui)'
      }}>
        {label}
      </div>
    </div>
  );
}
