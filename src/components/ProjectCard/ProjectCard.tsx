import { useEffect, useRef } from 'react';
import React from 'react';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  uris: string[];
  name: string;
  description: string;
  attributes: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  uris,
  name,
  description,
  attributes,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateUp);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('h2, p, li');
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.container}`} ref={containerRef}>
      {uris.map((uri, index) =>
        index === 0 ? (
          <img className={`${styles.image}`} src={uri} key={uri} />
        ) : (
          <img
            className={`${styles.image} ${styles.noshow}`}
            src={uri}
            key={uri}
          />
        )
      )}
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p>{description}</p>
        <ul className={styles.attributes}>
          {attributes.map((attribute) => (
            <li className={styles.projectAttribute} key={attribute}>
              {attribute}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;