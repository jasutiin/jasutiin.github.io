import styles from './ActivityBar.module.scss';
import { NavLink } from 'react-router-dom';

import { VscFiles } from 'react-icons/vsc';
import { VscCode } from 'react-icons/vsc';
import { VscAccount } from 'react-icons/vsc';

const iconSize: number = 30;

function ActivityBar() {
  return (
    <div className={styles.container}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.icon)}
      >
        <VscFiles size={iconSize} />
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? styles.active : styles.icon)}
      >
        <VscCode size={iconSize} />
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? `${styles.active} ${styles.bottom}`
            : `${styles.icon} ${styles.bottom}`
        }
      >
        <VscAccount size={iconSize} />
      </NavLink>
    </div>
  );
}

export default ActivityBar;
