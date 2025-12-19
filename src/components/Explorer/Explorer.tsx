import { VscChevronDown } from 'react-icons/vsc';
import styles from './Explorer.module.scss';
import type { SectionId } from '../../App';

interface ExplorerProps {
  activeSection: SectionId;
  onSectionClick: (section: SectionId) => void;
}

function Explorer({ activeSection, onSectionClick }: ExplorerProps) {
  return (
    <nav className={styles.container}>
      <div className={styles.header}>
        <VscChevronDown size={20} />
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
              activeSection === 'projects' ? styles.active : ''
            }`}
          >
            projects.json
          </button>
        </li>
      </ul>
      <div className={styles.items}></div>
    </nav>
  );
}

export default Explorer;
