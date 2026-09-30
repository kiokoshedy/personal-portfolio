import { Node, Link, ArrowDefs } from "./diagramParts";

const STAGES = [
  { label: "Commit", sub: "Reviewed PR" },
  { label: "Build & test", sub: "Unit · integration" },
  { label: "Security scan", sub: "Deps · secrets · SAST" },
  { label: "Publish", sub: "Immutable image" },
  { label: "Deploy", sub: "Kubernetes rollout" },
  { label: "Observe", sub: "Logs · metrics · traces" },
];

const X0 = 24;
const BOX_W = 138;
const STEP = 155;
const TOP = 84;
const BOX_H = 100;

export const DeliveryPipelineDiagram = ({ id }) => {
  const markerId = `${id}-arrow`;
  const centerY = TOP + BOX_H / 2;

  return (
    <svg
      className="arch-svg"
      viewBox="0 0 960 300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-labelledby={`${id}-title ${id}-desc`}
    >
      <title id={`${id}-title`}>
        Delivery pipeline: commit, build and test, security scan, publish, deploy and
        observe, with production feedback feeding the next build.
      </title>
      <desc id={`${id}-desc`}>
        Every merged change is built and tested automatically, scanned for dependency,
        secret and static-analysis issues, published as an immutable container image and
        rolled out to Kubernetes. Logs, metrics, traces and incidents from production
        flow back into the next build as the feedback loop.
      </desc>
      <ArrowDefs id={markerId} />

      {STAGES.map((stage, index) => (
        <Node
          key={stage.label}
          x={X0 + index * STEP}
          y={TOP}
          w={BOX_W}
          h={BOX_H}
          step={`0${index + 1}`}
          {...stage}
        />
      ))}

      {STAGES.slice(0, -1).map((stage, index) => (
        <Link
          key={stage.label}
          path={`M ${X0 + index * STEP + BOX_W + 4} ${centerY} L ${
            X0 + (index + 1) * STEP - 6
          } ${centerY}`}
          markerId={markerId}
        />
      ))}

      <Link
        path={`M ${X0 + 5 * STEP + BOX_W / 2} ${TOP + BOX_H + 4} L ${
          X0 + 5 * STEP + BOX_W / 2
        } 244 L ${X0 + BOX_W / 2} 244 L ${X0 + BOX_W / 2} ${TOP + BOX_H + 8}`}
        dashed
        markerId={markerId}
      />
      <text className="arch-sub" x="480" y="272" textAnchor="middle">
        Production feedback: logs, metrics, traces and incidents shape the next change
      </text>
    </svg>
  );
};