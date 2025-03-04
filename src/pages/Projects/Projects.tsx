import { useRef, useEffect } from 'react';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.scss';
import projects from '../../constants/projects';

function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(containerRef.current);
            entry.target.classList.add(styles.showX);
          }
        });
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('h1');
      elements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <h1 className={`${styles.title} ${styles.hiddenHeaderX}`}>Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            uris={project.uri}
            name={project.name}
            description={project.description}
            attributes={project.attributes}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
