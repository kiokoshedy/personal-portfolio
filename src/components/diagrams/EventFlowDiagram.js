import { StageLabel, Node, Link, ArrowDefs } from "./diagramParts";

const PRODUCERS = [
  { label: "Payment API", sub: "Authenticates & records intent" },
  { label: "Provider webhooks", sub: "External payment & core systems" },
  { label: "Batch & scheduled jobs", sub: "Retries · reconciliation" },
];

const CONSUMERS = [
  { label: "Charge provider", sub: "Idempotent request per payment" },
  { label: "Settlement & ledger", sub: "Double-entry state transitions" },
  { label: "Customer notification", sub: "Receipts & status updates" },
];

const TOP = 56;
const BOX_H = 80;
const STEP = 112;

const boxY = (index) => TOP + index * STEP;

export const EventFlowDiagram = ({ id }) => {
  const markerId = `${id}-arrow`;

  return (
    <svg
      className="arch-svg"
      viewBox="0 0 960 494"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby={`${id}-title ${id}-desc`}
    >
      <title id={`${id}-title`}>
        Event-driven payment processing: producers publish to an event backbone,
        independent consumers act on the events, and unprocessable messages are
        dead-lettered for operator replay.
      </title>
      <desc id={`${id}-desc`}>
        Payment API calls, provider webhooks and batch jobs publish payment events to
        a broker that provides retries, ordering and replay. Consumers for charging the
        provider, settlement and ledger updates, and customer notifications each handle
        events idempotently. Messages that fail repeatedly are moved to a dead-letter
        queue for audited, idempotent replay.
      </desc>
      <ArrowDefs id={markerId} />

      <StageLabel x="24" y="26">
        Request path
      </StageLabel>
      <StageLabel x="330" y="26">
        Event backbone
      </StageLabel>
      <StageLabel x="676" y="26">
        Consumers
      </StageLabel>

      {PRODUCERS.map((node, index) => (
        <Node
          key={node.label}
          x={24}
          y={boxY(index)}
          w={210}
          h={BOX_H}
          {...node}
        />
      ))}

      <Node
        x={330}
        y={44}
        w={250}
        h={352}
        label="Event backbone"
        sub="Topics · retries · ordering · replay"
        accent
      />

      {CONSUMERS.map((node, index) => (
        <Node
          key={node.label}
          x={676}
          y={boxY(index)}
          w={260}
          h={BOX_H}
          {...node}
        />
      ))}

      {PRODUCERS.map((node, index) => (
        <Link
          key={`p-${node.label}`}
          path={`M 234 ${boxY(index) + BOX_H / 2} L 326 ${boxY(index) + BOX_H / 2}`}
          markerId={markerId}
        />
      ))}

      {CONSUMERS.map((node, index) => (
        <Link
          key={`c-${node.label}`}
          path={`M 584 ${boxY(index) + BOX_H / 2} L 672 ${boxY(index) + BOX_H / 2}`}
          markerId={markerId}
        />
      ))}

      <Node
        x={330}
        y={424}
        w={250}
        h={52}
        label="Dead-letter → audited replay"
      />
      <Link
        path="M 455 400 L 455 420"
        dashed
        markerId={markerId}
      />
    </svg>
  );
};