import { Container, Row, Col } from "react-bootstrap";
import {
  Layers,
  CodeSlash,
  Database,
  Cloud,
  Robot,
  ShieldCheck,
  People,
} from "react-bootstrap-icons";
import { competencies } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import "animate.css";
import TrackVisibility from "react-on-screen";

const icons = {
  layers: Layers,
  code: CodeSlash,
  database: Database,
  cloud: Cloud,
  robot: Robot,
  shield: ShieldCheck,
  people: People,
};

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Core Competencies"
          subtitle="Full-stack engineering depth on the backend and frontend, cloud-native delivery, and the engineering practices that keep regulated systems secure and maintainable."
        />
        <Row className="g-4">
          {competencies.map((group, index) => {
            const Icon = icons[group.icon];
            return (
              <Col size={12} md={6} lg={4} key={group.title}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={`skill-card ${
                        isVisible ? "animate__animated animate__fadeInUp" : ""
                      }`}
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      <div className="skill-card-head">
                        <span className="skill-icon" aria-hidden="true">
                          <Icon size={22} />
                        </span>
                        <h3>{group.title}</h3>
                      </div>
                      <div className="tag-row">
                        {group.items.map((item) => (
                          <span className="tag" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
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
