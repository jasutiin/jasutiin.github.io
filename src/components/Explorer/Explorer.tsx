import { NavLink } from 'react-router-dom';
import { VscChevronDown } from 'react-icons/vsc';
import styles from './Explorer.module.scss';

function Explorer() {
  return (
    <nav className={styles.container}>
      <div className={styles.header}>
        <VscChevronDown size={20} />
        <h3>Portfolio</h3>
      </div>
      <ul className={styles.items}>
        <li className={styles.item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.inner}` : styles.inner
            }
          >
            home.tsx
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.inner}` : styles.inner
            }
          >
            about.html
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.inner}` : styles.inner
            }
          >
            projects.json
          </NavLink>
        </li>
      </ul>
      <div className={styles.items}></div>
    </nav>
  );
}

export default Explorer;
