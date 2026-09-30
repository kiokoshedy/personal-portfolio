import { Container, Row, Col } from "react-bootstrap";
import logo from "../utils/images/logo.png";
import { navLinks, profile } from "../data/portfolio";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Shadrack Kioko" />
            <p className="footer-role">
              {profile.roleLine} &middot; {profile.location}
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <nav className="footer-links" aria-label="Footer">
              {navLinks.map(({ id, label }) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </nav>
            <SocialLinks size={16} />
            <p>
              &copy; {year} {profile.name}. All rights reserved. &middot;{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
