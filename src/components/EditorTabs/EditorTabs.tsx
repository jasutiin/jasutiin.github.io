import styles from './EditorTabs.module.scss';
import { NavLink } from 'react-router-dom';

function EditorTabs() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.item
            }
          >
            home.tsx
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.active : styles.item
            }
          >
            about.html
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? styles.active : styles.item
            }
          >
            projects.json
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default EditorTabs;
