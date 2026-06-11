export function AttrList({ items = [] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {items.map((item, i) => (
        <div key={i} style={{
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: 1.4,
          letterSpacing: '-0.01em',
          color: 'var(--color-mute,#8A8A8E)',
          fontFamily: 'var(--font-sans,system-ui)'
        }}>
          <strong style={{
            fontWeight: 600,
            color: item.accent
              ? 'var(--color-jade,#00A878)'
              : 'var(--color-ink,#16181D)'
          }}>
            {item.term}
          </strong>
          {item.definition ? ` — ${item.definition}` : ''}
        </div>
      ))}
    </div>
  );
}
