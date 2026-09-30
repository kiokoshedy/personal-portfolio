import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { profile } from "../data/portfolio";
import { SocialLinks } from "./SocialLinks";
import "animate.css";
import TrackVisibility from "react-on-screen";

const CONTACT_API =
  process.env.REACT_APP_CONTACT_API || "http://localhost:5000";

const formInitialDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export const draftMailto = (details) => {
  const subject = `Portfolio enquiry from ${details.firstName} ${details.lastName}`;
  const body = [
    `Name: ${details.firstName} ${details.lastName}`,
    `Email: ${details.email}`,
    `Phone: ${details.phone || "Not provided"}`,
    "",
    details.message,
  ].join("\n");

  return `mailto:${profile.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

const openDraft = (details) => {
  try {
    window.location.href = draftMailto(details);
    return true;
  } catch (error) {
    return false;
  }
};

export const Contact = () => {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({ success: null, message: "" });

  const onFormUpdate = (category, value) => {
    setFormDetails((prev) => ({ ...prev, [category]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setStatus({ success: null, message: "" });

    try {
      const response = await fetch(`${CONTACT_API}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (response.ok && result.code === 200) {
        setStatus({
          success: true,
          message: "Message sent successfully. I'll get back to you shortly.",
        });
        setFormDetails(formInitialDetails);
        return;
      }

      // 4xx validation/rate-limit problems are the visitor's to fix; anything else
      // falls back to a prefilled draft so nobody is left without a way to reach me.
      if (response.status === 400 || response.status === 429) {
        setStatus({
          success: false,
          message: `${
            result.message || "Something went wrong, please try again."
          } You can also email me directly at ${profile.email}.`,
        });
        return;
      }

      if (openDraft(formDetails)) {
        setStatus({
          success: false,
          message: `The contact service is unavailable (${
            result.message || "no response"
          }), so I've opened a prefilled message in your mail app — just press send there. You can also email me directly at ${
            profile.email
          }.`,
        });
      } else {
        setStatus({
          success: false,
          message: `The contact service is unavailable. Please email me directly at ${profile.email}.`,
        });
      }
    } catch (error) {
      if (openDraft(formDetails)) {
        setStatus({
          success: false,
          message: `Could not reach the contact service, so I've opened a prefilled message in your mail app — just press send there. You can also email me directly at ${profile.email}.`,
        });
      } else {
        setStatus({
          success: false,
          message: `Could not reach the contact service. Email me directly at ${profile.email}.`,
        });
      }
    } finally {
      setButtonText("Send Message");
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} lg={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="contact-details">
                    <h2>Get In Touch</h2>
                    <p className="contact-lead">
                      Interested in a senior engineering or technical lead
                      role? Send a note and I&rsquo;ll respond within a couple
                      of days.
                    </p>
                    <ul className="contact-list">
                      <li>
                        <span className="contact-label">Email</span>
                        <a href={`mailto:${profile.email}`}>{profile.email}</a>
                      </li>
                      <li>
                        <span className="contact-label">Phone</span>
                        <a href={profile.phoneHref}>{profile.phone}</a>
                      </li>
                      <li>
                        <span className="contact-label">Location</span>
                        <span>{profile.location}</span>
                      </li>
                      <li>
                        <span className="contact-label">LinkedIn</span>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer">
                          in/shadrack-kioko
                        </a>
                      </li>
                      <li>
                        <span className="contact-label">GitHub</span>
                        <a href={profile.github} target="_blank" rel="noreferrer">
                          github.com/kiokoshedy
                        </a>
                      </li>
                    </ul>
                    <SocialLinks size={20} />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} lg={{ span: 6, offset: 1 }}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInUp" : ""
                  }
                >
                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate("email", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <label htmlFor="phone">Phone</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate("phone", e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="6"
                          required
                          value={formDetails.message}
                          placeholder="What are you building?"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit" disabled={buttonText !== "Send Message"}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col size={12} className="px-1">
                          <p
                            role="status"
                            aria-live="polite"
                            className={status.success ? "success" : "danger"}
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
