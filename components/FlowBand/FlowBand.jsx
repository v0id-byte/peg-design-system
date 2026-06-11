export function FlowBand({ nodes = [], accentIndex = -1 }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    }}>
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          <div style={{
            flexShrink: 0,
            fontSize: 52,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            whiteSpace: 'nowrap',
            color: i === accentIndex ? 'var(--jade)' : 'var(--ink)',
            fontFamily: 'var(--font)',
          }}>
            {node}
          </div>
          {i < nodes.length - 1 && (
            <div style={{
              flex: '1 1 0',
              height: 2,
              background: 'rgba(22,24,29,0.22)',
              position: 'relative',
              margin: '0 46px',
            }}>
              <div style={{
                position: 'absolute',
                right: -1,
                top: '50%',
                transform: 'translateY(-50%)',
                borderLeft: '15px solid rgba(22,24,29,0.34)',
                borderTop: '9px solid transparent',
                borderBottom: '9px solid transparent',
              }} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
