/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, ArrowDownCircle } from "react-bootstrap-icons";
import { profile, heroStats } from "../data/portfolio";
import { SocialLinks } from "./SocialLinks";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const toRotate = profile.rotatingTitles;

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">{profile.tagline}</span>
                  <h1>
                    Hi, I&rsquo;m {profile.firstName}.
                    <span className="banner-role">
                      <span className="txt-rotate">
                        <span className="wrap">{text}</span>
                      </span>
                    </span>
                  </h1>
                  <p className="banner-lead">{profile.summary}</p>
                  <p className="banner-lead">{profile.summarySecondary}</p>
                  <div className="banner-actions">
                    <button
                      type="button"
                      className="btn-primary-lg"
                      onClick={() => scrollTo("contact")}
                    >
                      Let&rsquo;s Connect <ArrowRightCircle size={24} />
                    </button>
                    <button
                      type="button"
                      className="btn-ghost-lg"
                      onClick={() => scrollTo("experience")}
                    >
                      View Experience <ArrowDownCircle size={22} />
                    </button>
                  </div>
                  <div className="banner-stats">
                    {heroStats.map((stat) => (
                      <div className="banner-stat" key={stat.label}>
                        <span className="banner-stat-value">{stat.value}</span>
                        <span className="banner-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} lg={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInUp" : ""
                  }
                >
                  <aside className="profile-card" aria-label="Contact details">
                    <div className="profile-card-head">
                      <span className="profile-monogram">SK</span>
                      <div>
                        <h3>{profile.name}</h3>
                        <p>{profile.roleLine}</p>
                      </div>
                    </div>
                    <ul className="profile-details">
                      <li>
                        <span className="profile-detail-label">Location</span>
                        <span>{profile.location}</span>
                      </li>
                      <li>
                        <span className="profile-detail-label">Email</span>
                        <a href={`mailto:${profile.email}`}>{profile.email}</a>
                      </li>
                      <li>
                        <span className="profile-detail-label">Phone</span>
                        <a href={profile.phoneHref}>{profile.phone}</a>
                      </li>
                      <li>
                        <span className="profile-detail-label">Focus</span>
                        <span>
                          Insurance &amp; financial platforms, payments,
                          cloud-native delivery
                        </span>
                      </li>
                    </ul>
                    <SocialLinks className="profile-card-socials" size={20} />
                  </aside>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
