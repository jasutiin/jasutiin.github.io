import { useRef, useEffect } from 'react';
import type { SectionId } from '../../App';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.scss';
import projects from '../../constants/projects';

interface ProjectsProps {
  setActiveSection: (section: SectionId) => void;
}

function Projects({ setActiveSection }: ProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('projects');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      sectionObserver.observe(containerRef.current);
    }

    return () => sectionObserver.disconnect();
  }, [setActiveSection]);

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
