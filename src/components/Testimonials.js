import { Container, Row, Col } from "react-bootstrap";
import { Quote, ChatQuote, Envelope } from "react-bootstrap-icons";
import { testimonials, references, profile } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import "animate.css";
import TrackVisibility from "react-on-screen";

const referenceSubject = encodeURIComponent(
  `Reference request — ${profile.name}`
);

const referenceHref = `mailto:${profile.email}?subject=${referenceSubject}`;

export const Testimonials = () => {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section className="testimonials" id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="In their words"
          title="Testimonials"
          subtitle={
            hasTestimonials
              ? "Feedback from the teams and clients I have delivered with."
              : "Feedback from the teams I have led for, pending written sign-off."
          }
        />

        {hasTestimonials ? (
          <Row className="g-4">
            {testimonials.map((testimonial) => (
              <Col size={12} md={6} key={`${testimonial.name}-${testimonial.role}`}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <figure
                      className={`testimonial-card card-base ${
                        isVisible ? "animate__animated animate__fadeInUp" : ""
                      }`}
                    >
                      <Quote size={22} aria-hidden="true" className="testimonial-mark" />
                      <blockquote>{testimonial.quote}</blockquote>
                      <figcaption>
                        <strong>{testimonial.name}</strong>
                        {[testimonial.role, testimonial.company]
                          .filter(Boolean)
                          .join(" · ")}
                      </figcaption>
                    </figure>
                  )}
                </TrackVisibility>
              </Col>
            ))}
          </Row>
        ) : (
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__fadeIn" : ""
                }
              >
                <Row className="g-4 testimonial-slots">
                  {references.map((reference) => (
                    <Col size={12} md={6} key={reference.name}>
                      <div className="testimonial-slot">
                        <ChatQuote size={22} aria-hidden="true" />
                        <span className="testimonial-slot-label">
                          Reference slot
                        </span>
                        <p>
                          Written feedback from{" "}
                          <strong>
                            {reference.name}, {reference.role} at{" "}
                            {reference.company}
                          </strong>{" "}
                          — available directly on request.
                        </p>
                        <a className="cv-btn" href={referenceHref}>
                          <Envelope size={15} aria-hidden="true" /> Request this
                          reference
                        </a>
                      </div>
                    </Col>
                  ))}
                </Row>
                <p className="testimonial-note">
                  Slots are reserved rather than filled with paraphrased praise — I
                  would rather quote people accurately or not at all. Add entries to{" "}
                  <code>testimonials</code> in <code>src/data/portfolio.js</code> and
                  this section renders them automatically.
                </p>
              </div>
            )}
          </TrackVisibility>
        )}
      </Container>
    </section>
  );
};