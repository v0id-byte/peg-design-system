export function Chip({ label, value }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      border: '2px solid rgba(22,24,29,0.16)',
      borderRadius: 999,
      padding: '26px 48px',
      fontSize: 38,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      fontVariantNumeric: 'tabular-nums',
      fontFamily: 'var(--font)',
      whiteSpace: 'nowrap',
    }}>
      <span style={{ color: 'var(--ink)' }}>{label}</span>
      {value && (
        <span style={{ color: 'var(--mute)', fontWeight: 500 }}>{value}</span>
      )}
    </div>
  );
}

export function StatPair({ number, label, color = 'ink' }) {
  const colorMap = { ink: 'var(--ink)', jade: 'var(--jade)', alert: 'var(--alert)' };
  return (
    <div style={{ fontFamily: 'var(--font)' }}>
      <div style={{
        fontSize: 96,
        fontWeight: 700,
        letterSpacing: '-0.03em',
        lineHeight: 1,
        fontVariantNumeric: 'tabular-nums',
        color: colorMap[color] || 'var(--ink)',
      }}>
        {number}
      </div>
      <div style={{
        fontSize: 26,
        color: 'var(--mute)',
        marginTop: 18,
        letterSpacing: 0,
        lineHeight: 1.3,
        fontWeight: 400,
      }}>
        {label}
      </div>
    </div>
  );
}
