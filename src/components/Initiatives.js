import { Container, Row } from "react-bootstrap";
import { InitiativeCard } from "./InitiativeCard";
import { initiatives } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Initiatives = () => {
  return (
    <section className="project" id="initiatives">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Initiatives"
          subtitle="Representative delivery across insurance, payments and enterprise integration work in regulated environments."
        />
        <Row className="g-4">
          {initiatives.map((initiative) => (
            <InitiativeCard key={initiative.title} {...initiative} />
          ))}
        </Row>
        <TrackVisibility>
          {({ isVisible }) => (
            <p
              className={`project-note ${
                isVisible ? "animate__animated animate__fadeIn" : ""
              }`}
            >
              Client work is under NDA — happy to walk through architecture,
              trade-offs and delivery detail in an interview.
            </p>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
