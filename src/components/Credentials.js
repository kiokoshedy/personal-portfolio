import { Container, Row, Col } from "react-bootstrap";
import { PatchCheckFill, Quote, Envelope } from "react-bootstrap-icons";
import { certifications, references, profile } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import "animate.css";
import TrackVisibility from "react-on-screen";

const referenceSubject = encodeURIComponent(
  `Reference request — ${profile.name}`
);

export const Credentials = () => {
  return (
    <section className="credentials" id="credentials">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & References"
          subtitle="Verified credentials on request, plus the engineering leads I have worked alongside."
        />

        {certifications.length > 0 ? (
          <Row className="g-4">
            {certifications.map((cert) => (
              <Col size={12} md={6} lg={4} key={cert.name}>
                <div className="credential-card card-base">
                  <span className="icon-tile" aria-hidden="true">
                    <PatchCheckFill size={22} />
                  </span>
                  <div>
                    <h3>{cert.name}</h3>
                    <p className="credential-meta">
                      {[cert.issuer, cert.year].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <TrackVisibility>
            {({ isVisible }) => (
              <p
                className={`credential-note ${
                  isVisible ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                Professional certifications are held and verified on request —{" "}
                <strong>ask and I will share the details</strong> for the roles
                you have in mind.
              </p>
            )}
          </TrackVisibility>
        )}

        <div className="row g-4 credentials-references">
          {references.map((reference) => (
            <Col size={12} md={6} key={reference.name}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={`credential-card card-base ${
                      isVisible ? "animate__animated animate__fadeInUp" : ""
                    }`}
                  >
                    <span className="icon-tile" aria-hidden="true">
                      <Quote size={20} />
                    </span>
                    <div>
                      <h3>{reference.name}</h3>
                      <p className="credential-meta">
                        {reference.role} · {reference.company}
                      </p>
                      <p className="credential-meta">
                        <a
                          href={`mailto:${profile.email}?subject=${referenceSubject}`}
                          className="cv-btn credential-link"
                        >
                          <Envelope size={14} /> Request reference
                        </a>
                      </p>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </div>
      </Container>
    </section>
  );
};
