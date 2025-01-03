import styles from './ActivityBar.module.scss';
import { NavLink } from 'react-router-dom';

import { VscFiles } from 'react-icons/vsc';
import { VscCode } from 'react-icons/vsc';
import { VscAccount } from 'react-icons/vsc';

const iconSize: number = 30;

function ActivityBar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.icon
            }
          >
            <VscFiles size={iconSize} />
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? styles.active : styles.icon
            }
          >
            <VscCode size={iconSize} />
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.active : styles.icon
            }
          >
            <VscAccount size={iconSize} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ActivityBar;
