import { Container, Row, Col } from "react-bootstrap";
import {
  ClockHistory,
  ShieldCheck,
  Stack,
  Cloud,
  PatchCheck,
} from "react-bootstrap-icons";
import { impactMetrics, skillEvidence, competencies } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import "animate.css";
import TrackVisibility from "react-on-screen";

const icons = {
  clock: ClockHistory,
  shield: ShieldCheck,
  stack: Stack,
  cloud: Cloud,
};

export const Impact = () => {
  return (
    <section className="impact" id="impact">
      <Container>
        <SectionHeading
          eyebrow="Outcomes"
          title="Impact & Evidence"
          subtitle="Numbers first, then the proof behind each capability — because a percentage on its own is not evidence."
        />

        <Row className="g-4 impact-metrics">
          {impactMetrics.map((metric, index) => {
            const Icon = icons[metric.icon];
            return (
              <Col size={12} sm={6} lg={3} key={metric.label}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={`impact-metric card-base ${
                        isVisible ? "animate__animated animate__fadeInUp" : ""
                      }`}
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      <span className="icon-tile" aria-hidden="true">
                        <Icon size={20} />
                      </span>
                      <span className="impact-metric-value">{metric.value}</span>
                      <span className="impact-metric-label">{metric.label}</span>
                      <span className="impact-metric-detail">{metric.detail}</span>
                    </div>
                  )}
                </TrackVisibility>
              </Col>
            );
          })}
        </Row>

        <div className="impact-evidence">
          <h3 className="impact-evidence-title">
            Evidence behind each competency
          </h3>
          <Row className="g-4">
            {skillEvidence.map((item, index) => {
              const competency = competencies.find(
                (group) => group.title === item.skill
              );
              return (
                <Col size={12} lg={6} key={item.skill}>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <article
                        className={`evidence-card card-base ${
                          isVisible ? "animate__animated animate__fadeInUp" : ""
                        }`}
                        style={{ animationDelay: `${(index % 2) * 80}ms` }}
                        aria-label={`${item.skill} — evidence`}
                      >
                        <div className="evidence-head">
                          <span className="evidence-skill">
                            <PatchCheck size={16} aria-hidden="true" />
                            {item.skill}
                          </span>
                          {competency && (
                            <span className="evidence-level">
                              {competency.level}% proficiency
                            </span>
                          )}
                        </div>
                        <p className="evidence-claim">{item.claim}</p>
                        <ul className="evidence-points">
                          {item.evidence.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </article>
                    )}
                  </TrackVisibility>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};