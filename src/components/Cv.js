import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  ArrowLeftCircle,
  Download,
  Printer,
  FileEarmarkPdf,
} from "react-bootstrap-icons";
import {
  profile,
  site,
  competencies,
  experience,
  caseStudies,
  impactMetrics,
  leadershipHighlights,
  ownershipPractices,
  education,
  references,
} from "../data/portfolio";

export const useCvPdfAvailable = () => {
  const [hasPdf, setHasPdf] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const setAvailable = (available) => {
      if (!cancelled) {
        setHasPdf(available);
      }
    };

    if (typeof fetch !== "function") {
      return undefined;
    }

    fetch(site.cvPdf, { method: "HEAD" })
      .then((response) => setAvailable(response.ok))
      .catch(() => setAvailable(false));

    return () => {
      cancelled = true;
    };
  }, []);

  return hasPdf;
};

export const Cv = ({ onBack }) => {
  const hasPdf = useCvPdfAvailable();

  return (
    <div className="cv-page">
      <Container>
        <div className="cv-toolbar">
          <span className="cv-toolbar-hint">
            This page is formatted for print — use your browser to save it as a
            PDF.
          </span>
          <div className="cv-toolbar-actions">
            <button type="button" className="cv-btn" onClick={onBack}>
              <ArrowLeftCircle size={16} /> Back to site
            </button>
            <button
              type="button"
              className="cv-btn"
              onClick={() => window.print()}
            >
              <Printer size={16} /> Print
            </button>
            {hasPdf ? (
              <a
                className="cv-btn primary"
                href={site.cvPdf}
                target="_blank"
                rel="noreferrer"
                aria-label="Download CV as PDF"
              >
                <FileEarmarkPdf size={16} /> Download PDF
              </a>
            ) : (
              <button
                type="button"
                className="cv-btn primary"
                onClick={() => window.print()}
                aria-label="Save this CV as PDF"
              >
                <Download size={16} /> Save as PDF
              </button>
            )}
          </div>
        </div>

        <article className="cv-sheet">
          <header className="cv-header">
            <h1>{profile.name}</h1>
            <p className="cv-role-line">{profile.roleLine}</p>
            <div className="cv-contact">
              <span>{profile.location}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.phoneHref}>{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/shadrack-kioko
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                github.com/kiokoshedy
              </a>
            </div>
            <p className="cv-summary">{profile.summary}</p>
            <p className="cv-summary">{profile.summarySecondary}</p>
          </header>

          <section className="cv-block">
            <h2 className="cv-block-title">Impact at a glance</h2>
            <ul className="cv-impact">
              {impactMetrics.map((metric) => (
                <li key={metric.label}>
                  <strong>{metric.value}</strong> {metric.label.toLowerCase()}
                </li>
              ))}
            </ul>
          </section>

          <section className="cv-block">
            <h2 className="cv-block-title">Technical skills</h2>
            <p className="cv-skills">
              {competencies.map((group) => group.items.join(", ")).join(" · ")}
            </p>
          </section>

          <section className="cv-block">
            <h2 className="cv-block-title">Professional experience</h2>
            {experience.map((job) => (
              <div className="cv-job" key={`${job.company}-${job.period}`}>
                <div className="cv-job-head">
                  <div>
                    <h3>
                      {job.role} — {job.company}
                    </h3>
                    <p className="cv-job-meta">
                      {job.sector} · {job.stack.slice(0, 5).join(", ")}
                    </p>
                  </div>
                  <span className="cv-job-period">{job.period}</span>
                </div>
                <ul>
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="cv-block">
            <h2 className="cv-block-title">Selected work</h2>
            {caseStudies.map((study) => (
              <div className="cv-work-item" key={study.id}>
                <h4>{study.title}</h4>
                <p>
                  {[
                    study.sector,
                    study.stack.slice(0, 4).join(", "),
                    study.metrics
                      .map(({ value, label }) => `${value} ${label.toLowerCase()}`)
                      .join("; "),
                  ].join(" · ")}
                </p>
              </div>
            ))}
          </section>

          <section className="cv-block cv-two-col">
            <div>
              <h2 className="cv-block-title">Technical leadership</h2>
              <ul className="cv-compact-list">
                {leadershipHighlights.map((highlight) => (
                  <li key={highlight.title}>
                    <strong>{highlight.title}:</strong> {highlight.headline}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="cv-block-title">Production ownership</h2>
              <ul className="cv-compact-list">
                {ownershipPractices.map((practice) => (
                  <li key={practice.title}>
                    <strong>{practice.title}:</strong> {practice.headline}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="cv-block cv-two-col">
            <div>
              <h2 className="cv-block-title">Education</h2>
              {education.map((item) => (
                <div className="cv-education-item" key={item.qualification}>
                  <h4>{item.qualification}</h4>
                  <p>
                    {item.institution} · {item.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="cv-block-title">References</h2>
              {references.map((reference) => (
                <div className="cv-reference-item" key={reference.name}>
                  <h4>{reference.name}</h4>
                  <p>
                    {reference.role}, {reference.company}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <p className="cv-footnote">
            References available on request. Based in {profile.location} — open
            to on-site, hybrid and remote roles.
          </p>
        </article>
      </Container>
    </div>
  );
};
