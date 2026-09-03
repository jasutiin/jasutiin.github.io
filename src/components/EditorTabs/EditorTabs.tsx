import { VscClose } from 'react-icons/vsc';

import styles from './EditorTabs.module.scss';
import type { SectionId } from '../../App';
import type { SanityProject } from '../../sanity/projects';

interface EditorTabsProps {
  activeProject: SanityProject | null;
  activeSection: SectionId;
  isProjectActive: boolean;
  onProjectClose: () => void;
  onProjectClick: () => void;
  onSectionClick: (section: SectionId) => void;
}

function EditorTabs({
  activeProject,
  activeSection,
  isProjectActive,
  onProjectClose,
  onProjectClick,
  onSectionClick,
}: EditorTabsProps) {
  const staticTabs: { label: string; section: SectionId }[] = [
    { label: 'home.tsx', section: 'home' },
    { label: 'about.html', section: 'about' },
    { label: 'projects.json', section: 'projects' },
  ];

  return (
    <nav className={styles.container} aria-label="Open editor tabs">
      <ul className={styles.list}>
        {staticTabs.map((tab) => (
          <li key={tab.section} className={styles.tab}>
            <button
              className={
                activeSection === tab.section && !isProjectActive
                  ? styles.active
                  : styles.item
              }
              onClick={() => onSectionClick(tab.section)}
            >
              {tab.label}
            </button>
            <button
              aria-label={`Close ${tab.label}`}
              className={styles.closeButton}
              onClick={() => undefined}
              type="button"
            >
              <VscClose aria-hidden="true" size={15} />
            </button>
          </li>
        ))}
        {activeProject && (
          <li className={styles.tab}>
            <button
              className={isProjectActive ? styles.active : styles.item}
              onClick={onProjectClick}
            >
              {activeProject.title}.md
            </button>
            <button
              aria-label={`Close ${activeProject.title}.md`}
              className={styles.closeButton}
              onClick={onProjectClose}
              type="button"
            >
              <VscClose aria-hidden="true" size={15} />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default EditorTabs;
