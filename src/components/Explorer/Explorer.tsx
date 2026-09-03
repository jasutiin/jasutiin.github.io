import { useEffect, useState } from 'react';
import { VscFolderOpened } from 'react-icons/vsc';

import styles from './Explorer.module.scss';
import type { SectionId } from '../../App';
import {
  getProjectSlug,
  getProjects,
  type SanityProject,
} from '../../sanity/projects';

interface ExplorerProps {
  activeProjectSlug?: string;
  activeSection: SectionId;
  onProjectClick: (project: SanityProject) => void;
  onSectionClick: (section: SectionId) => void;
}

function Explorer({
  activeProjectSlug,
  activeSection,
  onProjectClick,
  onSectionClick,
}: ExplorerProps) {
  const [projects, setProjects] = useState<SanityProject[]>([]);

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
          setProjects([]);
        }
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <nav className={styles.container} aria-label="Portfolio files">
      <div className={styles.header}>
        <VscFolderOpened aria-hidden="true" size={16} />
        <h3>Portfolio</h3>
      </div>
      <ul className={styles.items}>
        <li className={styles.item}>
          <button
            onClick={() => onSectionClick('home')}
            className={`${styles.inner} ${
              activeSection === 'home' ? styles.active : ''
            }`}
          >
            home.tsx
          </button>
        </li>
        <li className={styles.item}>
          <button
            onClick={() => onSectionClick('about')}
            className={`${styles.inner} ${
              activeSection === 'about' ? styles.active : ''
            }`}
          >
            about.html
          </button>
        </li>
        <li className={styles.item}>
          <button
            onClick={() => onSectionClick('projects')}
            className={`${styles.inner} ${
              activeSection === 'projects' && !activeProjectSlug
                ? styles.active
                : ''
            }`}
          >
            projects.json
          </button>
        </li>
        <li className={styles.item}>
          <div className={styles.folder}>
            <VscFolderOpened aria-hidden="true" size={16} />
            <span>projects</span>
          </div>
          {projects.length > 0 && (
            <ul className={styles.projectItems}>
              {projects.map((project) => {
                const projectSlug = getProjectSlug(project);
                return (
                  <li key={project._id}>
                    <button
                      className={`${styles.projectItem} ${
                        activeProjectSlug === projectSlug ? styles.active : ''
                      }`}
                      onClick={() => onProjectClick(project)}
                    >
                      {project.title}.md
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Explorer;
