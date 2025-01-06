import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './ProjectCard.module.scss';

import { FaGithub } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa6';

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
      <div className={styles.imageContainer}>
        {uris.map((uri, index) =>
          index === 0 ? (
            <img
              className={`${styles.image} ${styles.hiddenY}`}
              src={uri}
              key={uri}
            />
          ) : (
            <img
              className={`${styles.image} ${styles.noshow}`}
              src={uri}
              key={uri}
            />
          )
        )}
      </div>
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
                  case 'YouTube':
                    return (
                      <Link to={link[1]} target="_blank">
                        <FaYoutube size={40} />
                      </Link>
                    );
                  case 'TikTok':
                    return (
                      <Link to={link[1]} target="_blank">
                        <FaTiktok size={35} />
                      </Link>
                    );
                  case 'Live':
                    return <Link to={link[1]} target="_blank"></Link>;
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
