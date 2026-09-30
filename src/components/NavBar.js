import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FileEarmarkPerson, ChatSquareText } from "react-bootstrap-icons";
import logo from "../utils/images/logo.png";
import { navLinks } from "../data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export const NavBar = ({ onOpenCv }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveLink(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Navbar expand="xl" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" aria-label="Shadrack Kioko — home">
          <img src={logo} alt="Shadrack Kioko" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map(({ id, label }) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                className={
                  activeLink === id ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink(id)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <ThemeToggle compact />
            <button type="button" className="vvd" onClick={onOpenCv}>
              <span>
                <FileEarmarkPerson size={15} className="me-2" />
                CV
              </span>
            </button>
          </span>
        </Navbar.Collapse>
        <div className="navbar-mobile-tools">
          <ThemeToggle />
          <button type="button" className="cv-btn" onClick={onOpenCv}>
            <FileEarmarkPerson size={15} /> View CV
          </button>
          <a className="cv-btn primary" href="#contact">
            <ChatSquareText size={15} /> Let&rsquo;s Connect
          </a>
        </div>
      </Container>
    </Navbar>
  );
};
