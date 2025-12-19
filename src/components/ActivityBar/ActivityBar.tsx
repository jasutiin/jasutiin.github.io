import styles from './ActivityBar.module.scss';

import { VscFiles } from 'react-icons/vsc';
import { VscCode } from 'react-icons/vsc';
import { VscAccount } from 'react-icons/vsc';

import type { SectionId } from '../../App';

const iconSize: number = 30;

interface ActivityBarProps {
  activeSection: SectionId;
  onSectionClick: (section: SectionId) => void;
}

function ActivityBar({ activeSection, onSectionClick }: ActivityBarProps) {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button
            className={activeSection === 'home' ? styles.active : styles.icon}
            onClick={() => onSectionClick('home')}
          >
            <VscFiles size={iconSize} />
          </button>
        </li>
        <li className={styles.item}>
          <button
            className={
              activeSection === 'projects' ? styles.active : styles.icon
            }
            onClick={() => onSectionClick('projects')}
          >
            <VscCode size={iconSize} />
          </button>
        </li>
        <li className={styles.item}>
          <button
            className={activeSection === 'about' ? styles.active : styles.icon}
            onClick={() => onSectionClick('about')}
          >
            <VscAccount size={iconSize} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default ActivityBar;
