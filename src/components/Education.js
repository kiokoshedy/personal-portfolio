import { Container, Row, Col } from "react-bootstrap";
import { Mortarboard } from "react-bootstrap-icons";
import { education, profile } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <SectionHeading
          eyebrow="Background"
          title="Education"
          subtitle="Mathematics and computer science fundamentals, applied to enterprise software engineering."
        />
        <Row>
          <Col size={12} lg={8}>
            {education.map((item) => (
              <TrackVisibility key={item.qualification}>
                {({ isVisible }) => (
                  <div
                    className={`education-card ${
                      isVisible ? "animate__animated animate__fadeInUp" : ""
                    }`}
                  >
                    <span className="education-icon" aria-hidden="true">
                      <Mortarboard size={24} />
                    </span>
                    <div>
                      <h3>{item.qualification}</h3>
                      <p className="education-institution">
                        {item.institution}
                        <span className="education-period">{item.period}</span>
                      </p>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            ))}
            <TrackVisibility>
              {({ isVisible }) => (
                <p
                  className={`education-note ${
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  Professional references available on request. Based in{" "}
                  {profile.location} — open to on-site, hybrid and remote roles.
                </p>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
