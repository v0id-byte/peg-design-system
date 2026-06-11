export function Chip({ label, value, size = 'md' }) {
  const pad = { sm: '8px 18px', md: '13px 26px', lg: '20px 38px' }[size];
  const fz  = { sm: '14px',     md: '19px',       lg: '26px'      }[size];
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      border: '2px solid rgba(22,24,29,0.16)',
      borderRadius: '999px',
      padding: pad,
      fontFamily: 'var(--font-sans,system-ui)',
      fontSize: fz,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap',
      lineHeight: 1
    }}>
      <span style={{ color: 'var(--color-ink,#16181D)' }}>{label}</span>
      {value !== undefined && (
        <span style={{ color: 'var(--color-mute,#8A8A8E)', fontWeight: 500 }}>
          · {value}
        </span>
      )}
    </div>
  );
}
