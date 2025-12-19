import styles from './EditorTabs.module.scss';
import type { SectionId } from '../../App';

interface EditorTabsProps {
  activeSection: SectionId;
  onSectionClick: (section: SectionId) => void;
}

function EditorTabs({ activeSection, onSectionClick }: EditorTabsProps) {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <button
            onClick={() => onSectionClick('home')}
            className={activeSection === 'home' ? styles.active : styles.item}
          >
            home.tsx
          </button>
        </li>
        <li>
          <button
            onClick={() => onSectionClick('about')}
            className={activeSection === 'about' ? styles.active : styles.item}
          >
            about.html
          </button>
        </li>
        <li>
          <button
            onClick={() => onSectionClick('projects')}
            className={
              activeSection === 'projects' ? styles.active : styles.item
            }
          >
            projects.json
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default EditorTabs;
