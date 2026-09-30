import { Col } from "react-bootstrap";
import { Diagram3 } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";

export const CaseStudyCard = ({
  title,
  sector,
  period,
  role,
  problem,
  approach,
  outcome,
  metrics,
  stack,
  diagram,
  diagramTitle,
  onShowDiagram,
}) => {
  return (
    <Col size={12}>
      <TrackVisibility>
        {({ isVisible }) => (
          <article
            className={`case-card card-base ${
              isVisible ? "animate__animated animate__fadeInUp" : ""
            }`}
            aria-label={`${title} case study`}
          >
            <header className="case-head">
              <div>
                <h3>{title}</h3>
                <p className="case-meta">
                  <span className="case-sector">{sector}</span>
                  <span>{role}</span>
                </p>
              </div>
              <span className="case-period">{period}</span>
            </header>

            <div className="case-body">
              <div className="case-block">
                <h4 className="case-label">The problem</h4>
                <p className="case-text">{problem}</p>
              </div>

              <div className="case-block">
                <h4 className="case-label">What I did</h4>
                <ol className="case-steps" aria-label="What I did">
                  {approach.map((step) => (
                    <li key={step.title}>
                      <strong>{step.title}</strong>
                      <span>{step.detail}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="case-block">
                <h4 className="case-label">Result</h4>
                <p className="case-text">{outcome}</p>
                <ul className="case-metrics" aria-label="Outcome metrics">
                  {metrics.map((metric) => (
                    <li className="case-metric" key={metric.label}>
                      <span className="case-metric-value">{metric.value}</span>
                      <span className="case-metric-label">{metric.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <footer className="case-foot">
              <div className="tag-row">
                {stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="case-diagram-link"
                onClick={() => onShowDiagram(diagram)}
              >
                <Diagram3 size={16} aria-hidden="true" /> {diagramTitle}
              </button>
            </footer>
          </article>
        )}
      </TrackVisibility>
    </Col>
  );
};