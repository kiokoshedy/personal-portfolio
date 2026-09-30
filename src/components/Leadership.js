import { Container, Row, Col } from "react-bootstrap";
import { Compass, People, Layers, Robot } from "react-bootstrap-icons";
import { leadershipHighlights } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import "animate.css";
import TrackVisibility from "react-on-screen";

const icons = {
  compass: Compass,
  people: People,
  layers: Layers,
  robot: Robot,
};

export const Leadership = () => {
  return (
    <section className="leadership" id="leadership">
      <Container>
        <SectionHeading
          eyebrow="Beyond the ticket"
          title="Technical Leadership"
          subtitle="Leading engineers is a different job from writing them. This is how I show up when the work needs ownership rather than throughput."
        />
        <Row className="g-4">
          {leadershipHighlights.map((highlight, index) => {
            const Icon = icons[highlight.icon];
            return (
              <Col size={12} md={6} key={highlight.title}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={`leadership-card card-base ${
                        isVisible ? "animate__animated animate__fadeInUp" : ""
                      }`}
                      style={{ animationDelay: `${(index % 2) * 80}ms` }}
                    >
                      <div className="leadership-head">
                        <span className="icon-tile" aria-hidden="true">
                          <Icon size={20} />
                        </span>
                        <h3>{highlight.title}</h3>
                      </div>
                      <p className="leadership-summary">{highlight.summary}</p>
                      <ul className="leadership-points">
                        {highlight.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </TrackVisibility>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};