import { Container, Row, Col } from "react-bootstrap";
import { experience } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          subtitle="Seven years delivering customer-facing platforms in regulated enterprise environments — from technical design through production release and support."
        />
        <Row>
          <Col size={12}>
            <div className="timeline">
              {experience.map((job) => (
                <TrackVisibility key={`${job.company}-${job.period}`}>
                  {({ isVisible }) => (
                    <article
                      className={`timeline-item ${
                        isVisible ? "animate__animated animate__fadeInUp" : ""
                      }`}
                    >
                      <div className="timeline-marker" aria-hidden="true"></div>
                      <div className="timeline-card">
                        <div className="timeline-head">
                          <div>
                            <h3>{job.role}</h3>
                            <p className="timeline-company">
                              {job.company}
                              <span className="timeline-sector">
                                {job.sector}
                              </span>
                            </p>
                          </div>
                          <span className="timeline-period">
                            {job.period}
                            {job.current && (
                              <span className="timeline-current">Current</span>
                            )}
                          </span>
                        </div>
                        <ul className="timeline-points">
                          {job.highlights.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                        <div className="tag-row">
                          {job.stack.map((tech) => (
                            <span className="tag" key={tech}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  )}
                </TrackVisibility>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
