import styles from './EditorTabs.module.scss';
import { NavLink } from 'react-router-dom';

function EditorTabs() {
  return (
    <div className={styles.container}>
      <NavLink to="/" className={styles.item}>
        home.tsx
      </NavLink>

      <NavLink to="/about" className={styles.item}>
        about.html
      </NavLink>

      <NavLink to="/projects" className={styles.item}>
        projects.json
      </NavLink>
    </div>
  );
}

export default EditorTabs;
