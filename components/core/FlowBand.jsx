export function FlowBand({ nodes = [], accentIndices = [] }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          <div style={{
            flexShrink: 0,
            fontSize: '24px',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            whiteSpace: 'nowrap',
            color: accentIndices.includes(i)
              ? 'var(--color-jade,#00A878)'
              : 'var(--color-ink,#16181D)',
            fontFamily: 'var(--font-sans,system-ui)'
          }}>
            {node}
          </div>
          {i < nodes.length - 1 && (
            <div style={{
              flex: '1 1 0',
              height: '2px',
              background: 'rgba(22,24,29,0.22)',
              position: 'relative',
              margin: '0 24px'
            }}>
              <div style={{
                position: 'absolute',
                right: '-1px', top: '50%',
                transform: 'translateY(-50%)',
                borderLeft: '10px solid rgba(22,24,29,0.34)',
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent'
              }} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
