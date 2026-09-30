export const SectionHeading = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="section-heading">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};
