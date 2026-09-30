import { Container, Row, Col } from "react-bootstrap";
import { FileEarmarkPerson } from "react-bootstrap-icons";
import logo from "../utils/images/logo.png";
import { footerLinks, profile } from "../data/portfolio";
import { SocialLinks } from "./SocialLinks";
import { ThemeToggle } from "./ThemeToggle";

export const Footer = ({ onOpenCv }) => {
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
            <p className="footer-links footer-links-left">
              <button type="button" className="footer-plain-link" onClick={onOpenCv}>
                <FileEarmarkPerson size={14} /> View printable CV
              </button>
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <nav className="footer-links" aria-label="Footer">
              {footerLinks.map(({ id, label }) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </nav>
            <div className="footer-tools">
              <ThemeToggle compact />
              <SocialLinks size={16} />
            </div>
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
