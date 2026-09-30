import { StageLabel, Node, Link, ArrowDefs } from "./diagramParts";

const ROWS = [
  { label: "Experience", y: 28, nodes: [
    { label: "Customer portal", sub: "React · Next.js" },
    { label: "Partner & back-office", sub: "Internal applications" },
    { label: "Public REST API", sub: "Mobile & B2B clients" },
  ] },
  { label: "Edge", y: 152, nodes: [
    { label: "Global entry point", sub: "TLS termination · WAF · routing", accent: true },
    { label: "API gateway", sub: "JWT validation · rate limits", accent: true },
  ] },
  { label: "Domain services", y: 264, nodes: [
    { label: "Quoting", sub: "Spring Boot" },
    { label: "Policy servicing", sub: "Spring Boot" },
    { label: "Payments", sub: "Spring Boot" },
    { label: "Notifications", sub: "Events" },
  ] },
  { label: "Data", y: 392, nodes: [
    { label: "PostgreSQL", sub: "System of record" },
    { label: "Redis", sub: "Cache · coordination" },
    { label: "Core systems", sub: "Insurance & payments" },
  ] },
];

const GUTTER_X = 176;
const NODES_W = 756;
const NODE_H = 88;
const GAP = 24;

const rowWidth = (count) => (NODES_W - GAP * (count - 1)) / count;

const nodeX = (index, count) => GUTTER_X + index * (rowWidth(count) + GAP);

export const PlatformDiagram = ({ id }) => {
  const markerId = `${id}-arrow`;

  return (
    <svg
      className="arch-svg"
      viewBox="0 0 960 508"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby={`${id}-title ${id}-desc`}
    >
      <title id={`${id}-title`}>
        Customer-facing platform topology: experience, edge, domain services and
        data layers connected top to bottom.
      </title>
      <desc id={`${id}-desc`}>
        Customer portal, partner and back-office applications and a public REST API
        sit behind a global entry point and API gateway, which route to separate
        quoting, policy servicing, payments and notification services. Those services
        read and write PostgreSQL, Redis and external core insurance and payment
        systems.
      </desc>
      <ArrowDefs id={markerId} />

      {ROWS.map((row) => (
        <g key={row.label}>
          <rect
            className="arch-band"
            x="8"
            y={row.y - 16}
            width="944"
            height={NODE_H + 32}
            rx="20"
          />
          <StageLabel x="28" y={row.y + NODE_H / 2 + 4}>
            {row.label}
          </StageLabel>
          {row.nodes.map((node, index) => (
            <Node
              key={node.label}
              x={nodeX(index, row.nodes.length)}
              y={row.y}
              w={rowWidth(row.nodes.length)}
              h={NODE_H}
              {...node}
            />
          ))}
        </g>
      ))}

      {[116, 240, 380].map((y) => (
        <Link
          key={y}
          path={`M 554 ${y} L 554 ${y + 24}`}
          markerId={markerId}
        />
      ))}
    </svg>
  );
};