export function PegLine({ label = '$1.00', faint = false, showDot = true, showLabel = true }) {
  const lineColor = faint ? 'rgba(22,24,29,0.22)' : 'var(--ink)';
  return (
    <div style={{ position: 'relative', width: '100%', height: '20px' }}>
      <div style={{
        position: 'absolute', left: 0, right: 0, top: '50%',
        borderTop: `2px solid ${lineColor}`,
      }} />
      {showLabel && label && (
        <span style={{
          position: 'absolute',
          right: showDot ? 22 : 0,
          top: 'calc(50% - 24px)',
          fontSize: 20,
          color: 'var(--mute)',
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '0.02em',
          fontFamily: 'var(--font)',
        }}>
          {label}
        </span>
      )}
      {showDot && (
        <div style={{
          position: 'absolute', right: -5, top: 'calc(50% - 5px)',
          width: 10, height: 10, borderRadius: '50%',
          background: 'var(--jade)',
        }} />
      )}
    </div>
  );
}
