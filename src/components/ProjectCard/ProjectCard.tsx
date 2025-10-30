import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './ProjectCard.module.scss';

import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { FaGithub } from 'react-icons/fa6';
import { FaGlobe } from 'react-icons/fa6';

interface ProjectCardProps {
  uris: string[];
  name: string;
  description: string;
  attributes: string[];
  links: string[][];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  uris,
  name,
  description,
  attributes,
  links,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.showY);
          }
        });
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('h2, p, li, img');
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.container}`} ref={containerRef}>
      <ImageCarousel uris={uris} />
      <div className={styles.content}>
        <h2 className={`${styles.title} ${styles.hiddenY}`}>{name}</h2>
        <p className={styles.hiddenY}>{description}</p>
        <ul className={styles.attributes}>
          {attributes.map((attribute) => (
            <li
              className={`${styles.projectAttribute} ${styles.hiddenY}`}
              key={attribute}
            >
              {attribute}
            </li>
          ))}
        </ul>
        <ul>
          {links.map((link) => (
            <li className={`${styles.links} ${styles.hiddenY}`} key={link[1]}>
              {(() => {
                switch (link[0]) {
                  case 'Github':
                    return (
                      <Link to={link[1]} target="_blank">
                        <FaGithub size={40} />
                      </Link>
                    );
                  case 'Live':
                    return (
                      <Link to={link[1]} target="_blank">
                        <FaGlobe size={35} />
                      </Link>
                    );
                  default:
                    return null;
                }
              })()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
