export function PegLine({ label = '$1.00', faint = false, showDot = true, showLabel = true }) {
  const lineColor = faint ? 'rgba(22,24,29,0.22)' : 'var(--color-ink,#16181D)';
  return (
    <div style={{ position: 'relative', height: '2px', width: '100%' }}>
      <div style={{ position: 'absolute', inset: 0, background: lineColor }} />
      {showLabel && (
        <span style={{
          position: 'absolute',
          right: showDot ? '28px' : '0',
          top: '-26px',
          fontSize: '14px',
          color: 'var(--color-mute,#8A8A8E)',
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '0.02em',
          fontFamily: 'var(--font-sans,system-ui)',
          whiteSpace: 'nowrap'
        }}>{label}</span>
      )}
      {showDot && (
        <div style={{
          position: 'absolute', right: '-5px', top: '-4px',
          width: '10px', height: '10px', borderRadius: '50%',
          background: 'var(--color-jade,#00A878)'
        }} />
      )}
    </div>
  );
}
