import { Container, Row, Col } from "react-bootstrap";
import { People, RocketTakeoff, Compass } from "react-bootstrap-icons";
import { positioning } from "../data/portfolio";
import "animate.css";
import TrackVisibility from "react-on-screen";

const icons = {
  people: People,
  rocket: RocketTakeoff,
  compass: Compass,
};

export const Positioning = () => {
  return (
    <section className="positioning" id="positioning">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__fadeInUp" : ""
              }
            >
              <span className="section-eyebrow">Positioning</span>
              <p className="positioning-statement">{positioning.statement}</p>
            </div>
          )}
        </TrackVisibility>

        <Row className="g-4">
          {positioning.pillars.map((pillar, index) => {
            const Icon = icons[pillar.icon];
            return (
              <Col size={12} md={4} key={pillar.title}>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={`positioning-card card-base ${
                        isVisible ? "animate__animated animate__fadeInUp" : ""
                      }`}
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="positioning-head">
                        <span className="icon-tile" aria-hidden="true">
                          <Icon size={20} />
                        </span>
                        <h3>{pillar.title}</h3>
                      </div>
                      <ul className="positioning-points">
                        {pillar.points.map((point) => (
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

        <div className="positioning-roles">
          <span className="positioning-roles-label">Roles I am targeting</span>
          <div className="tag-row">
            {positioning.idealRoles.map((role) => (
              <span className="tag" key={role}>
                {role}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};