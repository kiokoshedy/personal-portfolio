import { Container } from "react-bootstrap";
import { architectureDiagrams } from "../data/portfolio";
import { PlatformDiagram } from "./diagrams/PlatformDiagram";
import { EventFlowDiagram } from "./diagrams/EventFlowDiagram";
import { DeliveryPipelineDiagram } from "./diagrams/DeliveryPipelineDiagram";
import { SectionHeading } from "./SectionHeading";
import "animate.css";
import TrackVisibility from "react-on-screen";

const diagrams = {
  platform: PlatformDiagram,
  events: EventFlowDiagram,
  delivery: DeliveryPipelineDiagram,
};

export const Architecture = ({ activeDiagram, onSelectDiagram }) => {
  const current =
    architectureDiagrams.find(({ id }) => id === activeDiagram) ??
    architectureDiagrams[0];
  const Diagram = diagrams[current.id] ?? PlatformDiagram;

  return (
    <section className="architecture" id="architecture">
      <Container>
        <SectionHeading
          eyebrow="How I build"
          title="Architecture & Delivery"
          subtitle="Diagrams of the shapes I design most: a layered customer platform, event-driven payment processing, and the pipeline that gets changes into production."
        />

        <div className="arch-switcher" role="group" aria-label="Choose a diagram">
          {architectureDiagrams.map(({ id, title }) => (
            <button
              key={id}
              type="button"
              className={
                id === current.id ? "arch-tab active" : "arch-tab"
              }
              aria-pressed={id === current.id}
              onClick={() => onSelectDiagram(id)}
            >
              {title}
            </button>
          ))}
        </div>

        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={`arch-card card-base ${
                isVisible ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <figure className="arch-figure">
                <Diagram id={current.id} />
                <figcaption className="arch-caption">{current.caption}</figcaption>
              </figure>
              <ul className="arch-highlights">
                {current.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </TrackVisibility>

        <p className="project-note">
          Diagrams are simplified for clarity and drawn to describe patterns I have
          shipped, not to expose a client&rsquo;s system. Happy to walk through the
          detail, including the trade-offs, in an interview.
        </p>
      </Container>
    </section>
  );
};