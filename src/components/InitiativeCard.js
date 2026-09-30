import { Col } from "react-bootstrap";
import { ArrowUpRight } from "react-bootstrap-icons";

export const InitiativeCard = ({ title, summary, details = [], stack = [] }) => {
  return (
    <Col size={12} lg={4}>
      <div className="initiative-card">
        <div className="initiative-card-head">
          <h3>{title}</h3>
          <span className="initiative-arrow" aria-hidden="true">
            <ArrowUpRight size={20} />
          </span>
        </div>
        <p className="initiative-summary">{summary}</p>
        <ul className="initiative-details">
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <div className="tag-row">
          {stack.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Col>
  );
};
