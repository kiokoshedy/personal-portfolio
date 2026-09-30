export const StageLabel = ({ x, y, children }) => (
  <text className="arch-stage-label" x={x} y={y} textAnchor="start">
    {children}
  </text>
);

export const Node = ({ x, y, w, h, label, sub, accent = false, step }) => {
  const centerX = x + w / 2;
  const textY = sub ? y + h / 2 - 5 : y + h / 2 + 5;

  return (
    <g>
      <rect
        className={accent ? "arch-node arch-node-accent" : "arch-node"}
        x={x}
        y={y}
        width={w}
        height={h}
        rx={14}
      />
      {step && (
        <text className="arch-step" x={x + 14} y={y + 22} textAnchor="start">
          {step}
        </text>
      )}
      <text className="arch-label" x={centerX} y={textY} textAnchor="middle">
        {label}
      </text>
      {sub && (
        <text className="arch-sub" x={centerX} y={y + h / 2 + 14} textAnchor="middle">
          {sub}
        </text>
      )}
    </g>
  );
};

export const Link = ({ path, dashed = false, markerId }) => (
  <path
    className={dashed ? "arch-link arch-link-dashed" : "arch-link"}
    d={path}
    markerEnd={`url(#${markerId})`}
  />
);

export const ArrowDefs = ({ id }) => (
  <defs>
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path className="arch-arrow-head" d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
);