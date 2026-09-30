import { Container, Row } from "react-bootstrap";
import { caseStudies, architectureDiagrams } from "../data/portfolio";
import { CaseStudyCard } from "./CaseStudyCard";
import { SectionHeading } from "./SectionHeading";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const CaseStudies = ({ onShowDiagram }) => {
  return (
    <section className="case-studies" id="case-studies">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Case Studies"
          subtitle="Three engagements, described end to end: the constraint, the decisions, and what changed as a result."
        />
        <Row className="g-4">
          {caseStudies.map((study) => {
            const diagram = architectureDiagrams.find(
              ({ id }) => id === study.diagram
            );
            return (
              <CaseStudyCard
                key={study.id}
                {...study}
                diagramTitle={
                  diagram ? `See: ${diagram.title}` : "See the architecture"
                }
                onShowDiagram={onShowDiagram}
              />
            );
          })}
        </Row>
        <TrackVisibility>
          {({ isVisible }) => (
            <p
              className={`project-note ${
                isVisible ? "animate__animated animate__fadeIn" : ""
              }`}
            >
              Client work is under NDA — happy to walk through the architecture,
              trade-offs and delivery detail in an interview.
            </p>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};