import { useRef, useEffect, useState } from 'react';
import type { SectionId } from '../../App';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.scss';
import {
  getProjectSlug,
  getProjects,
  type SanityProject,
} from '../../sanity/projects';

interface ProjectsProps {
  setActiveSection: (section: SectionId) => void;
}

function Projects({ setActiveSection }: ProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<SanityProject[] | null>(null);
  const [hasLoadError, setHasLoadError] = useState(false);

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
    let isCurrent = true;

    getProjects()
      .then((data) => {
        if (isCurrent) {
          setProjects(data);
        }
      })
      .catch(() => {
        if (isCurrent) {
          setHasLoadError(true);
        }
      });

    return () => {
      isCurrent = false;
    };
  }, []);

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
        {hasLoadError ? (
          <p className={styles.emptyState}>
            Projects are unavailable right now. Please try again later.
          </p>
        ) : projects === null ? (
          <p className={styles.emptyState}>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className={styles.emptyState}>Coming soon!</p>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project._id}
              uris={project.cardImageUrl ? [project.cardImageUrl] : []}
              name={project.title}
              description={project.description ?? ''}
              attributes={[]}
              links={[]}
              projectPath={`/project/${getProjectSlug(project)}`}
              githubUrl={project.githubUrl}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Projects;
