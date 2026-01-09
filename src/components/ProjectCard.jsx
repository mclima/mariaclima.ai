'use client';

import { useRef } from "react";
import { gsap } from "gsap";
import { IoLogoGithub } from 'react-icons/io'
import { TbWorldWww } from 'react-icons/tb'

export default function ProjectCard({ title, description, tech, githubLink, liveLink }) {
  const cardRef = useRef(null);

  const onEnter = () => {
    gsap.to(cardRef.current, { scale: 1.03, duration: 0.3 });
  };

  const onLeave = () => {
    gsap.to(cardRef.current, { scale: 1, duration: 0.3 });
  };

  return (
    <article
      ref={cardRef}
      className="card"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <h3>{title}</h3>
      <p style={{ color: "#b5b5b5" }}>{description}</p>
      {tech && (
        <div className="tech-stack">
          {tech.map((item) => (
            <span key={item} className="tech-tag">{item}</span>
          ))}
        </div>
      )}
      <div className="project-cta">
              {githubLink && (
                <a 
                  href={githubLink} 
                  className="btn sm primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} on GitHub`}
                >
                  <IoLogoGithub />
                </a>
              )}
              {liveLink && (
                <a 
                  href={liveLink} 
                  className="btn sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${title} live site`}
                >
                  <TbWorldWww />
                </a>
              )}
            
            </div>
    </article>
  );
}
