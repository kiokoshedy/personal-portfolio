import { Linkedin, Github, Envelope, Telephone } from "react-bootstrap-icons";
import { socials } from "../data/portfolio";

const icons = {
  linkedin: Linkedin,
  github: Github,
  mail: Envelope,
  phone: Telephone,
};

export const SocialLinks = ({ className = "", size = 18 }) => {
  return (
    <div className={`social-icon ${className}`.trim()}>
      {socials.map(({ name, href, icon }) => {
        const Icon = icons[icon];
        return (
          <a
            key={name}
            href={href}
            target={icon === "linkedin" || icon === "github" ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={name}
            title={name}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
};
