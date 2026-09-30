import { Container, Row, Col } from "react-bootstrap";
import { ownershipPractices } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Ownership = () => {
  return (
    <section className="ownership" id="ownership">
      <Container>
        <SectionHeading
          eyebrow="After release"
          title="Production Ownership"
          subtitle="Shipping is the midpoint. What I do once code is live is the part of the job that decides whether the system is trusted a year later."
        />
        <Row className="g-4">
          {ownershipPractices.map((practice, index) => (
            <Col size={12} md={6} key={practice.title}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={`ownership-card card-base ${
                      isVisible ? "animate__animated animate__fadeInUp" : ""
                    }`}
                    style={{ animationDelay: `${(index % 2) * 80}ms` }}
                  >
                    <div className="ownership-head">
                      <span className="ownership-index" aria-hidden="true">
                        {`0${index + 1}`}
                      </span>
                      <h3>{practice.title}</h3>
                    </div>
                    <ul className="ownership-points">
                      {practice.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};